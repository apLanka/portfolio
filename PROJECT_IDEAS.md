# Portfolio Project Ideas

Project ideas for building toward solution architecture — aligned with tech stack (Next.js, Node.js, PostgreSQL, Redis, Docker, AWS, Grafana, Prometheus) and case study themes.

---

## 1. API Gateway / Rate Limiter

A lightweight API gateway in Node.js that handles auth, rate limiting (per-tenant with Redis), request routing, and response caching. Demonstrates the "infrastructure layer" thinking that solution architects own.

- **Tags:** Node.js, Redis, TypeScript, Docker
- **Why it fits:** Complements multi-tenancy and caching case studies. Shows you can build infrastructure components, not just consume them.

---

## 2. Event-Driven Notification Service

A standalone service that consumes events from a queue (RabbitMQ or a simple PostgreSQL-backed job table) and dispatches email/push notifications. Includes retry logic, dead letter handling, and a small admin dashboard.

- **Tags:** Node.js, RabbitMQ, PostgreSQL, Docker
- **Why it fits:** The "Splitting the Monolith" case study describes extracting this exact service. Having it as a real project closes the loop.

---

## 3. Infrastructure-as-Code Starter Kit

A Terraform + Docker Compose setup that provisions a realistic small-team stack on AWS: ECS (or EC2), RDS PostgreSQL, ElastiCache Redis, S3, CloudFront, with GitHub Actions CI/CD wired in. Include a simple health-check app to prove it works.

- **Tags:** Terraform, AWS, Docker, GitHub Actions
- **Why it fits:** The CI/CD case study talks about the pipeline; this shows you can provision the underlying infra too. Strong SA signal.

---

## 4. Schema Migration Tool / Framework

A CLI tool that manages PostgreSQL schema migrations: versioned SQL files, up/down, dry-run mode, and a migration history table. Light but opinionated.

- **Tags:** Node.js, PostgreSQL, TypeScript
- **Why it fits:** The "Schema That Survived Three Pivots" case study talks about migration strategy. A purpose-built tool demonstrates deep understanding.

---

## 5. Multi-Tenant SaaS Starter

An open-source boilerplate: Next.js + Node.js + PostgreSQL with row-level tenant isolation, per-tenant config, auth, and a basic admin panel. The thing described in case study #1, packaged for others to use.

- **Tags:** Next.js, Node.js, PostgreSQL, Redis, Docker
- **Why it fits:** Turns the most detailed case study into a tangible artifact. Shows you can generalize solutions, not just build one-offs.

---

## 6. Observability Dashboard

A self-hosted monitoring setup: a Node.js app instrumented with Prometheus metrics, Grafana dashboards (request latency, error rate, DB connections), and alerting rules. Deployed with Docker Compose.

- **Tags:** Grafana, Prometheus, Node.js, Docker
- **Why it fits:** Directly supports the "Zero to Observable" case study. Having a working example is more convincing than a narrative alone.

---

## 7. Service Health & Circuit Breaker Library

A small, published npm package that provides circuit breaker, retry with backoff, and health-check patterns for Node.js services. Include tests and docs.

- **Tags:** Node.js, TypeScript
- **Why it fits:** The "Designing for Failure" case study describes this pattern. Packaging it as a library shows you think in reusable components.

---

## 8. Architecture Decision Record (ADR) Site

A static site (Next.js) that renders markdown ADRs from a repo. Each ADR follows a standard template: context, decision, consequences. Could double as an internal tool for teams.

- **Tags:** Next.js, TypeScript, Markdown
- **Why it fits:** SA work lives in documentation as much as code. This signals that you value and systematize architectural decisions.

---

## Recommended Priorities

| Priority | Project | Why |
|----------|---------|-----|
| **1** | Multi-Tenant SaaS Starter | Directly materializes the strongest case study into real code. |
| **2** | Event-Driven Notification Service | Closes the loop on the "Splitting the Monolith" narrative. |
| **3** | Infrastructure-as-Code Starter Kit | Adds full-stack-to-cloud range and infra visibility. |
