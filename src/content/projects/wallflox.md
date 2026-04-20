**Wallflox** is an **AI-driven wallpaper** platform: from prompt engineering to high-fidelity visuals, with automated daily curation and a reactive client experience.

**Highlights**

- **Leonardo Phoenix 1.0** — Image generation via Leonardo AI’s SDK  
- **Gemini 2.5 Flash** — Scheduled “seed” prompts for fresh content on a 24h cadence  
- **Convex** — Real-time sync across devices  
- **Clerk** — Auth with role-based access for curators  
- **Cloudflare R2** — Object storage for optimized delivery  

**Stack** — Next.js 16 (App Router), React 19, Tailwind CSS v4, shadcn/ui, Radix, Lenis; Convex backend; Vercel hosting. **MIT License.**

**Flow (summary)** — Users hit the Next.js app (Clerk auth) → Convex orchestrates Gemini for prompts and Leonardo for images → assets land in R2 and surface back to the app.
