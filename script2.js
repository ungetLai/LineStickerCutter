document.addEventListener('DOMContentLoaded', () => {
    const imageInput = document.getElementById('imageInput');
    const splitButton = document.getElementById('splitButton');
    const previewContainer = document.getElementById('previewContainer');
    const downloadZipButton = document.getElementById('downloadZip');
    let processedImages = [];

    // 處理圖片分割
    async function processImage(file, columns, rows) {
        return new Promise((resolve) => {
            const reader = new FileReader();
            reader.onload = (e) => {
                const img = new Image();
                img.onload = () => {
                    const canvas = document.createElement('canvas');
                    const ctx = canvas.getContext('2d');
                    const parts = [];
                    
                    const partWidth = img.width / columns;
                    const partHeight = img.height / rows;
                    
                    canvas.width = partWidth;
                    canvas.height = partHeight;
                    
                    for (let y = 0; y < rows; y++) {
                        for (let x = 0; x < columns; x++) {
                            ctx.clearRect(0, 0, partWidth, partHeight);
                            ctx.drawImage(
                                img,
                                x * partWidth,
                                y * partHeight,
                                partWidth,
                                partHeight,
                                0,
                                0,
                                partWidth,
                                partHeight
                            );
                            
                            const partData = canvas.toDataURL('image/png');
                            parts.push({
                                data: partData,
                                name: `${file.name.split('.')[0]}_${y * columns + x + 1}.png`
                            });
                        }
                    }
                    
                    resolve(parts);
                };
                img.src = e.target.result;
            };
            reader.readAsDataURL(file);
        });
    }

    // 顯示預覽
    function showPreview(parts) {
        const previewDiv = document.createElement('div');
        previewDiv.className = 'preview-grid';
        
        parts.forEach(part => {
            const img = document.createElement('img');
            img.src = part.data;
            img.alt = part.name;
            previewDiv.appendChild(img);
        });
        
        previewContainer.appendChild(previewDiv);
    }

    // 處理所有圖片
    splitButton.addEventListener('click', async () => {
        const files = imageInput.files;
        const columns = parseInt(document.getElementById('columns').value);
        const rows = parseInt(document.getElementById('rows').value);
        
        if (files.length === 0) {
            alert('請選擇至少一張圖片');
            return;
        }
        
        if (columns < 1 || rows < 1) {
            alert('直列和橫列數量必須大於0');
            return;
        }

        previewContainer.innerHTML = '';
        processedImages = [];

        for (const file of files) {
            const parts = await processImage(file, columns, rows);
            processedImages.push(...parts);
            showPreview(parts);
        }
    });

    // 下載 ZIP
    downloadZipButton.addEventListener('click', async () => {
        if (processedImages.length === 0) {
            alert('請先分割圖片');
            return;
        }

        const zip = new JSZip();
        
        // 確保所有分割後的圖片都被添加到 ZIP 中
        for (const part of processedImages) {
            const base64Data = part.data.split(',')[1];
            zip.file(part.name, base64Data, { base64: true });
        }

        const content = await zip.generateAsync({ type: 'blob' });
        const url = URL.createObjectURL(content);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'split_images.zip';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    });
}); 