document.addEventListener('DOMContentLoaded', () => {
    const imageInput = document.getElementById('imageInput');
    const removeButton = document.getElementById('removeButton');
    const bgColorInput = document.getElementById('bgColor');
    const toleranceInput = document.getElementById('tolerance');
    const originalPreview = document.getElementById('originalPreview');
    const resultCanvas = document.getElementById('resultCanvas');
    const downloadLink = document.getElementById('downloadLink');

    let originalImage = null;

    imageInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                originalImage = new Image();
                originalImage.onload = () => {
                    originalPreview.src = e.target.result;
                };
                originalImage.src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    });

    function hexToRgb(hex) {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    }

    function removeBackground(image, bgColor, tolerance) {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        
        canvas.width = image.width;
        canvas.height = image.height;
        
        ctx.drawImage(image, 0, 0);
        
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;
        
        const targetColor = hexToRgb(bgColor);
        
        // 第一次掃描：標記透明像素
        for (let i = 0; i < data.length; i += 4) {
            const r = data[i];
            const g = data[i + 1];
            const b = data[i + 2];
            
            // 計算顏色差異
            const diff = Math.sqrt(
                Math.pow(r - targetColor.r, 2) +
                Math.pow(g - targetColor.g, 2) +
                Math.pow(b - targetColor.b, 2)
            );
            
            // 如果顏色差異小於容差值，設為透明
            if (diff <= tolerance) {
                data[i + 3] = 0;
            } else if (diff <= tolerance * 2) {
                // 邊緣過渡區域：漸變透明度
                const alpha = ((diff - tolerance) / tolerance) * 255;
                data[i + 3] = Math.min(255, alpha);
            }
        }
        
        // 第二次掃描：去除邊緣綠色汙染（defringe）
        const width = canvas.width;
        const height = canvas.height;
        
        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                const i = (y * width + x) * 4;
                const alpha = data[i + 3];
                
                // 只處理半透明像素（可能是邊緣）
                if (alpha > 0 && alpha < 255) {
                    const r = data[i];
                    const g = data[i + 1];
                    const b = data[i + 2];
                    
                    // 計算與背景色的混合比例
                    const bgInfluence = (255 - alpha) / 255;
                    
                    // 移除背景色的影響
                    data[i] = Math.min(255, Math.max(0, (r - targetColor.r * bgInfluence) / (1 - bgInfluence)));
                    data[i + 1] = Math.min(255, Math.max(0, (g - targetColor.g * bgInfluence) / (1 - bgInfluence)));
                    data[i + 2] = Math.min(255, Math.max(0, (b - targetColor.b * bgInfluence) / (1 - bgInfluence)));
                }
            }
        }
        
        ctx.putImageData(imageData, 0, 0);
        return canvas;
    }

    removeButton.addEventListener('click', () => {
        if (!originalImage) {
            alert('請先上傳圖片');
            return;
        }

        const bgColor = bgColorInput.value;
        const tolerance = parseInt(toleranceInput.value);
        
        const resultCanvasElement = removeBackground(originalImage, bgColor, tolerance);
        
        // 設定結果 canvas 的尺寸
        resultCanvas.width = originalImage.width;
        resultCanvas.height = originalImage.height;
        
        // 將結果繪製到顯示的 canvas 上
        const ctx = resultCanvas.getContext('2d');
        ctx.clearRect(0, 0, resultCanvas.width, resultCanvas.height);
        ctx.drawImage(resultCanvasElement, 0, 0);
        
        // 設定下載連結
        resultCanvas.toBlob((blob) => {
            const url = URL.createObjectURL(blob);
            downloadLink.href = url;
            downloadLink.style.display = 'inline-block';
        }, 'image/png');
    });
});
