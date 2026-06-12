/* ════════════════════════════════════════════════════════════════════════
   Delivery Intelligence Service — 內容資料檔（你只要改這個檔）
   ════════════════════════════════════════════════════════════════════════

   ▍怎麼改？
     · 所有顯示在網站上的文字、價格、數據都在這個檔案裡。
     · 找到你要改的文字，改掉「引號之間」的內容即可。
     · 例： title: "三模組整合架構"  →  改成 title: "我的新標題"

   ▍三個小規則（不遵守會讓網頁壞掉）
     1. 文字一定要包在「成對的引號」裡： "像這樣"
     2. 每一行結尾的「逗號 ,」要保留，不要刪。
     3. 如果文字本身要用到雙引號 " ，請改用中文引號「」或單引號 '，
        以免和外面的引號打架。

   ▍顏色怎麼寫？
     顏色用代號字串即可，例如： "blue" "teal" "coral" "amber" "navy"
     深淺底色： "bluePale" "tealPale" "coralPale" "amberPale" "gray100"
     也可以直接寫色碼，例如： "#854F0B"

   ▍改完怎麼上線？
     存檔後，把這個檔 commit & push 到 GitHub，GitHub Pages 會自動更新。
     （或在本機直接用瀏覽器打開 index.html 先預覽。）
   ════════════════════════════════════════════════════════════════════════ */

const CONTENT = {

  // ── 上方導覽列的十個分頁名稱 ───────────────────────────────────────────
  nav: [
    { id: "overview",     label: "服務概覽" },
    { id: "moduleA",      label: "模組 A｜LLM Wiki" },
    { id: "moduleB",      label: "模組 B｜DevOps CI/CD" },
    { id: "moduleC",      label: "模組 C｜FDE 落地師" },
    { id: "architecture", label: "系統架構" },
    { id: "roadmap",      label: "交付藍圖" },
    { id: "compliance",   label: "合規與治理" },
    { id: "pricing",      label: "定價方案" },
    { id: "roi",          label: "效益估算" },
    { id: "decision",     label: "決策框架" },
  ],

  // ══ 分頁 1：服務概覽 ═══════════════════════════════════════════════════
  overview: {
    hero: {
      badge: "商業化服務規格 v2.0",
      year: "2026 年版",
      titlePre: "Delivery ",
      titleHighlight: "Intelligence",
      titlePost: " Service",
      desc: "整合 AI LLM Wiki 知識答詢、DevOps CI/CD Agentic 流水線、以及 FDE AI落地師現場部署，形成一套可持續交付企業智慧的端對端 AI 落地服務體系。",
      chips: ["資料主權自有", "開源模型無綁定", "知識移交為終點", "合規優先設計", "地端 / 雲端混合"],
    },
    stats: [
      { num: "3",    unit: "",  label: "核心服務模組",   color: "blue" },
      { num: "5",    unit: "",  label: "FDE 落地師層級", color: "teal" },
      { num: "24",   unit: "月", label: "標準交付週期",   color: "coral" },
      { num: "100%", unit: "",  label: "知識移交承諾",   color: "navy" },
    ],
    modules: {
      header: { label: "服務核心", title: "三模組整合架構", sub: "三個模組設計為互補，可獨立採購，亦可整合部署。最大價值來自三者協同運作。" },
      items: [
        { id: "A", icon: "📚", name: "AI LLM Wiki", eng: "Knowledge Intelligence", color: "blue",
          desc: "以企業文件為語料，建立可查詢的知識答詢系統。RAG 架構、即時更新、多語言問答，讓隱性知識成為可治理的組織資產。",
          tags: ["RAG 問答", "向量搜尋", "知識圖譜", "地端優先"] },
        { id: "B", icon: "⚙️", name: "DevOps CI/CD", eng: "Agentic Development Pipeline", color: "teal",
          desc: "從需求釐清（Hermes-Agent）到 AI 程式碼生成，整合 TDD/CI/CD 驗證管線，含自動修復與服務下架機制的完整 Agentic 開發流水線。",
          tags: ["Agentic DevOps", "自動測試", "自動修復", "服務治理"] },
        { id: "C", icon: "👤", name: "FDE AI落地師", eng: "Forward Deployment Engineer", color: "coral",
          desc: "派駐企業現場的 AI 工程顧問，負責萃取 tacit knowledge、建構 evaluation set、完成模型客製化，以知識移交為終點。",
          tags: ["Tacit Knowledge", "Eval Set", "現場培訓", "知識移交"] },
      ],
    },
    positioning: {
      header: { label: "市場定位", title: "與直接簽 FDE 合約的根本差異" },
      cols: [
        { label: "傳統 AI 廠商 FDE", ok: false, items: ["Evaluation Set 歸 AI 廠商所有（預設）", "底層綁定閉源 API，議價權流失", "FDE 退場後知識帶走", "資料跨境傳輸，合規風險高", "年度續約漲價無保護條款", "以持續依賴創造客戶黏性"] },
        { label: "Delivery Intelligence Service", ok: true, items: ["Evaluation Set 合約明訂客戶共有或獨有", "開源模型底層，隨時可切換供應商", "知識移交為合約 KPI，培訓時數明訂", "地端優先，資料不離境，符合金管會規範", "價格保護條款、退場計畫白紙黑字", "以客戶自主運作為交付終點"] },
      ],
    },
    customers: {
      header: { label: "目標客群", title: "適用產業與企業規模" },
      items: [
        { icon: "🏦",  name: "金融業",        desc: "銀行、保險、投信、支付",        tags: ["金管會合規", "FIDO", "個資法"],     color: "blue" },
        { icon: "🏭",  name: "製造 / SI / MSP", desc: "系統整合商、IT 服務業、OEM 廠",   tags: ["DevOps 落地", "AI QA", "知識管理"], color: "teal" },
        { icon: "🏥",  name: "醫療 / 生技",    desc: "醫院、健保、藥廠、CRO",         tags: ["HIPAA", "個資法", "GCP 合規"],     color: "coral" },
        { icon: "🏛️", name: "政府 / 公部門",  desc: "資安規範、國安機敏資料處理",    tags: ["地端必要", "國安規範", "資安法"],   color: "gray" },
        { icon: "🛍️", name: "零售 / 電商",    desc: "客服自動化、商品知識問答",      tags: ["RAG 客服", "多語言", "快速 MVP"],   color: "amber" },
        { icon: "⚖️", name: "法律 / 顧問",    desc: "法律文件審查、合約比對分析",    tags: ["文件 RAG", "保密優先", "精確引用"], color: "blue" },
      ],
    },
  },

  // ══ 分頁 2：模組 A｜LLM Wiki ═══════════════════════════════════════════
  moduleA: {
    header: { label: "模組 A", title: "AI LLM Wiki 知識答詢系統", sub: "將企業分散的文件、SOP、會議紀錄、規範轉化為可即時查詢的知識資產。以 RAG 架構確保答案精確可溯源，以地端部署確保資料主權完整。" },
    stats: [
      { num: "70%", unit: "",  label: "知識查詢時間縮短（估算）", color: "blue" },
      { num: "50%", unit: "",  label: "新人 Onboarding 縮短",     color: "teal" },
      { num: "0",   unit: "元", label: "開源模型授權費",          color: "coral" },
    ],
    layers: [
      { label: "知識攝取層", eng: "Knowledge Ingestion", color: "blue", items: [
        { name: "文件解析引擎", detail: "支援 PDF / Word / Excel / PPT / Markdown / HTML；掃描稿 OCR：Tesseract 5.x 或 PaddleOCR（中文優化）；表格結構保留；版本追蹤（Git-like）" },
        { name: "分塊策略（Chunking）", detail: "語意分塊（Semantic Chunking）優於固定長度；標題感知分塊（Title-aware）；重疊窗口（overlap 128 tokens）；中文斷詞：Jieba / CKIP Tagger" },
        { name: "向量嵌入管線", detail: "Embedding 模型：BGE-M3（中英混合，最推薦）或 Nomic Embed v2；向量資料庫：Qdrant（地端高效）/ Weaviate / PGVector（輕量整合）；支援 Hybrid Search（向量 + BM25 關鍵字）" },
        { name: "知識圖譜（選配）", detail: "Neo4j + LLM 自動抽取實體關係；適用法規、流程、組織架構類知識；GraphRAG 架構（Microsoft 方案或自建）；實體消歧義（Entity Resolution）" },
      ] },
      { label: "推論服務層", eng: "Inference & RAG", color: "teal", items: [
        { name: "LLM 後端（地端優先）", detail: "主力模型：Qwen3-72B（中文最強開源）/ Llama 4 Maverick / Mistral Large 3；推論框架：vLLM（高吞吐 PagedAttention）/ Ollama（快速部署）/ TGI；量化：AWQ INT4 or FP8 for L40S；Context Window：32K–128K tokens" },
        { name: "RAG 管線設計", detail: "框架：LlamaIndex（推薦）或 LangChain；進階 RAG：HyDE（假設文件嵌入）/ Multi-query Retrieval / Step-back Prompting；重排序：BGE Reranker v2 / Cross-Encoder；引用溯源：Document ID + 頁碼精確回傳" },
        { name: "API 閘道與多租戶", detail: "FastAPI + Celery（非同步佇列）；Redis 快取（高頻查詢）；多租戶隔離（Collection-level 或 Namespace-level）；Token 用量追蹤（per user / per dept）；串流輸出支援（Server-Sent Events）" },
        { name: "評估與品質監控", detail: "Evaluation 框架：RAGAS（自動評估忠實度、相關性、答案品質）；每月定期執行 Eval Set；異常問答自動標記供 FDE 審查；A/B 測試不同 Retrieval 策略" },
      ] },
      { label: "使用者介面層", eng: "User Interface & Integration", color: "coral", items: [
        { name: "員工問答介面", detail: "Open WebUI（私有化部署）或 AnythingLLM；支援對話歷史、引用溯源點擊跳轉原文、回饋評分（👍/👎）；多語言介面（繁中 / 英 / 日）；Mobile-first 響應式設計" },
        { name: "管理後台", detail: "文件上傳 / 更新 / 版本回滾；知識庫分類與權限管理（RBAC）；用量儀表板（每日查詢數、熱門問題、回答品質趨勢）；Evaluation Set 管理與進度追蹤" },
        { name: "系統整合端點", detail: "REST API + WebSocket；LINE Bot / Microsoft Teams / Slack 整合；Webhook 觸發自動重建索引；SSO 整合（SAML 2.0 / OAuth 2.0）；企業 Active Directory 對接" },
        { name: "合規與稽核", detail: "完整查詢日誌（使用者、時間戳、查詢內容、引用文件）；個資偵測與遮蔽（PII Redaction）；資料留存政策設定（自動刪除）；稽核報表（ISO 27001 / 金管會格式）" },
      ] },
    ],
    hardware: {
      header: { label: "硬體規格", title: "地端部署推薦配置", sub: "根據企業規模和使用人數，提供三種硬體配置方案。所有方案均支援後期升級擴充。" },
      configs: [
        { tier: "輕量方案", forSize: "≤ 50 人、單一場景", price: "NT$80–120 萬", accent: "teal", highlight: false, badge: "",
          hw: ["NVIDIA RTX Pro 6000 Blackwell 96GB × 1", "CPU：Intel Xeon 32C / AMD EPYC 32C", "RAM：128GB DDR5 ECC", "NVMe SSD：4TB（OS + 模型 + 向量庫）", "網路：10GbE"],
          sw: ["Ollama + Open WebUI", "Qdrant（單節點）", "Qwen3-32B AWQ 量化", "適合 < 100 QPS"] },
        { tier: "標準方案", forSize: "50–300 人、3–5 場景", price: "NT$200–350 萬", accent: "blue", highlight: true, badge: "最常見選擇",
          hw: ["NVIDIA L40S 48GB × 2（或 H100 80GB × 1）", "CPU：Xeon Gold 5400 / EPYC 9004 48C+", "RAM：256GB DDR5 ECC", "NVMe SSD：10TB RAID（OS + 模型 + 向量庫）", "網路：25GbE / InfiniBand 選配"],
          sw: ["vLLM（高吞吐 PagedAttention）", "Qdrant 叢集（3 節點）", "Qwen3-72B AWQ + BGE-M3", "適合 300–1000 QPS"] },
        { tier: "旗艦方案", forSize: "300 人以上、全面落地", price: "NT$500–800 萬+", accent: "coral", highlight: false, badge: "",
          hw: ["NVIDIA H200 80GB × 4（或 H100 × 8）", "HPE ProLiant DL380 Gen11 × 2（HA）", "RAM：512GB DDR5 ECC per node", "NVMe SSD：20TB+ NVMe over Fabric", "InfiniBand HDR 200Gb/s"],
          sw: ["vLLM Tensor Parallel（4-GPU）", "Weaviate 叢集 + PGVector 備份", "Llama 4 Maverick / Qwen3-72B FP8", "適合 2000+ QPS，多租戶"] },
      ],
    },
    usecases: {
      header: { label: "應用場景", title: "LLM Wiki 核心使用場景" },
      items: [
        { icon: "📋", name: "SOP / 作業規範問答", desc: "員工詢問「理賠案件超過 30 萬要找誰簽核？」，系統精確引用 SOP 第 3.2.1 條回答，並附原文連結，不再需要翻閱 SharePoint。", benefit: "客服處理時間 -40%" },
        { icon: "🔍", name: "技術知識庫查詢", desc: "工程師詢問「我們的 Kubernetes 升級到 1.30 有哪些 Breaking Change？」，系統整合歷史會議記錄、RFC 文件、Confluence 頁面給出完整答案。", benefit: "問題解決時間 -55%" },
        { icon: "📄", name: "合約 / 法規比對分析", desc: "法務人員上傳合約草稿，系統自動比對公司標準條款模板，標出風險條款，並引用相關判例知識庫說明風險程度。", benefit: "合約審查效率 +3×" },
        { icon: "🎓", name: "新人 Onboarding 助理", desc: "新進人員詢問公司特有流程、系統操作、組織架構，LLM Wiki 24/7 即時回答，同時記錄高頻問題供 HR 補充文件。", benefit: "Onboarding 週期 -50%" },
        { icon: "📊", name: "報告草稿生成", desc: "主管輸入「產出上季客戶投訴分析報告」，系統自動從 CRM、會議紀錄、Email 紀錄中提取相關資訊，生成帶引用的初稿。", benefit: "報告準備時間 -65%" },
        { icon: "🔧", name: "RCA 根因分析輔助", desc: "維運人員描述異常現象，系統對比歷史 Incident 紀錄、變更日誌、監控數據，自動生成 RCA 假設清單供工程師驗證。", benefit: "MTTR 縮短 -35%" },
      ],
    },
  },

  // ══ 分頁 3：模組 B｜DevOps CI/CD ═══════════════════════════════════════
  moduleB: {
    header: { label: "模組 B", title: "DevOps CI/CD Agentic 開發流水線", sub: "對應圖中的三層架構：Knowledge Layer → Agentic Dev → Autonomous Ops。每個階段由 AI Agent 主導，FDE 作為品質把關者，最終目標是讓企業 IT 團隊能獨立維運。" },
    stats: [
      { num: "30min", unit: "",   label: "Vibe Coding 首版原型", color: "blue" },
      { num: "80%",   unit: "",   label: "測試覆蓋率目標",       color: "teal" },
      { num: "99.5%", unit: "",   label: "SLA 目標（k8s）",       color: "coral" },
      { num: "0",     unit: "停機", label: "Blue-Green 部署",       color: "navy" },
    ],
    pipelineTitle: "Agentic 開發流水線（點擊查看詳情）",
    pipeline: [
      { id: "01", name: "Hermes-Agent 需求釐清", color: "blue",     detail: "LLM 驅動的需求對話 Agent。輸入：自然語言需求描述或現有 Word SRS。輸出：結構化 SRS（System Requirements Spec）+ Markdown Wiki + 需求衝突報告 + 缺口清單。支援需求追蹤矩陣自動生成。" },
      { id: "02", name: "LLM-Wiki Generator", color: "blueMid",   detail: "將 SRS 自動轉化為可搜尋的 Markdown Wiki 知識庫。同步生成 Domain Agent Skills 定義文件（領域技能規格）、SDD（軟體設計文件）草稿、API 契約（OpenAPI 3.0）。FDE 審查後 commit 到 Git。" },
      { id: "03", name: "OpenCode AI 編碼", color: "teal",        detail: "Claude Code / Windsurf 作為主力 Agentic Coding 引擎。支援 Vibe Coding（現場即時示範，30 分鐘出原型）。增量迭代：根據業務人員即時反饋調整。輸出：結構化 PR，包含 diff、影響分析、測試覆蓋報告。" },
      { id: "04", name: "TDD 自動測試生成", color: "teal",        detail: "根據 SRS 需求自動生成單元測試、整合測試、E2E 測試。支援：pytest / Jest / JUnit / Go test。測試覆蓋率目標 ≥ 80%。AI 自動補全缺口測試案例。測試結果回寫 Evaluation Set。" },
      { id: "05", name: "CI/CD 品質門檻", color: "coral",         detail: "GitHub Actions / GitLab CI 觸發自動化流水線。品質門檻（Quality Gates）：測試通過率 100%、覆蓋率 ≥ 80%、Sonarqube 無 Critical 問題、Trivy 安全掃描無高危漏洞。通過才允許部署。" },
      { id: "06", name: "容器建構與部署", color: "coral",         detail: "Docker multi-stage build（最小化 image size）。Kubernetes（k3s 地端 / GKE/EKS 雲端）。部署策略：Blue-Green（零停機）/ Canary（灰度發布 10% → 30% → 100%）。ArgoCD GitOps 管理（宣告式部署）。" },
      { id: "07", name: "AI 監控與異常偵測", color: "#854F0B",    detail: "OpenTelemetry + Prometheus + Grafana 監控 Stack。AI 異常偵測（Detomaly 或自建 LSTM 模型）：識別非預期行為模式。自動修復 Loop：輕微異常 → 自動 Rollback / 重啟。無法修復 → 通知維運人員。" },
      { id: "08", name: "服務下架 / 封存", color: "gray600",      detail: "長期無人使用（30 天以上）或 SLA 持續違反 → 觸發下架流程。自動通知相關 Team Lead 確認。封存狀態：服務停止但 data + config 保留 180 天。正式刪除前需要雙人授權（4-eyes principle）。" },
    ],
    toolchain: {
      header: { label: "工具鏈規格", title: "CI/CD 完整工具鏈" },
      cats: [
        { cat: "版本控制 & 協作", color: "blue", tools: [
          { name: "GitHub / GitLab", role: "Git 倉庫、PR Review、Issues 追蹤" },
          { name: "Branch Strategy", role: "main / develop / feature/* / hotfix/* 規範" },
          { name: "Conventional Commits", role: "語意化 Commit Message，自動生成 CHANGELOG" },
        ] },
        { cat: "CI 自動化", color: "teal", tools: [
          { name: "GitHub Actions / GitLab CI", role: "觸發：PR、Merge、Tag、Schedule" },
          { name: "Sonarqube", role: "靜態程式碼分析、技術債追蹤、品質門檻" },
          { name: "Trivy", role: "容器映像漏洞掃描、IaC 安全檢查（Terraform/Helm）" },
        ] },
        { cat: "容器 & 部署", color: "coral", tools: [
          { name: "Docker + Buildx", role: "Multi-stage build、multi-arch（amd64/arm64）" },
          { name: "Kubernetes / k3s", role: "地端：k3s（輕量）；雲端：GKE / EKS / AKS" },
          { name: "ArgoCD（GitOps）", role: "宣告式部署、自動同步、Rollback 管理" },
        ] },
        { cat: "監控 & 秘密管理", color: "#854F0B", tools: [
          { name: "Prometheus + Grafana", role: "指標收集、儀表板、告警規則（Alertmanager）" },
          { name: "OpenTelemetry", role: "分散式追蹤、Log 標準化、Metric 匯出" },
          { name: "HashiCorp Vault", role: "Secrets 加密管理、動態憑證、Key Rotation" },
        ] },
      ],
    },
    ops: {
      header: { label: "自主維運", title: "Autonomous Ops 治理機制", sub: "當 AI agent 出現異常時的四層處置流程，確保服務穩定性，同時保留人工審核的最終控制權。" },
      steps: [
        { step: "1", title: "異常偵測", desc: "AI 監控分析儀表板持續監控：回應時間、錯誤率、資源使用率、模型輸出品質分數。偵測異常後 30 秒內觸發。", color: "blue" },
        { step: "2", title: "自動修復", desc: "輕微異常（如記憶體洩漏、單一 Pod 崩潰）：自動重啟 / Rollback 到上一版本。修復後自動驗證並記錄 Incident。", color: "teal" },
        { step: "3", title: "人工通知", desc: "無法自動修復或持續 15 分鐘以上的異常：通知維運人員（PagerDuty / LINE Notify / Teams）附帶 RCA 初步分析。", color: "amber" },
        { step: "4", title: "服務下架", desc: "不可修復或長期無人使用：觸發下架流程，需要雙人授權。Data 保留 180 天，可隨時恢復。", color: "coral" },
      ],
    },
  },

  // ══ 分頁 4：模組 C｜FDE 落地師 ═════════════════════════════════════════
  moduleC: {
    header: { label: "模組 C", title: "FDE AI落地師服務規格", sub: "Forward Deployment Engineer 是 DIS 最核心的差異化。不同於傳統顧問，FDE 以知識移交為 KPI，確保企業在合約結束後具備完整自主運作能力。" },
    tiers: [
      { id: "associate", title: "Associate FDE", sub: "AI 應用導入師", color: "#854F0B", bg: "amberPale", months: "2–4 個月駐點", target: "小型企業 / MVP 階段", highlight: false, rate: "NT$25–35 萬 / 月",
        skills: ["執行標準化 RAG 建置流程", "協助 LLM Wiki 文件攝取與標記分類", "操作 CI/CD 流水線部署與驗證", "收集使用者回饋與 Evaluation 資料", "撰寫運維手冊與使用者文件", "日常系統健康監控與基礎維護"],
        deliverables: ["LLM Wiki MVP（≥ 50 份文件）", "基礎 CI/CD 管線建立確認書", "Evaluation Set 初版（50 cases）", "使用者操作手冊"] },
      { id: "senior", title: "Senior FDE", sub: "AI 系統架構師", color: "blue", bg: "bluePale", months: "3–6 個月駐點", target: "中型企業 / 多場景落地", highlight: true, rate: "NT$45–65 萬 / 月",
        skills: ["Tacit Knowledge 萃取（現場 workflow 解構）", "Evaluation Set 建構（100+ 精標案例）", "Prompt Engineering 與 Chain-of-Thought 設計", "Agentic workflow 設計與實作（LangGraph / CrewAI）", "LoRA / QLoRA Fine-tuning 執行與評估", "內部團隊培訓（≥ 40hr/月）與知識移交計畫"],
        deliverables: ["完整 Eval Set（200+ cases）", "Fine-tuned 模型（視需求）", "Prompt 配置文件", "培訓課程教材（≥ 8 個模組）", "月度 AI 效益報告"] },
      { id: "principal", title: "Principal FDE", sub: "AI 轉型顧問", color: "teal", bg: "tealPale", months: "6–12 個月合作", target: "大型企業 / 受監管行業", highlight: false, rate: "NT$80–120 萬 / 月",
        skills: ["企業 AI 戰略規劃與 3 年路線圖制定", "多系統整合架構設計（API Gateway / ESB）", "Data Governance 框架與資料分級策略建立", "合規風險評估（金管會 / 個資法 / HIPAA）", "FDE 合約談判策略與 IP 條款設計", "C-level 報告與 Board 簡報準備"],
        deliverables: ["AI 轉型路線圖文件", "Data Governance 框架", "合規風險評估報告", "Board-level 效益報告", "FDE 退場與自主運作認證"] },
      { id: "pod", title: "Full Delivery Pod", sub: "跨功能交付團隊", color: "navy", bg: "gray100", months: "12–24 個月合約", target: "全面 AI 轉型 / 旗艦方案", highlight: false, rate: "NT$200–280 萬 / 月（整個 Pod）",
        skills: ["1× Principal FDE（策略 + 合規）", "2× Senior FDE（架構 + Eval Set）", "2× Associate FDE（執行 + 運維）", "1× DevOps 工程師（CI/CD + 監控）", "1× AI QA 工程師（測試 + 評估）", "1× PM 協作（進度 + 溝通）"],
        deliverables: ["三模組完整交付", "全員技能認證報告", "完整資產移交清單", "後續自主運作 SOP", "FDE 轉顧問角色協議"] },
    ],
    skillsLabel: "職責範疇",
    deliverablesLabel: "合約交付物",
    clauses: {
      header: { label: "合約保障", title: "FDE 合約必要條款（DIS 標準）", sub: "這五條是 DIS 服務合約的核心差異化條款，確保客戶在整個合作過程中維持完整的知識主權與退場選項。" },
      items: [
        { num: "1", title: "Evaluation Set 共有條款", color: "blue",    desc: "FDE 駐點期間建立的所有 Evaluation Cases、Prompt 配置、測試資料，合約明訂客戶共有（或客戶獨有）。AI 公司不得將其用於其他客戶或模型訓練，除非客戶書面同意。" },
        { num: "2", title: "競業保護條款", color: "teal",              desc: "FDE 所了解的業務 workflow、定價邏輯、客戶名單等商業機密，AI 公司承諾不用於同行業其他客戶。保護期：合約終止後 2 年。" },
        { num: "3", title: "知識移交 KPI", color: "coral",             desc: "合約明訂培訓時數（≥ 40hr/月）、內部人員技能認證標準、Eval Set 同步交付時程。退場時客戶需通過「自主運作能力評估」，否則延長服務期。" },
        { num: "4", title: "價格保護條款", color: "amber",             desc: "年度漲幅上限：CPI + 5%。續約價格最遲於到期前 90 天通知。任何漲幅超過上限均需客戶書面同意，否則視同以原價自動續約。" },
        { num: "5", title: "退場服務條款", color: "#854F0B",           desc: "合約終止後，提供 60 天過渡期支援（以原合約費率 50% 計）。協助遷移或轉換供應商。所有 Data 完整交付後 30 天內自 AI 公司系統刪除，並提供刪除證明。" },
      ],
    },
  },

  // ══ 分頁 5：系統架構 ═══════════════════════════════════════════════════
  architecture: {
    header: { label: "系統架構", title: "DIS 整合架構全覽", sub: "三模組以 API 閘道整合，資料流在企業防火牆內部完成。地端 LLM 作為核心推論引擎，雲端 API 僅作為補充（前沿能力場景）。" },
    diagramTitle: "SYSTEM ARCHITECTURE OVERVIEW",
    archCols: [
      { title: "Knowledge Layer", items: ["文件攝取引擎", "BGE-M3 Embedding", "Qdrant 向量庫", "Neo4j 知識圖譜"] },
      { title: "Inference Layer", items: ["vLLM 推論引擎", "Qwen3-72B / Llama4", "RAG 管線（LlamaIndex）", "FastAPI 閘道"] },
      { title: "Application Layer", items: ["Open WebUI / Portal", "REST API 端點", "CI/CD 管線（ArgoCD）", "監控（Grafana）"] },
    ],
    fdeLayer: { title: "FDE 接觸層（合約保護範圍）", items: ["Tacit Knowledge 萃取", "Eval Set 建構", "Prompt 設計", "Fine-tuning", "培訓移交"] },
    external: { title: "外部整合（可選 / 受限使用）", items: ["Anthropic API（前沿補充）", "Azure OpenAI", "Google Vertex AI", "LINE / Teams Webhook"] },
    dataflow: {
      header: { label: "資料流設計", title: "企業資料流與隔離原則", sub: "所有敏感資料在企業邊界內完成處理。外部 API 調用不得包含個資或機密業務邏輯。" },
      secs: [
        { title: "資料分級策略", color: "blue", levels: [
          { grade: "Level 1 機敏", desc: "客戶個資、財務數據、簽約條款", rule: "僅地端推論，禁止外送" },
          { grade: "Level 2 內部", desc: "SOP、技術文件、內部流程", rule: "地端優先，雲端需加密脫敏" },
          { grade: "Level 3 一般", desc: "公開技術資料、FAQ", rule: "地端 / 雲端均可" },
        ] },
        { title: "Evaluation Set 資料治理", color: "teal", levels: [
          { grade: "建構期", desc: "FDE 協助整理，使用真實業務案例", rule: "存於客戶自有 Git 倉庫" },
          { grade: "使用期", desc: "每月執行自動評估（RAGAS）", rule: "評估結果留存客戶系統" },
          { grade: "移交期", desc: "合約終止前 30 天完整匯出", rule: "JSON / CSV 格式，可攜帶" },
        ] },
      ],
    },
    integration: {
      header: { label: "整合規格", title: "外部系統整合介面" },
      cats: [
        { name: "企業身份認證", items: ["SAML 2.0 / OAuth 2.0 SSO", "Active Directory / LDAP 整合", "MFA 強制啟用（TOTP / 硬體 Key）", "Role-Based Access Control（RBAC）"] },
        { name: "企業應用整合", items: ["Microsoft Teams Bot（REST API）", "LINE Business Bot（Webhook）", "Slack App（Slash Commands）", "Confluence / SharePoint 同步"] },
        { name: "資料庫整合", items: ["PostgreSQL / MySQL / MSSQL（RAG 資料來源）", "S3 / MinIO（文件儲存）", "Elasticsearch（全文搜尋補強）", "Apache Kafka（即時事件串流）"] },
      ],
    },
  },

  // ══ 分頁 6：交付藍圖 ═══════════════════════════════════════════════════
  roadmap: {
    header: { label: "交付藍圖", title: "24 個月標準交付路線圖", sub: "六個階段設計，每個階段有明確的目標、交付物和 FDE 配置。Discovery Sprint 是所有方案的必要起點。" },
    goalsLabel: "階段目標",
    deliverablesLabel: "交付物清單",
    hwLabel: "硬體：",
    phases: [
      { id: "P1", range: "M1–M2",   title: "Discovery Sprint", color: "blue", bg: "bluePale", weeks: "8 週",  fde: "1× Principal + 1× Senior", hw: "無需採購",
        goals: ["需求訪談（C-level + 業務主管 + IT 主管）", "現有系統盤點（技術債評估）", "資料品質評估（文件數量、格式、清潔度）", "合規風險掃描（金管會 / 個資法 / 國安）", "競爭對手 AI 落地程度評估", "ROI 初估（三年 TCO 試算）"],
        deliverables: ["AI 導入評估報告（20–30 頁）", "技術架構建議書", "三年交付藍圖草稿", "ROI 試算模型（Excel）", "合規風險清單與建議"] },
      { id: "P2", range: "M3–M5",   title: "基礎建設期", color: "#854F0B", bg: "amberPale", weeks: "12 週", fde: "1× Senior + 2× Associate", hw: "標準方案硬體採購（4–8 週到位）",
        goals: ["GPU 伺服器採購與機房規劃", "地端 LLM Stack 部署（vLLM + Qdrant）", "CI/CD 管線建立（GitHub Actions + ArgoCD）", "Open WebUI 部署與 AD/SSO 整合", "第一批文件攝取（≥ 50 份）", "基礎監控部署（Prometheus + Grafana）"],
        deliverables: ["地端環境部署完成報告", "CI/CD 管線建立確認書", "LLM Wiki 初版上線", "系統架構文件 v1.0", "使用者帳號管理規範"] },
      { id: "P3", range: "M6–M9",   title: "MVP 驗證期", color: "teal", bg: "tealPale", weeks: "16 週", fde: "2× Senior + 1× Associate", hw: "輕量擴充（視使用量決定）",
        goals: ["首個業務場景 Agent 上線（e.g., 客服問答）", "FDE 現場萃取 tacit knowledge（每週 2 天現場）", "建構 200+ Evaluation Cases", "使用者滿意度調查與迭代", "Agentic Workflow 初版設計", "內部培訓開始（≥ 40hr/月）"],
        deliverables: ["MVP Agent 驗收報告", "Evaluation Set v1.0（200+ cases）", "使用者滿意度報告", "培訓課程教材 Module 1–3", "月度 AI 效益追蹤報告"] },
      { id: "P4", range: "M10–M15", title: "規模化擴展期", color: "coral", bg: "coralPale", weeks: "24 週", fde: "1× Principal + 2× Senior + 1× Associate", hw: "視流量決定是否升級到旗艦方案",
        goals: ["擴展至 3–5 個業務場景", "LLM Wiki 全面覆蓋（≥ 500 份文件）", "LoRA Fine-tuning 執行（視需求）", "DevOps CI/CD 全面整合", "知識圖譜建構（受監管行業）", "內部 AI 維運團隊培訓完成"],
        deliverables: ["多場景 Agent 上線報告", "Fine-tuned 模型（視需求）", "DevOps 流水線完整文件", "培訓課程完整版（8 個模組）", "內部團隊能力評估報告"] },
      { id: "P5", range: "M16–M20", title: "深化優化期", color: "navy", bg: "gray100", weeks: "20 週", fde: "1× Senior + 按需 Principal", hw: "無需額外採購",
        goals: ["跨系統 Agent 串接（API Orchestration）", "Autonomous Ops 全面啟用", "異常偵測 AI 模型訓練", "Evaluation Set 擴充至 500+", "知識管理長尾優化", "效益量化分析（ROI 驗證）"],
        deliverables: ["跨系統整合架構文件", "Autonomous Ops 運維手冊", "Evaluation Set v3.0（500+ cases）", "ROI 驗證報告（Year 2）", "優化建議書（Year 3 規劃）"] },
      { id: "P6", range: "M21–M24", title: "移交自主期", color: "blue", bg: "bluePale", weeks: "16 週", fde: "轉為顧問角色（按需）", hw: "無需採購",
        goals: ["完整資產移交（白紙黑字清單）", "內部團隊自主運作能力認證", "FDE 退場計畫執行", "後續支援合約洽談（按需顧問）", "競爭者評估（是否切換供應商）", "24 個月效益總結報告"],
        deliverables: ["完整資產移交清單（含所有 Prompt / Eval / 文件）", "內部團隊技能認證報告", "FDE 退場確認書", "24 個月效益總結報告", "後續 1 年顧問支援協議（選配）"] },
    ],
    // 甘特圖：每列 ranges 是 [起始月, 結束月]（從 0 算起，0 = M1）
    gantt: [
      { label: "LLM Wiki",     ranges: [[2, 5], [5, 15], [10, 24]], colors: ["blue", "teal", "blueMid"] },
      { label: "DevOps CI/CD", ranges: [[2, 5], [9, 20]],          colors: ["coral", "coral"] },
      { label: "FDE 駐點",     ranges: [[0, 20]],                  colors: ["navy"] },
      { label: "培訓移交",     ranges: [[5, 24]],                  colors: ["teal"] },
      { label: "自主運作",     ranges: [[14, 24]],                 colors: ["amber"] },
    ],
  },

  // ══ 分頁 7：合規與治理 ═════════════════════════════════════════════════
  compliance: {
    header: { label: "合規與治理", title: "台灣企業合規框架對應", sub: "DIS 服務設計從一開始就以合規優先。地端部署架構是解決大多數台灣法規要求的核心手段。" },
    reqsLabel: "法規要求",
    howLabel: "DIS 對應方式",
    laws: [
      { law: "金融監理沙盒 / 金管會 AI 指引", color: "blue", icon: "🏦",
        reqs: ["AI 決策可解釋性要求（XAI）", "模型偏誤定期評估", "資料使用同意機制", "跨境資料傳輸限制"],
        how: ["RAG 架構天然可溯源（引用原文）", "RAGAS 評估框架定期執行", "Evaluation Set 包含公平性測試", "地端部署：資料不離境"] },
      { law: "個人資料保護法（個資法）", color: "teal", icon: "🔒",
        reqs: ["個資蒐集目的告知與同意", "個資儲存最小化原則", "資料主體權利（刪除 / 查閱）", "資料外洩通報義務（72 小時內）"],
        how: ["PII 自動偵測與遮蔽（NLP NER）", "向量庫僅儲存語意向量，不儲存原始個資", "API 層實作資料主體請求處理介面", "完整稽核日誌 + 告警機制"] },
      { law: "ISO 27001 / CNS 27001", color: "coral", icon: "📋",
        reqs: ["資訊安全管理系統（ISMS）", "存取控制與最小權限原則", "變更管理流程", "業務持續性計畫（BCP）"],
        how: ["RBAC 實作（系統層 + 應用層）", "GitOps + Vault 確保變更可追蹤", "Blue-Green 部署支援快速回復", "Kubernetes HA + 定期 DR 演練"] },
      { law: "資通安全管理法（資安法）", color: "#854F0B", icon: "🛡️",
        reqs: ["關鍵基礎設施保護", "資安事件通報（1 小時內）", "定期滲透測試", "供應鏈安全管理"],
        how: ["網路分段 + WAF + IDS/IPS", "Alertmanager 自動觸發通報流程", "Trivy 自動容器漏洞掃描", "FDE 合約明訂供應鏈安全條款"] },
    ],
    ip: {
      header: { label: "知識產權治理", title: "AI 產出物的 IP 歸屬框架", sub: "這是 FDE 合約中最容易被忽略、卻影響最深遠的條款。DIS 標準合約有明確的 IP 三分法。" },
      cats: [
        { title: "客戶獨有 IP", color: "teal",  items: ["客戶提供的所有原始文件", "業務流程描述與 SOP", "FDE 從訪談中萃取的業務邏輯", "Evaluation Set（標準合約）", "Fine-tuned 模型（如有，標準合約）", "Prompt 配置文件"] },
        { title: "共有 IP（需協議）", color: "blue", items: ["針對特定行業開發的通用 Prompt 模板", "評估框架方法論", "特定業務場景的 RAG 策略", "客製化 Chunking 邏輯", "（需在合約中明確約定比例與使用方式）"] },
        { title: "DIS 自有 IP", color: "coral", items: ["DIS 平台核心程式碼（不含客製化部分）", "通用 RAG 框架與工具鏈", "FDE 培訓方法論", "模型評估技術（方法層，非資料層）", "（客戶有使用權，無所有權）"] },
      ],
    },
  },

  // ══ 分頁 8：定價方案 ═══════════════════════════════════════════════════
  pricing: {
    header: { label: "定價方案", title: "服務方案與定價結構", sub: "四個方案針對不同規模和需求設計，均包含核心的知識移交承諾與 IP 保護條款。" },
    includeLabel: "包含",
    notIncludeLabel: "不含",
    targetLabel: "適用",
    plans: [
      { name: "Starter", sub: "快速驗證方案", price: "NT$80–120萬", unit: "固定費用，8–12 週", color: "#854F0B", target: "50 人以下 / 單一場景 MVP", highlight: false, badge: "",
        includes: ["1× Associate FDE（8–12 週）", "LLM Wiki 初版（≤ 50 文件）", "單場景 Agent 建置", "基礎 CI/CD 管線", "Eval Set 初版（50 cases）", "運維操作手冊"],
        notInclude: ["Fine-tuning", "多場景部署", "硬體採購協助"] },
      { name: "Growth", sub: "標準落地方案", price: "NT$350–500萬", unit: "年約（含維護）", color: "blue", target: "50–300 人 / 3–5 個場景", highlight: true, badge: "最多企業選擇",
        includes: ["1× Senior + 1× Associate FDE（12 個月）", "LLM Wiki 全面建置（≤ 300 文件）", "3–5 個場景 Agent", "完整 DevOps CI/CD", "Eval Set 完整版（200+ cases）", "內部培訓（≥ 40hr/月）", "月度效益報告", "硬體採購顧問"],
        notInclude: ["Principal FDE 策略顧問", "硬體費用（另計）"] },
      { name: "Enterprise", sub: "全面轉型方案", price: "NT$1,200萬+", unit: "兩年總合約", color: "navy", target: "300 人以上 / 全面 AI 轉型", highlight: false, badge: "",
        includes: ["Full Delivery Pod（24 個月）", "三模組完整交付", "LLM Wiki 無文件上限", "Fine-tuning（視需求）", "合規框架建立", "Eval Set 全版（500+ cases）", "全員技能認證", "完整資產移交 + 退場計畫"],
        notInclude: ["硬體費用（另計）"] },
      { name: "地端硬體", sub: "獨立採購服務", price: "NT$150–800萬", unit: "一次性（依配置）", color: "teal", target: "任何需要地端部署的方案", highlight: false, badge: "",
        includes: ["機房規劃顧問", "GPU 伺服器採購協助", "網路架構設計", "部署與驗收服務", "1 年硬體維護支援", "擴容規劃建議"],
        notInclude: ["硬體本體費用（直接向原廠採購）"] },
    ],
    addons: {
      header: { label: "加購項目", title: "彈性擴充服務" },
      items: [
        { name: "Fine-tuning 服務", price: "NT$30–80萬 / 次", desc: "LoRA / QLoRA 全流程執行：資料準備、訓練、評估、部署。含 Before/After Eval Set 比較報告。" },
        { name: "Knowledge Graph 建置", price: "NT$50–120萬", desc: "Neo4j + LLM 自動實體抽取。適用法規、流程圖、組織架構等高複雜度知識體系。" },
        { name: "合規稽核服務", price: "NT$20–40萬 / 次", desc: "金管會 AI 指引 / 個資法 / ISO 27001 對應評估。附稽核報告與改善建議書。" },
        { name: "緊急 FDE 支援", price: "NT$8–15萬 / 天", desc: "系統緊急故障、重大事故 RCA、快速原型驗證等場景的即時專家介入支援。" },
        { name: "年度效益審計", price: "NT$15–25萬 / 次", desc: "第三方視角的 ROI 驗證、KPI 達成評估、下一年策略調整建議。含 Board-level 報告。" },
        { name: "模型替換評估", price: "NT$10–20萬 / 次", desc: "新舊模型系統性對比測試（使用您的 Eval Set），出具更換建議書，協助決策是否升級模型。" },
      ],
    },
  },

  // ══ 分頁 9：效益估算（ROI 試算工具）════════════════════════════════════
  // 注意：這頁有互動計算。文字可隨意改；下方 params 的「數字」會直接影響試算結果。
  roi: {
    header: { label: "效益估算", title: "三年 ROI 試算工具", sub: "⚠️ 以下為說明性估算，非嚴格財務模型。實際效益因產業、使用率、落地品質差異顯著。建議以 Discovery Sprint 完成個案評估後再做財務決策。" },
    controls: {
      sizeLabel: "企業人員規模", sizeUnit: "人",
      planLabel: "服務方案",
      industryLabel: "產業別",
      planOptions: [ { value: "starter", label: "Starter" }, { value: "growth", label: "Growth" }, { value: "enterprise", label: "Enterprise" } ],
      industryOptions: [
        { value: "it",         label: "IT / SI / MSP" },
        { value: "finance",    label: "金融業" },
        { value: "healthcare", label: "醫療 / 生技" },
        { value: "mfg",        label: "製造業" },
        { value: "retail",     label: "零售 / 電商" },
      ],
    },
    resultLabels: { cost: "三年總成本（估算）", benefit: "三年效益（估算）", roi: "三年 ROI（估算）", payback: "回收週期（估算）", paybackUnit: "月" },
    costBox: {
      title: "成本拆解（三年估算）", totalLabel: "合計",
      feeLabel: "FDE 服務費用", hwLabel: "地端硬體（估算）", opsLabel: "內部運維人力",
      hwNote: "含採購、部署、1 年維護",
      feeNote: { starter: "Associate × 10 週", growth: "Senior + Associate × 12 月", enterprise: "Full Pod × 24 月" },
      opsNote: { starter: "兼職維運", growth: "1 位 AI 維運工程師", enterprise: "2 位 AI 維運工程師" },
    },
    benefitBox: {
      title: "效益拆解（三年估算）", totalLabel: "合計",
      rows: [
        { label: "人力效率提升",          note: "文件查詢、報告生成、客服處理時間縮短" },
        { label: "品質提升 / 錯誤減少",   note: "AI 輔助 QA、程式碼品質、決策準確率" },
        { label: "人才招募 / 培育效益",   note: "新人 Onboarding 週期縮短、知識留存" },
      ],
    },
    disclaimer: {
      title: "⚠️ 估算假設與限制說明",
      body: "此試算工具使用產業平均係數進行估算，僅供參考。實際效益受以下因素顯著影響：① 員工使用率（通常需 3–6 個月達到穩定採用率）② 資料品質（文件結構化程度）③ 業務流程複雜度 ④ 管理層支持力度。Y1 通常為「建構基礎、打平或小幅虧損」，Y2 開始效益顯現，Y3 為主要收割期。強烈建議以 Discovery Sprint 完成個案 ROI 分析（NT$40–60 萬）後，再做大規模投資決策。",
    },
    // ▼ 試算用的數字參數（金額單位皆為「萬元」，除非另註）。改這裡會改變計算結果。
    params: {
      sizeMin: 20, sizeMax: 500, sizeStep: 10, sizeDefault: 100, defaultPlan: "growth", defaultIndustry: "it",
      industryMultipliers: { it: 1.2, finance: 1.4, healthcare: 1.3, mfg: 1.0, retail: 0.9 },
      // 每個方案的成本（萬元）：fde=FDE 服務費、hw=硬體、ops=運維人力
      plans: {
        starter:    { fde: 100, hw: 100, ops: 50 },
        growth:     { fde: 425, hw: 250, ops: 180 },
        enterprise: { fde: 1200, hw: 500, ops: 450 },
      },
      // 效益公式參數（元）：年薪、效率提升比例、品質基礎值/比例、新人佔比/成本、年數
      benefit: { hrSalary: 50000, hrRate: 0.15, qualityBase: 20000, qualityRate: 0.1, onboardRatio: 0.2, onboardCost: 30000, years: 3 },
    },
  },

  // ══ 分頁 10：決策框架（互動決策工具）══════════════════════════════════
  // 注意：問題選項的「代碼」（每個 [代碼, 顯示文字] 的第一個值）和下方計算邏輯綁定，
  //       建議只改「顯示文字」，不要改代碼，否則建議結果會失準。
  decision: {
    header: { label: "決策框架", title: "AI 導入方案決策工具", sub: "回答 7 個問題，獲得針對您企業情況的個人化 DIS 方案建議。" },
    answeredLabel: "已回答",
    btnIncomplete: "再回答 {n} 個問題", // {n} 會自動換成剩餘題數
    btnComplete: "產生個人化建議 →",
    resultIntro: "根據您的回答，建議方案如下：",
    recLabel: "建議",
    cards: { plan: "服務方案", deploy: "部署架構", fde: "FDE 配置" },
    questions: [
      { id: "size",      q: "企業員工規模？", opts: [["lt50", "< 50 人"], ["50to300", "50–300 人"], ["gt300", "300 人以上"]] },
      { id: "regulated", q: "是否受嚴格監管（金融 / 醫療 / 政府 / 國安）？", opts: [["yes", "是"], ["no", "否"]] },
      { id: "dataLocal", q: "資料是否有法規要求不得離境或不得外部存取？", opts: [["must", "必須地端"], ["prefer", "偏好地端"], ["no", "無限制"]] },
      { id: "itCap",     q: "現有 IT / 工程團隊的 AI 相關能力？", opts: [["none", "幾乎沒有"], ["basic", "有基礎（會用 API）"], ["strong", "有強力技術團隊"]] },
      { id: "budget",    q: "三年 AI 投資預算規模？", opts: [["lt200", "< NT$200 萬"], ["200to800", "NT$200–800 萬"], ["gt800", "NT$800 萬以上"]] },
      { id: "urgency",   q: "上線時程壓力？", opts: [["urgent", "3 個月內需要上線"], ["normal", "6–12 個月"], ["flexible", "1 年以上都 OK"]] },
      { id: "priority",  q: "最優先目標是？", opts: [["speed", "快速驗證 / 展示 AI 能力"], ["control", "長期資料主權 / 合規"], ["scale", "規模化 / 全面落地"]] },
    ],
    planDetails: {
      starter:    { label: "Starter 快速驗證方案", price: "NT$80–120 萬", color: "#854F0B" },
      growth:     { label: "Growth 標準落地方案", price: "NT$350–500 萬 / 年", color: "blue" },
      enterprise: { label: "Enterprise 全面轉型方案", price: "NT$1,200 萬+ / 兩年", color: "navy" },
    },
    deployDetails: {
      onprem: { label: "地端部署（必要）", desc: "資料主權完整保留，符合法規要求。硬體一次性投資較高，但長期邊際成本低。" },
      cloud:  { label: "雲端 API 為主", desc: "快速上線，無需硬體採購。適合初期驗證或無資料敏感性要求的場景。" },
      hybrid: { label: "混合部署（推薦）", desc: "核心 / 敏感資料地端，前沿能力雲端補充。兼顧合規、成本、能力三方需求。" },
    },
    fdeDetails: {
      associate: { label: "Associate FDE", desc: "執行層工程師，適合有技術底子的企業快速 MVP。" },
      senior:    { label: "Senior FDE（推薦）", desc: "系統架構師，負責 tacit knowledge 萃取和 eval set 建構，適合大多數中型企業。" },
      principal: { label: "Principal FDE + Senior", desc: "策略顧問 + 執行，適合受監管行業或大型全面轉型。" },
    },
    firstStep: {
      title: "建議第一步",
      // {sprint} 會以青色強調顯示
      bodyPre: "不論方案為何，建議以 ",
      sprint: "Discovery Sprint（M1–M2，NT$40–60 萬）",
      bodyPost: " 作為起點。Discovery Sprint 會產出個案 ROI 試算、技術架構建議、合規風險清單，讓您在投入大規模預算前，先以低成本確認方向。",
    },
    resetLabel: "重新評估",
  },

};

// 讓網頁讀得到上面的內容（這行請勿刪改）
if (typeof window !== "undefined") window.CONTENT = CONTENT;
