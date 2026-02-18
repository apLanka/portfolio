/**
 * Architecture case studies configuration.
 * Each case study shows how you thought about a system — context, constraints,
 * alternatives rejected, and lessons learned. Add diagram images to /public/image/case-studies/
 */

export interface CaseStudy {
  slug: string;
  title: string;
  summary: string;
  context: string;
  constraints: string[];
  architecture: string;
  alternatives: { name: string; rejected: string }[];
  lessons: string[];
  diagram?: string;
  tags: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "multi-tenancy-without-framework",
    title: "One Database, Five Products: Designing Multi-Tenancy Without a Framework",
    summary: "How we isolated five client products in a single PostgreSQL database using row-level tenant_id and shared schema — and why we skipped off-the-shelf multi-tenant frameworks.",
    context:
      "At MetaruneLabs, we needed to serve multiple client products from one platform. Each client has their own users, data, and configuration, but the core product logic is identical. The business needed fast onboarding of new clients without spinning up new infrastructure. We had one small engineering team and a tight timeline to ship the first three tenants.",
    constraints: [
      "Single small team — no bandwidth to evaluate and integrate a heavy multi-tenant framework",
      "Existing PostgreSQL database with schema already in use by the first product",
      "Clients required strict data isolation with no possibility of cross-tenant data leakage",
    ],
    architecture:
      "We chose a shared-schema, row-level isolation model. Every table that holds tenant-specific data has a tenant_id column. All queries are scoped by tenant_id — enforced at the application layer with a middleware that injects the tenant context from the authenticated session. We added a tenants table for per-tenant configuration (feature flags, branding, API limits). PostgreSQL row-level security was considered but we opted for application-level enforcement to keep query patterns explicit and avoid surprises. The Next.js API layer validates tenant access on every request before any data access.",
    alternatives: [
      {
        name: "Schema-per-tenant (separate PostgreSQL schemas for each client)",
        rejected: "Would have required migrations to run N times for N tenants, made cross-tenant analytics painful, and complicated connection pooling. We'd need it at much larger scale.",
      },
      {
        name: "Database-per-tenant (separate PostgreSQL instance per client)",
        rejected: "Operational overhead of managing multiple databases, higher cost, and harder to share connection pools. Overkill for our current tenant count and growth rate.",
      },
    ],
    lessons: [
      "Row-level isolation with tenant_id is simple and works well until you hit hundreds of tenants or need regulatory isolation guarantees.",
      "Application-level tenant scoping is easier to reason about than RLS — but you must be disciplined. One missed WHERE clause is a data leak.",
      "A central tenants config table pays off quickly. We use it for feature flags, rate limits, and branding — all without code changes per client.",
    ],
    diagram: undefined,
    tags: ["PostgreSQL", "Next.js", "Node.js"],
  },
  {
    slug: "cache-vs-query-redis-postgresql",
    title: "When to Cache and When to Query: Drawing the Line with Redis and PostgreSQL",
    summary: "Defining a caching strategy for a multi-tenant platform — what to cache, when to invalidate, and when to always hit the database.",
    context:
      "Our platform serves dashboards and API responses that mix real-time data (user actions, live counts) with relatively static data (tenant config, reference data). Some endpoints were hitting PostgreSQL on every request and slowing down under load. We needed to reduce database load without serving stale data to users. The challenge was deciding what was safe to cache and what had to be fresh.",
    constraints: [
      "Multi-tenant — cache keys must be tenant-scoped to avoid leaking data between clients",
      "Some data changes frequently (user activity), some rarely (tenant settings)",
      "No budget for a dedicated cache layer expert — we had to learn and ship ourselves",
    ],
    architecture:
      "We adopted a read-through cache pattern for specific entity types. User profiles, tenant config, and reference data (e.g. product categories) are cached in Redis with tenant-prefixed keys. TTLs vary: 5 minutes for user profiles (balance freshness vs load), 1 hour for tenant config, 24 hours for reference data. We invalidate on write — when a tenant updates their settings, we delete the cache key so the next read repopulates. For real-time data (live dashboards, activity feeds), we never cache; we query PostgreSQL and accept the cost. We also added a simple cache-aside helper so developers don't have to remember the invalidation rules.",
    alternatives: [
      {
        name: "Cache everything with short TTLs",
        rejected: "Would have masked bugs — stale data would have been harder to debug. We wanted explicit control over what's cached and when it expires.",
      },
      {
        name: "Write-through cache (update cache on every write)",
        rejected: "Adds complexity to every write path. Our write volume is low; invalidation on write is simpler and sufficient.",
      },
    ],
    lessons: [
      "Cache invalidation is hard — but if you limit what you cache, it's manageable. We only cache a handful of entity types.",
      "Tenant-prefixed keys (tenant_123:user_456) prevent cross-tenant leaks and make debugging easier.",
      "Document the caching rules. We added a small internal doc: 'If you add a new cached entity, add invalidation in the update handler.'",
    ],
    diagram: undefined,
    tags: ["Redis", "PostgreSQL", "Node.js"],
  },
  {
    slug: "manual-deploys-to-cicd",
    title: "From Manual Deploys to Push-and-Ship: Building a CI/CD Pipeline for a Small Team",
    summary: "Replacing manual SSH deploys with a Docker-based pipeline on GitHub Actions and AWS — and what we learned about rollbacks and environment parity.",
    context:
      "When I joined, deployments meant SSH into a server, pull the latest code, run migrations, restart the process. It was error-prone, stressful, and blocked us from shipping frequently. We wanted to move to a pipeline where pushing to main would build, test, and deploy — with the ability to roll back quickly if something broke. The team was small, so the solution had to be simple to maintain.",
    constraints: [
      "Limited AWS experience — we needed something we could understand and debug",
      "Existing app ran in a single environment; we had to introduce staging without doubling infra cost",
      "Database migrations had to run safely — no downtime, no failed half-migrations",
    ],
    architecture:
      "We built a pipeline with GitHub Actions, Docker, and AWS. On push to main, Actions builds a Docker image, runs tests, pushes to ECR, and deploys to ECS (or EC2 with Docker, depending on setup). Migrations run as a separate step before the new container goes live — we use a migration job that runs, then the app deployment follows. We keep the last two images tagged so rollback is 'redeploy the previous image.' Staging mirrors production with a smaller instance. We added a simple health check endpoint so the pipeline can verify the app is up before considering the deploy successful.",
    alternatives: [
      {
        name: "Use a managed platform (Vercel, Railway) for the whole stack",
        rejected: "Our backend is Node.js + PostgreSQL with specific AWS integrations. Moving would have been a larger migration. We needed to improve our current setup first.",
      },
      {
        name: "Run migrations inside the app startup",
        rejected: "Risky — if migrations fail, the app never starts and we're stuck. Separating migration from app deploy gives us a clear rollback path.",
      },
    ],
    lessons: [
      "Rollback strategy matters before you need it. Tagging the previous image and having a one-command rollback saved us at least once.",
      "Environment parity is hard. Staging should match production as closely as possible — same Docker image, same migration path.",
      "Document the deploy process. When something breaks at 2am, you want the runbook written when you're thinking clearly.",
    ],
    diagram: undefined,
    tags: ["Docker", "AWS", "GitHub Actions"],
  },
  {
    slug: "splitting-monolith-service-boundaries",
    title: "Splitting the Monolith Before It Hurts: Service Boundaries in a Growing Platform",
    summary: "Identifying the first service boundary to extract from our monolith — and how we drew the line without over-engineering.",
    context:
      "Our platform started as a single Next.js app with API routes and a shared PostgreSQL database. As we added more client products and features, the codebase grew. We started to feel the pain: deployments were slow, a bug in one area could take down everything, and it was hard for different parts of the team to work independently. We needed to extract something — but we didn't want to go full microservices. The question was: what's the first boundary?",
    constraints: [
      "Small team — we couldn't afford to run and debug a complex distributed system",
      "Shared database — we weren't ready for service-owned databases and eventual consistency",
      "Existing API contracts with external clients — we couldn't break them",
    ],
    architecture:
      "We identified the notification and email-sending logic as the first extraction candidate. It had clear boundaries: it consumed events (user signed up, order placed) and produced side effects (send email, push notification). It didn't need to participate in the main request-response flow. We extracted it into a separate Node.js service that subscribes to a queue (or polling a jobs table). The monolith publishes events; the notification service consumes them. We kept the shared database for now — the notification service reads user/tenant data it needs, but we documented that as technical debt. The key was picking a boundary that was low-risk and high-value: notifications failing doesn't break the core product.",
    alternatives: [
      {
        name: "Extract the auth layer first",
        rejected: "Auth is in the critical path of every request. Extracting it would have been high-risk and required changing every service. We wanted a lower-friction first step.",
      },
      {
        name: "Go straight to event-driven microservices with Kafka",
        rejected: "We didn't have the operational maturity for Kafka. A simple queue or polling was enough for our scale and gave us room to learn.",
      },
    ],
    lessons: [
      "Pick the first boundary by impact and risk. Notifications were high impact (we could move fast) and low risk (failures were isolated).",
      "Shared database between monolith and new service is a stepping stone, not the end state. Document the eventual split.",
      "API contracts between services matter. We defined the event payload schema and versioned it from day one.",
    ],
    diagram: undefined,
    tags: ["Node.js", "PostgreSQL", "Next.js"],
  },
  {
    slug: "designing-for-failure-api-layer",
    title: "Designing for Failure: What Happens When Your API Layer Goes Down",
    summary: "Adding resilience to a client app that depended on a flaky third-party API — circuit breakers, retries, and graceful degradation.",
    context:
      "A side project I built depended on an external API for real-time data. The API was occasionally slow or returned errors. When it failed, our app would hang or show blank screens. Users had no idea what was going on. I needed to design for the case where the API is down — without building a full replica of the external service. The goal was: when the API fails, the app should degrade gracefully, not crash.",
    constraints: [
      "No control over the external API — we couldn't fix their uptime",
      "Solo project — the solution had to be simple enough to implement and maintain alone",
      "Users needed some feedback — a blank screen was worse than a 'data temporarily unavailable' message",
    ],
    architecture:
      "I implemented a three-layer approach: retry with exponential backoff for transient failures, a circuit breaker to stop hammering the API when it's clearly down, and fallback responses when the circuit is open. The circuit breaker tracks failure rate; after N consecutive failures, it opens and fails fast for a cooldown period. During that period, the UI shows cached data (if we have it) or a clear 'service unavailable' state. I used a simple in-memory circuit breaker — no Redis, no distributed state — because this was a single-instance app. The key was defining what 'graceful' meant: we could show stale data, we could show a message, but we would never leave the user staring at a spinner forever.",
    alternatives: [
      {
        name: "Queue all API calls and process async",
        rejected: "Overkill for a side project. The user needed near-real-time data; queuing would have added latency and complexity we didn't need.",
      },
      {
        name: "Just retry with a fixed delay",
        rejected: "Retrying without a circuit breaker means we keep hitting a down API, wasting resources and potentially making things worse. The circuit breaker stops the bleeding.",
      },
    ],
    lessons: [
      "Define what 'graceful degradation' means before you build it. For us it was: show cached or fallback UI, never infinite loading.",
      "Circuit breakers are simple in concept, tricky in practice. Tuning the threshold and cooldown took a few iterations.",
      "Users prefer a clear 'something is wrong' message over a spinner that never resolves.",
    ],
    diagram: undefined,
    tags: ["Node.js", "TypeScript"],
  },
  {
    slug: "why-i-chose-monolith",
    title: "Why I Chose a Monolith (and When I'd Break It Apart)",
    summary: "Deliberately building a monolith for a side project — and the criteria I'd use to split it into services later.",
    context:
      "For a personal project, I had to choose: start with a monolith or design for microservices from day one. I'd read the usual advice — 'start with a monolith' — but I wanted to be explicit about why, and what would change my mind. The project was a small SaaS tool: one Next.js app, one database, a few background jobs. I had no team, no scale requirements, and no budget for complex infrastructure.",
    constraints: [
      "Solo developer — every hour spent on infra was an hour not spent on product",
      "Uncertain product direction — the app might pivot; the architecture needed to be flexible",
      "Deployment simplicity — I wanted to ship with minimal operational overhead",
    ],
    architecture:
      "I chose a monolith: a single Next.js app with API routes, a PostgreSQL database, and background jobs running in the same process (or a simple worker script). Everything lived in one repo, one deploy. I drew clear module boundaries in the code — domains like 'billing,' 'users,' 'projects' — so that if I ever needed to extract a service, the seams were already there. I documented my split criteria: I'd consider extracting when (a) a module had different scaling needs, (b) a module needed a different tech stack, or (c) deployment frequency of one part was blocking the rest. None of those were true yet.",
    alternatives: [
      {
        name: "Microservices from day one",
        rejected: "Would have added deployment, networking, and debugging complexity with zero benefit at current scale. A monolith deploys once; microservices deploy N times.",
      },
      {
        name: "Serverless functions for each domain",
        rejected: "Cold starts and connection pooling with PostgreSQL were concerns. A single long-running process was simpler for a small app.",
      },
    ],
    lessons: [
      "Module boundaries in code cost nothing and pay off when you need to extract. Think in domains even inside a monolith.",
      "Document your split criteria. It forces you to think about when the architecture should change — and prevents premature extraction.",
      "Deployment simplicity is a feature. One deploy, one log stream, one place to debug.",
    ],
    diagram: undefined,
    tags: ["Next.js", "PostgreSQL", "Node.js"],
  },
  {
    slug: "schema-survived-three-pivots",
    title: "The Schema That Survived Three Pivots",
    summary: "How a flexible data model held up across three major product pivots — and what made it resilient.",
    context:
      "A project I worked on went through three significant pivots: first a generic task manager, then a project-specific workflow tool, then a team collaboration platform. Each pivot changed what 'a project' or 'an item' meant. Rewriting the schema every time would have been painful. I needed a data model that could absorb change without constant migrations. The challenge was balancing flexibility with query performance and data integrity.",
    constraints: [
      "Limited migration windows — we couldn't afford long-running migrations or downtime",
      "Existing data had to be preserved — we couldn't just drop and recreate",
      "Query patterns changed with each pivot — the schema had to support new access patterns",
    ],
    architecture:
      "I used a few patterns: polymorphic associations for items that could belong to different parent types (project, board, workspace), a flexible metadata JSONB column for attributes that varied by item type, and a strict core schema for fields that were stable (id, tenant_id, created_at, type). The key was separating 'what we know for sure' from 'what might change.' Core fields stayed in columns; variable attributes went into JSONB. We used PostgreSQL's JSONB indexing for the fields we queried often. Migrations were additive when possible — new columns, new indexes — and we avoided dropping columns until we were sure they were dead.",
    alternatives: [
      {
        name: "EAV (Entity-Attribute-Value) model for maximum flexibility",
        rejected: "EAV makes querying and reporting painful. JSONB gave us flexibility without sacrificing the ability to run efficient queries on common attributes.",
      },
      {
        name: "Separate tables per item type",
        rejected: "Would have required a new table and migration for every new type. Polymorphic associations let us add types without schema changes.",
      },
    ],
    lessons: [
      "Identify the stable core vs the variable surface. Invest in getting the core right; use JSONB or similar for the rest.",
      "Additive migrations are safer. New columns with defaults, new indexes — avoid destructive changes until you're certain.",
      "Document the schema evolution. Future you will thank present you when debugging why a column exists.",
    ],
    diagram: undefined,
    tags: ["PostgreSQL", "Node.js", "TypeScript"],
  },
  {
    slug: "zero-to-observable-monitoring",
    title: "Zero to Observable: Adding Monitoring to a System That Had None",
    summary: "Introducing Grafana and Prometheus to a system with no visibility — what we measured first, and what we learned about debugging with data.",
    context:
      "The platform had no structured monitoring. When something went wrong, we'd check logs, guess, and hope. We had no idea what 'normal' looked like — request latency, error rates, database connection usage. We needed to go from zero visibility to enough signal to debug production issues. The goal wasn't perfect observability; it was 'when something breaks, we can find out why.'",
    constraints: [
      "No prior experience with Prometheus or Grafana — we had to learn while shipping",
      "Limited time — we couldn't instrument everything; we had to pick the highest-value metrics first",
      "Existing app had no metrics endpoints — we had to add them without disrupting the codebase",
    ],
    architecture:
      "We started with the four golden signals: latency, traffic, errors, saturation. We added a Prometheus client to the Node.js app, exposed a /metrics endpoint, and scraped it with Prometheus. We created a few Grafana dashboards: request rate and latency by endpoint, error rate by status code, database connection pool usage. We set up basic alerting — when error rate spiked or latency crossed a threshold, we'd get a Slack notification. We didn't add distributed tracing or log aggregation initially; those were phase two. The key was starting small: a few dashboards and two or three alerts. We learned what we actually looked at when debugging, then added more.",
    alternatives: [
      {
        name: "Full observability stack (tracing, logs, metrics) from day one",
        rejected: "Would have been overwhelming. We needed to walk before we ran. Metrics first, then logs, then tracing if we hit limits.",
      },
      {
        name: "Rely on cloud provider metrics (e.g. AWS CloudWatch) only",
        rejected: "CloudWatch gave us infra metrics (CPU, memory) but not application-level metrics (request latency by route, error rate by endpoint). We needed both.",
      },
    ],
    lessons: [
      "Start with the metrics you'll actually use when debugging. We thought we'd care about cache hit rate; we ended up caring most about latency p99.",
      "Alert fatigue is real. We tuned thresholds after a few false alarms. Better to miss an alert than ignore them.",
      "Document what each dashboard is for. A dashboard with no clear purpose becomes noise.",
    ],
    diagram: undefined,
    tags: ["Grafana", "Prometheus", "Node.js"],
  },
];
