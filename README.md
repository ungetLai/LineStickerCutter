# LineStickerCutter

**LineStickerCutter** 是一個功能強大的靜態網頁工具集，專為 LINE 貼圖創作者設計。提供圖片分割和去背功能，讓你輕鬆製作貼圖。

## ✨ 功能特色

### 🔪 圖片分割工具 (index.html)
- 自訂分割數量（1-10 行/列）
- 即時預覽分割結果
- 單張圖片快速處理
- 獨立下載每個分割區塊

### 📦 批量分割工具 (index2.html)
- 支援多張圖片同時處理
- 自訂分割數量（1-10 行/列）
- 一鍵打包下載 ZIP
- 適合大量貼圖製作

### 🎨 圖片去背工具 (index3.html)
- 智能色彩去背
- 可調整背景顏色
- 容差值精確控制
- 邊緣去汙染技術，消除綠邊
- 透明背景 PNG 輸出

## 🔧 使用方式

### 圖片分割工具 (index.html)
1. 使用瀏覽器開啟 `index.html`
2. 輸入直列數量（列數）和橫列數量（行數）
   - 例如：直列 4、橫列 3 = 切割成 4x3 共 12 張圖
3. 上傳一張圖片
4. 點擊「分割圖片」按鈕
5. 分別下載每個分割區塊

### 批量分割工具 (index2.html)
1. 使用瀏覽器開啟 `index2.html`
2. 輸入直列數量和橫列數量
3. 上傳多張圖片（按住 Ctrl 或 Shift 多選）
4. 點擊「分割圖片」按鈕
5. 點擊「下載所有圖片 (ZIP)」打包下載

### 圖片去背工具 (index3.html)
1. 使用瀏覽器開啟 `index3.html`
2. 選擇背景色（預設為 #00FF00 綠色）
3. 調整容差值（建議 50-80）
   - 數值越大，移除越多相似顏色
4. 上傳圖片
5. 點擊「去背」按鈕
6. 下載透明背景的 PNG 圖片

## 📁 專案結構

```
LineStickerCutter/
│
├── index.html        # 圖片分割工具（單張）
├── index2.html       # 圖片分割工具（批量）
├── index3.html       # 圖片去背工具
├── styles.css        # 頁面樣式（含導航選單）
├── script.js         # 單張分割功能邏輯
├── script2.js        # 批量分割功能邏輯
└── script3.js        # 去背功能邏輯
```

## 🚀 部署方式

本專案為純前端靜態頁面，無需伺服器即可運行，可部署於以下平台：

- GitHub Pages
- Netlify
- Vercel
- Cloudflare Pages

### GitHub Pages 部署方式：

1. 將專案推送至 GitHub repository
2. 前往 `Settings > Pages`
3. 選擇要部署的分支（如 `main`），資料夾選 root（`/`）
4. 完成後可透過 `https://你的帳號.github.io/LineStickerCutter/` 瀏覽

## 📦 相依套件

- **JSZip** (用於批量處理的 ZIP 打包功能)
  - CDN：`https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js`

## 💡 使用技巧

### 分割工具
- 建議上傳正方形圖片以獲得最佳效果
- 可自由組合直列和橫列數量（如 4x3、5x2 等）
- 範圍限制：1-10 行/列

### 去背工具
- **綠幕貼圖**：使用預設的 #00FF00 綠色，容差值設為 50-60
- **其他顏色背景**：使用顏色選擇器選取背景色
- **消除綠邊**：採用邊緣去汙染技術，自動移除邊緣色彩汙染
- **細節調整**：
  - 容差值太小：背景去除不乾淨
  - 容差值太大：可能誤刪圖片內容
  - 建議從 50 開始調整

## 📜 授權 License

MIT License

---

Made with 💚 給所有 LINE 貼圖創作者！

---

## LineStickerCutter (English)

**LineStickerCutter** is a powerful static web toolset designed for LINE sticker creators, offering image splitting and background removal features.

## ✨ Features

### 🔪 Image Splitter (index.html)
- Custom split dimensions (1-10 rows/columns)
- Real-time preview
- Single image processing
- Individual download for each segment

### 📦 Batch Splitter (index2.html)
- Process multiple images simultaneously
- Custom split dimensions (1-10 rows/columns)
- One-click ZIP download
- Perfect for bulk sticker production

### 🎨 Background Remover (index3.html)
- Smart color-based background removal
- Adjustable background color
- Precision tolerance control
- Edge defringing technology to eliminate color fringes
- Transparent PNG output

## 🔧 How to Use

### Image Splitter (index.html)
1. Open `index.html` in your browser
2. Enter columns and rows count
   - Example: Columns 4, Rows 3 = Split into 4x3 (12 images)
3. Upload an image
4. Click **"分割圖片"** (Split Image)
5. Download each segment individually

### Batch Splitter (index2.html)
1. Open `index2.html` in your browser
2. Enter columns and rows count
3. Upload multiple images (hold Ctrl or Shift for multi-select)
4. Click **"分割圖片"** (Split Image)
5. Click **"下載所有圖片 (ZIP)"** to download all

### Background Remover (index3.html)
1. Open `index3.html` in your browser
2. Select background color (default: #00FF00 green)
3. Adjust tolerance value (recommended: 50-80)
   - Higher values remove more similar colors
4. Upload an image
5. Click **"去背"** (Remove Background)
6. Download transparent PNG image

## 📁 Project Structure

```
LineStickerCutter/
│
├── index.html        # Image Splitter (Single)
├── index2.html       # Image Splitter (Batch)
├── index3.html       # Background Remover
├── styles.css        # Page styles (with navigation menu)
├── script.js         # Single split logic
├── script2.js        # Batch split logic
└── script3.js        # Background removal logic
```

## 🚀 Deployment

This is a static web app. You can deploy it to:

- GitHub Pages
- Netlify
- Vercel
- Cloudflare Pages

### GitHub Pages Deployment:

1. Push the project to a GitHub repository
2. Go to `Settings > Pages`
3. Select the branch to deploy (e.g., `main`), folder: root (`/`)
4. Access via `https://yourusername.github.io/LineStickerCutter/`

## 📦 Dependencies

- **JSZip** (for ZIP packaging in batch processing)
  - CDN: `https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js`

## 💡 Tips

### Splitter Tools
- Use square images for best results
- Freely combine rows and columns (e.g., 4x3, 5x2)
- Range limit: 1-10 rows/columns

### Background Remover
- **Green screen stickers**: Use default #00FF00, tolerance 50-60
- **Other color backgrounds**: Use color picker to select background color
- **Eliminate color fringes**: Uses edge defringing technology to automatically remove edge color contamination
- **Fine-tuning**:
  - Tolerance too low: Background not completely removed
  - Tolerance too high: May remove image content
  - Start with 50 and adjust

## 📜 License

MIT License

---

Made with 💚 for all LINE sticker creators!

- GitHub Pages
- Netlify
- Vercel
- Cloudflare Pages

### Deploying on GitHub Pages:

1. Push this project to your GitHub repository
2. Go to `Settings > Pages`
3. Select the branch (e.g., `main`) and the root (`/`) folder
4. Visit your project at `https://your-username.github.io/LineStickerCutter/`

## 📦 Dependencies

- JSZip (for ZIP packaging in batch processing)
  - Included via CDN: `https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js`

## 📜 License

MIT License

---

Made with 💚 for LINE sticker creators!
