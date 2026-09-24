# LLM Agent Instructions

> **Project**: `linkshortener`  
> **Role**: Master instruction file for AI coding agents and LLMs working in this repository.  
> ⚠️ **CRITICAL MANDATE**: It is **EXTREMELY IMPORTANT** to **ALWAYS read the relevant individual instruction files within `/docs/` BEFORE generating ANY code**. Never make assumptions about conventions, components, or architecture without reading the corresponding domain docs first.

---

## 1. Operating Protocol for AI Agents

All LLMs and AI coding assistants working in this repository **must** follow these operating rules:

1. **MANDATORY: Consult Domain Docs Before Generating ANY Code**: It is strictly required to ALWAYS read the relevant individual documentation file in `/docs/` (detailed in Section 2) BEFORE writing, generating, or modifying ANY code. No code generation or file changes should occur prior to inspecting the relevant domain specification.
2. **Preserve Existing Architecture**: Adhere strictly to the Next.js 16 App Router, React 19, Clerk authentication, Neon PostgreSQL, Drizzle ORM, and Tailwind CSS v4 patterns already established.
3. **Strict Type Safety**: TypeScript strict mode is enabled. Do not use `any`, `@ts-ignore`, or loose casts. Infer types from schemas and use typed props.
4. **Server vs. Client Boundaries**: Default to React Server Components (RSC). Use `"use client"` only at the leaf nodes where client interactivity, hooks, or browser APIs are required.
5. **No Hallucinated Packages**: Do not add external packages without explicit necessity. Work with existing dependencies (`lucide-react`, `@base-ui/react`, `drizzle-orm`, `@clerk/nextjs`, etc.).
6. **Domain Safety**: Protect link creation and redirection against XSS (e.g. `javascript:` URLs), infinite redirection loops, and slug collisions with reserved application routes.

---

## 2. Agent Documentation Directory (`/docs`)

Detailed coding standards, architectural rules, and technical conventions are organized in modular documents under `/docs/`. **CRITICAL REQUIREMENT: You MUST ALWAYS read the relevant document BEFORE generating or modifying ANY code:**

- **[Authentication](docs/auth.md)**: Rules for Clerk authentication, modal sign-in/up enforcement, and route protection (`/dashboard` vs. `/`).
- **[UI Components](docs/ui.md)**: Rules for UI elements, strict shadcn/ui exclusivity, and prohibition of custom primitives.

---

## 3. Technology Stack Matrix

| Layer | Technology | Key Dependencies |
|---|---|---|
| Framework | Next.js 16 (App Router) | `next` (16.3.5), `react` (19.2.8) |
| Database | Neon PostgreSQL (Serverless) | `@neondatabase/serverless` (1.1.0) |
| ORM | Drizzle ORM & Drizzle Kit | `drizzle-orm` (1.0.0-rc.4), `drizzle-kit` |
| Authentication | Clerk | `@clerk/nextjs` (7.9.4), `@clerk/ui` |
| Styling | Tailwind CSS v4 | `@tailwindcss/postcss`, `tailwindcss` (4) |
| UI Components | shadcn/ui (`base-nova`) | `@base-ui/react`, `class-variance-authority`, `cn` |
| Icons | Lucide React | `lucide-react` |
| Tooling & Lint | ESLint 9 (Flat config) | `eslint`, `eslint-config-next`, `tsx`, `typescript` (5) |

---

## 4. Key Directory & Import Aliases

- `@/*` maps to the root directory (defined in `tsconfig.json`).
  - `@/db`: Database client (`db/index.ts`) and schema (`db/schema.ts`)
  - `@/components/ui`: Primitive UI components (e.g. `@/components/ui/button`)
  - `@/components`: Feature components
  - `@/lib/utils`: Styling and shared helper functions
  - `@/app`: App Router pages, layouts, and route handlers

---

## 5. Domain Invariants (Link Shortener)

When adding or updating link shortening logic, enforce these invariants:

1. **URL Validation**: Sanitize target URLs. Only accept valid `http://` or `https://` schemas. Reject dangerous or malformed protocols.
2. **Reserved Slugs**: Disallow custom slugs that conflict with system routes (`api`, `sign-in`, `sign-up`, `dashboard`, `settings`, `docs`, `favicon.ico`, etc.).
3. **Loop Prevention**: Disallow redirect URLs that point back to this app's own origin to prevent infinite redirect loops.
4. **Ownership Enforcement**: Verify authenticated `userId` matches the link's creator on any update or delete operation.
5. **Atomic Analytics**: Increment click counts using atomic SQL expressions (`sql\`${links.clicksCount} + 1\``) to avoid race conditions.

---

## 6. Common Development Commands

```bash
# Start development server
npm run dev

# Run linting
npm run lint

# Build production bundle
npm run build

# Generate Drizzle migrations from db/schema.ts
npx drizzle-kit generate

# Push Drizzle schema directly to Neon DB
npx drizzle-kit push

# Launch Drizzle Studio DB browser
npx drizzle-kit studio
```
