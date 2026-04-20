**ShiftGain** is a **privacy-first** file processing suite: compress, convert, and optimize **images and PDFs entirely in the browser** — your files never leave the device.

**Highlights**

- **Smart compression** — Smaller files with strong visual fidelity  
- **Format conversion** — 20+ formats (PNG, JPEG, WebP, PDF, and more)  
- **Batch workflows** — Queue many files at once  
- **Local-only** — No cloud uploads, no data collection; optional metadata stripping; works offline after load  

**Stack** — Next.js 15 (App Router, Turbopack), React 19, Tailwind CSS v4, Radix UI, Lucide, **Zustand**; **pdf-lib** for PDF work; **Web Workers** and **WebAssembly** for near-native throughput.

**Architecture (summary)** — A serverless client-side model: the UI and **Zustand** state feed a **worker pool** that runs WASM-backed and Canvas/pdf-lib pipelines, then hands results back for download — all inside the browser tab.

**Privacy** — Non-custodial by design: processing stays on-device, unlike typical “free converter” sites that upload to remote servers.

**License** — Proprietary; contact the ShiftGain team for licensing.
