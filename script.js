document.addEventListener('DOMContentLoaded', () => {
    const imageInput = document.getElementById('imageInput');
    const splitButton = document.getElementById('splitButton');
    const originalPreview = document.getElementById('originalPreview');
    const gridContainer = document.getElementById('gridContainer');

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

    function createGridItems(count, columns, rows) {
        gridContainer.innerHTML = '';
        gridContainer.className = `grid-container grid-${columns}x${rows}`;
        
        for (let i = 0; i < count; i++) {
            const gridItem = document.createElement('div');
            gridItem.className = 'grid-item';
            
            const img = document.createElement('img');
            img.id = `part${i + 1}`;
            img.alt = `第${i + 1}部分`;
            
            const downloadLink = document.createElement('a');
            downloadLink.id = `download${i + 1}`;
            downloadLink.download = `part${i + 1}.png`;
            downloadLink.textContent = `下載第${i + 1}部分`;
            
            gridItem.appendChild(img);
            gridItem.appendChild(downloadLink);
            gridContainer.appendChild(gridItem);
        }
    }

    splitButton.addEventListener('click', () => {
        if (!originalImage) {
            alert('請先上傳圖片');
            return;
        }

        const columns = parseInt(document.getElementById('columns').value);
        const rows = parseInt(document.getElementById('rows').value);
        
        if (columns < 1 || rows < 1) {
            alert('直列和橫列數量必須大於0');
            return;
        }
        
        const totalParts = columns * rows;
        
        createGridItems(totalParts, columns, rows);

        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        
        // 計算每個部分的寬度和高度
        const partWidth = originalImage.width / columns;
        const partHeight = originalImage.height / rows;

        // 分割圖片並創建下載連結
        for (let i = 0; i < totalParts; i++) {
            const row = Math.floor(i / columns);
            const col = i % columns;
            
            canvas.width = partWidth;
            canvas.height = partHeight;
            
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(
                originalImage,
                col * partWidth,
                row * partHeight,
                partWidth,
                partHeight,
                0,
                0,
                partWidth,
                partHeight
            );

            const dataURL = canvas.toDataURL('image/png');
            document.getElementById(`part${i + 1}`).src = dataURL;
            document.getElementById(`download${i + 1}`).href = dataURL;
        }
    });
}); 