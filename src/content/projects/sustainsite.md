**SE3040 – Application Frameworks** · Academic year 2026 · **SDG 9** — Industry, Innovation and Infrastructure

SustainSite is a full-stack web app for construction teams: manage the project lifecycle, track sustainability metrics (carbon, energy, waste, water), keep documents and compliance in one place, and monitor materials and equipment—with role-based access for admins, project managers, inspectors, suppliers, and viewers.

**What we built**

- **Projects** — Milestones, status, maps (Google Maps), dashboards, notifications  
- **Sustainability** — Scored metrics (0–100), trends, optional Carbon Interface API  
- **Documents & compliance** — Uploads (Cloudinary), approval flow, checklists, safety inspections  
- **Resources** — Materials inventory, low-stock email (SendGrid), equipment, suppliers  

**Stack (summary)** — Turborepo monorepo: **Express** + **TypeScript** + **MongoDB** backend; **React 19** + **Vite** frontend; **JWT** auth, **Render** + **Vercel** deployment.
