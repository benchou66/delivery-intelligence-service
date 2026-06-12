# Delivery Intelligence Service — 企業 AI 落地服務規格

一個單檔、可離線運作的互動式商業化服務規格網站。整合三個核心模組，呈現一套以**資料主權自有、開源模型無綁定、知識移交為終點**為原則的端對端企業 AI 落地服務體系。

🔗 **線上瀏覽**：[https://benchou66.github.io/delivery-intelligence-service/](https://benchou66.github.io/delivery-intelligence-service/)

## 三大核心模組

| 模組 | 名稱 | 說明 |
|---|---|---|
| **A** | AI LLM Wiki | 以企業文件為語料的 RAG 知識答詢系統，地端優先、引用可溯源 |
| **B** | DevOps CI/CD | 從需求釐清到 AI 編碼、TDD、CI/CD、自主維運的 Agentic 開發流水線 |
| **C** | FDE AI 落地師 | 派駐現場的 AI 工程顧問，五種層級，以知識移交為 KPI |

---

## ✏️ 如何修改內容（重點）

**所有文字、價格、數據都集中在一個檔案：[`content.js`](content.js)**
你只要改這個檔，**不用碰 `index.html`**。

1. 打開 [`content.js`](content.js)。
2. 找到要改的文字，改掉「引號之間」的內容。
   例：`title: "三模組整合架構"` → `title: "我的新標題"`
3. 存檔，commit & push（見下方），線上版會自動更新。

### 三個小規則（不遵守會讓網頁壞掉）
- 文字一定要包在成對的引號裡：`"像這樣"`
- 每行結尾的逗號 `,` 要保留，不要刪。
- 文字本身若要用雙引號，請改用中文引號「」或單引號 `'`，避免和外層引號打架。

### 顏色寫法
用代號字串即可：`"blue"` `"teal"` `"coral"` `"amber"` `"navy"`；
深淺底色：`"bluePale"` `"tealPale"` `"coralPale"` `"amberPale"`；也可直接寫色碼 `"#854F0B"`。

### 兩個互動工具（效益估算 / 決策框架）
- **效益估算**：`content.js` 裡 `roi.params` 的「數字」會直接影響試算結果（金額單位為「萬元」）。
- **決策框架**：問題選項的「代碼」（每個 `[代碼, 顯示文字]` 的第一個值）和判斷邏輯綁定，**建議只改顯示文字、不要改代碼**，否則建議結果會失準。

---

## 預覽與上線

**本機預覽**：直接用瀏覽器打開 `index.html` 即可（免安裝）。

**上線（GitHub Pages 自動部署）**：
```bash
git add content.js
git commit -m "更新內容"
git push
```
push 後約 1 分鐘，[線上網站](https://benchou66.github.io/delivery-intelligence-service/)會自動更新。

> 也可以直接在 GitHub 網頁上點 `content.js` 的鉛筆圖示線上編輯、commit，同樣會自動部署。

## 檔案結構

| 檔案 | 用途 |
|---|---|
| `content.js` | **你要編輯的檔** — 所有文字、價格、數據 |
| `index.html` | 版面與互動邏輯（一般不需更動） |

## 技術說明

- 單檔網站，無建置步驟、無外部相依套件安裝。
- React 18 + Babel Standalone（CDN）在瀏覽器端直接編譯，`index.html` 載入 `content.js` 後渲染。

## 免責聲明

內容為示例性服務架構與**說明性估算**，非正式財務或法律建議。所有價格、TCO、ROI 試算僅供理解成本結構之用；企業決策請依實際需求進行詳細評估。
