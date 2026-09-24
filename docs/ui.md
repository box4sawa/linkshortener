# UI Component Standards (shadcn/ui)

> **Domain**: User Interface & Design System  
> **Registry / Base**: `shadcn/ui` (`base-nova` style, `@base-ui/react`)

---

## 1. Core Principles

- **Exclusive UI System**: All UI elements and primitives in this application **must** use `shadcn/ui`.
- **No Custom Primitives**: **DO NOT** create custom, one-off UI components (e.g., custom buttons, dialogs, inputs, dropdowns). Always use official `shadcn/ui` components.
- **Component Addition**: Add new components via the `shadcn` CLI instead of hand-crafting them:
  ```bash
  npx shadcn@latest add <component-name>
  ```
- **Component Location**: All primitive UI components live under `@/components/ui` (e.g., `@/components/ui/button`).
- **Feature Composition**: Feature components (in `@/components`) must be composed exclusively from `@/components/ui` building blocks and Lucide icons.

---

## 2. Coding & Styling Rules

- **Import Alias**: Always import primitives from `@/components/ui/*`.
- **Styling Utility**: Use `cn(...)` from `@/lib/utils` for conditional class names and styling extensions.
- **Tailwind CSS v4**: Use Tailwind CSS utility classes aligned with design tokens configured in `app/globals.css`.
- **Icons**: Use `lucide-react` exclusively for iconography across all UI elements.
- **Client vs. Server**: Keep components as Server Components whenever possible. Only use `"use client"` if interactive state or browser events are required.

---

## 3. Usage Pattern

```tsx
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function ActionCallout() {
  return (
    <Button variant="default" size="sm" className="gap-2">
      <span>Continue</span>
      <ArrowRight className="h-4 w-4" />
    </Button>
  );
}
```
