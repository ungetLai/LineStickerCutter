# LineStickerCutter

**LineStickerCutter** 是一個簡單易用的靜態網頁工具，讓你可以將圖片（如 LINE 貼圖設計圖）快速切割為 **2x2**（四等分）或 **3x3**（九等分）。非常適合貼圖創作者分割完整圖稿後上傳使用。

## 🔧 使用方式

### 單一圖片處理 (index.html)
1. 使用瀏覽器開啟 `index.html` 網頁
2. 選擇分割方式（2x2 或 3x3）
3. 上傳一張圖片（建議使用正方形圖片）
4. 點擊「分割圖片」按鈕
5. 下方會產生分割後圖片及下載連結，可分別下載每一張

### 批量圖片處理 (index2.html)
1. 使用瀏覽器開啟 `index2.html` 網頁
2. 選擇分割方式（2x2 或 3x3）
3. 上傳多張圖片（按住 Ctrl 或 Shift 可以多選）
4. 點擊「分割圖片」按鈕
5. 預覽所有處理後的圖片
6. 點擊「下載所有圖片 (ZIP)」按鈕，將所有分割後的圖片打包下載

## 📁 專案結構

```
LineStickerCutter/
│
├── index.html        # 單一圖片處理頁面
├── index2.html       # 批量圖片處理頁面
├── styles.css        # 頁面樣式
├── script.js         # 單一圖片分割功能邏輯
└── script2.js        # 批量圖片分割功能邏輯
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

- JSZip (用於批量處理頁面的 ZIP 打包功能)
  - 通過 CDN 引入：`https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js`

## 📜 授權 License

MIT License

---

Made with 💚 給所有 LINE 貼圖創作者！

---

## LineStickerCutter (English)

**LineStickerCutter** is a simple static web tool that allows you to split images into a **2x2** (4 parts) or **3x3** (9 parts) grid. It's especially useful for LINE sticker creators who want to break down their artwork into multiple parts.

## 🔧 How to Use

### Single Image Processing (index.html)
1. Open `index.html` in your browser
2. Choose your split mode (2x2 or 3x3)
3. Upload an image (square images recommended)
4. Click the **"分割圖片"** button to split
5. Download each split image from the section below

### Batch Image Processing (index2.html)
1. Open `index2.html` in your browser
2. Choose your split mode (2x2 or 3x3)
3. Upload multiple images (use Ctrl or Shift to select multiple files)
4. Click the **"分割圖片"** button to split
5. Preview all processed images
6. Click **"下載所有圖片 (ZIP)"** to download all split images in a ZIP file

## 📁 Project Structure

```
LineStickerCutter/
│
├── index.html        # Single image processing page
├── index2.html       # Batch image processing page
├── styles.css        # Styling and layout
├── script.js         # Single image splitting logic
└── script2.js        # Batch image splitting logic
```

## 🚀 Deployment

This is a static web app. You can deploy it to:

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
