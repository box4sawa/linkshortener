# Authentication Standards (Clerk)

> **Domain**: Authentication & Authorization  
> **Package**: `@clerk/nextjs`

---

## 1. Core Principles

- **Exclusive Auth Provider**: All authentication and session management in this application is handled strictly by **Clerk**. No custom credentials, sessions, JWT systems, or alternative auth providers are permitted.
- **Modal-Based Auth**: Sign-in and sign-up flows must always launch as **modals** (e.g. `<SignInButton mode="modal">`, `<SignUpButton mode="modal">`). Avoid redirecting users away from their current page context for auth whenever possible.

---

## 2. Route Access & Protection Rules

| Route | Access Rule | Behavior |
|---|---|---|
| `/` | Public (Unauthenticated only) | If the user is authenticated, redirect immediately to `/dashboard`. |
| `/dashboard` (and subpaths) | Protected (Authenticated only) | Access strictly requires an active session. Redirect unauthenticated users to sign in. |
| Public Routes | Public | Landing page, redirection slugs `/[slug]`, and legal/docs routes. |

---

## 3. Middleware & Protection Pattern

Enforce route protection using Clerk's `clerkMiddleware`:

- Define route matchers for protected routes (e.g. `/dashboard(.*)`).
- Use `auth.protect()` or `auth()` checks within `proxy.ts` / middleware to guard `/dashboard`.
- Redirect authenticated users landing on `/` to `/dashboard`.

---

## 4. Usage Patterns

### Server Components & Server Actions
```tsx
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const { userId } = await auth();
  if (!userId) {
    redirect("/");
  }
  // ...
}
```

### Client Components
```tsx
"use client";

import { SignInButton, SignUpButton, UserButton, useAuth } from "@clerk/nextjs";

export function AuthNav() {
  const { isSignedIn } = useAuth();

  return (
    <div>
      {!isSignedIn ? (
        <>
          <SignInButton mode="modal" />
          <SignUpButton mode="modal" />
        </>
      ) : (
        <UserButton />
      )}
    </div>
  );
}
```
