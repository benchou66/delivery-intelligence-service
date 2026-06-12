# Delivery Intelligence Service — 企業 AI 落地服務規格

一個單檔、可離線運作的互動式商業化服務規格網站。整合三個核心模組，呈現一套以**資料主權自有、開源模型無綁定、知識移交為終點**為原則的端對端企業 AI 落地服務體系。

🔗 **線上瀏覽**：[https://benchou66.github.io/delivery-intelligence-service/](https://benchou66.github.io/delivery-intelligence-service/)

## 三大核心模組

| 模組 | 名稱 | 說明 |
|---|---|---|
| **A** | AI LLM Wiki | 以企業文件為語料的 RAG 知識答詢系統，地端優先、引用可溯源 |
| **B** | DevOps CI/CD | 從需求釐清到 AI 編碼、TDD、CI/CD、自主維運的 Agentic 開發流水線 |
| **C** | FDE AI 落地師 | 派駐現場的 AI 工程顧問，五種層級，以知識移交為 KPI |

## 網站章節

服務概覽 ・ 模組 A（LLM Wiki）・ 模組 B（DevOps CI/CD）・ 模組 C（FDE 落地師）・ 系統架構 ・ 交付藍圖 ・ 合規與治理 ・ 定價方案 ・ 效益估算（互動試算）・ 決策框架（7 題決策工具）

## 技術說明

- 單一 `index.html`，無建置步驟、無外部相依套件安裝。
- 以 React 18 + Babel Standalone（CDN）在瀏覽器端直接編譯 JSX。
- 直接以瀏覽器開啟 `index.html` 即可運作；或透過 GitHub Pages 線上瀏覽。
- 乾淨的 React 元件原始碼另存於 [`src/App.jsx`](src/App.jsx)。

## 使用方式

直接以瀏覽器開啟 `index.html` 即可，無任何安裝步驟。

## 免責聲明

內容為示例性服務架構與**說明性估算**，非正式財務或法律建議。所有價格、TCO、ROI 試算僅供理解成本結構之用；企業決策請依實際需求進行詳細評估。
