**Blooso** is a premium booking platform for **beauty & wellness** businesses—customers book appointments **24/7** while owners run scheduling, payments, and operations from one stack.

**Architecture**

- **Monorepo** — Turborepo with `apps/api`, `apps/web`, shared packages (types, UI, Tailwind config)  
- **API** — NestJS 11, Prisma, PostgreSQL, Redis, Stripe, Resend  
- **Web** — Next.js 16, React 19, Tailwind CSS, shadcn/ui, Recharts  
- **Quality** — TypeScript, Zod, path aliases across packages  

**Ops** — Local dev with Docker for Postgres/Redis; API deployable to **Railway**; web on **Vercel**. Private / unlicensed codebase.
