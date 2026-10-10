import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Copy,
  ExternalLink,
  Globe,
  Layers,
  Link2,
  Lock,
  MousePointerClick,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Zap,
} from "lucide-react";
import { SignInButton, SignUpButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";

export default async function Home() {
  const { userId } = await auth();
  if (userId) {
    redirect("/dashboard");
  }

  const features = [
    {
      icon: Zap,
      title: "Lightning-Fast Redirection",
      description:
        "Engineered for sub-millisecond edge redirects, ensuring your visitors reach target destinations instantly without lag or downtime.",
    },
    {
      icon: SlidersHorizontal,
      title: "Custom Slugs & Branding",
      description:
        "Replace messy, random strings with memorable, branded aliases like /launch2026 to boost trust and improve click-through rates.",
    },
    {
      icon: BarChart3,
      title: "Atomic Click Analytics",
      description:
        "Real-time click tracking powered by atomic database increments. Monitor traffic spikes accurately without race conditions or dropped counts.",
    },
    {
      icon: ShieldCheck,
      title: "URL Sanitization & Safety",
      description:
        "Strict protocol validation prevents malicious scripts (such as javascript: URIs) and rejects malformed targets to protect your users.",
    },
    {
      icon: Lock,
      title: "Loop & Conflict Prevention",
      description:
        "Intelligent route protection stops infinite redirect loops back to our origin and prevents collisions with system-reserved paths.",
    },
    {
      icon: Layers,
      title: "Unified Link Dashboard",
      description:
        "Full control over your link portfolio. View, search, organize, copy, and delete shortened links from a clean, intuitive management console.",
    },
  ];

  const steps = [
    {
      step: "01",
      title: "Paste Your Target URL",
      description:
        "Enter any valid HTTP or HTTPS destination link you want to shorten and share.",
    },
    {
      step: "02",
      title: "Customize Your Slug",
      description:
        "Optionally assign a custom, memorable back-half or let our generator assign an optimized unique identifier.",
    },
    {
      step: "03",
      title: "Share & Track Clicks",
      description:
        "Distribute your shortened link across social media, email campaigns, or docs and track real-time analytics.",
    },
  ];

  const stats = [
    { value: "< 15ms", label: "Average Redirect Latency" },
    { value: "99.99%", label: "Platform Availability" },
    { value: "100%", label: "Atomic Click Precision" },
    { value: "Zero", label: "Redirect Loops Allowed" },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground selection:bg-primary/20 selection:text-foreground">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <Link
            href="/"
            className="flex items-center gap-2.5 text-lg font-bold tracking-tight text-foreground transition-opacity hover:opacity-90"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-xs">
              <Link2 className="h-5 w-5" />
            </div>
            <span>Link Shortener</span>
          </Link>

          <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
            <a
              href="#features"
              className="transition-colors hover:text-foreground"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="transition-colors hover:text-foreground"
            >
              How It Works
            </a>
            <a href="#stats" className="transition-colors hover:text-foreground">
              Performance
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <SignInButton mode="modal">
              <Button variant="ghost" size="sm">
                Sign In
              </Button>
            </SignInButton>
            <SignUpButton mode="modal">
              <Button variant="default" size="sm">
                Get Started
              </Button>
            </SignUpButton>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden px-6 pt-20 pb-24 md:pt-32 md:pb-32">
          {/* Subtle background glow */}
          <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
            <div className="h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
          </div>

          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-muted/60 px-3.5 py-1 text-xs font-medium text-muted-foreground backdrop-blur-xs">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              <span>Next-Gen URL Management & Analytics</span>
            </div>

            <h1 className="mt-8 text-4xl font-extrabold tracking-tight sm:text-6xl md:text-7xl">
              Shorten links. Share anywhere.{" "}
              <span className="bg-gradient-to-r from-foreground via-muted-foreground to-foreground bg-clip-text text-transparent">
                Track everything.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
              Transform cumbersome URLs into clean, memorable links with custom
              slugs and real-time atomic analytics. Built for high performance,
              loop protection, and rock-solid reliability.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <SignUpButton mode="modal">
                <Button size="lg" className="w-full gap-2 px-6 sm:w-auto">
                  <span>Start Shortening Free</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </SignUpButton>
              <SignInButton mode="modal">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full px-6 sm:w-auto"
                >
                  Go to Dashboard
                </Button>
              </SignInButton>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>Instant modal sign-up</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>100% Free link management</span>
              </div>
            </div>

            {/* Product Mockup Preview */}
            <div className="mt-16 rounded-2xl border border-border bg-card p-4 text-left shadow-2xl sm:p-6 md:p-8">
              <div className="mb-4 flex items-center justify-between border-b border-border pb-4">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500/80" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                  <div className="h-3 w-3 rounded-full bg-green-500/80" />
                  <span className="ml-2 text-xs font-medium text-muted-foreground">
                    Live Demo Preview
                  </span>
                </div>
                <div className="flex items-center gap-1.5 rounded-md bg-muted px-2.5 py-1 text-xs font-medium text-foreground">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Online & Active</span>
                </div>
              </div>

              <div className="grid gap-4 rounded-xl border border-border/60 bg-muted/30 p-4 sm:p-5">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Original Destination URL
                  </span>
                  <span className="truncate text-xs font-mono text-muted-foreground sm:max-w-md">
                    https://example.com/products/summer-sale?campaign=2026&source=newsletter
                  </span>
                </div>

                <div className="h-px bg-border/60" />

                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Link2 className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 font-mono text-sm font-semibold text-foreground">
                        <span>https://link.sh/summer-2026</span>
                        <ExternalLink className="h-3.5 w-3.5 text-muted-foreground" />
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Custom slug • Safe redirect
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1.5 rounded-lg border border-border bg-background px-3 py-1.5 text-xs font-medium">
                      <MousePointerClick className="h-3.5 w-3.5 text-primary" />
                      <span className="font-semibold text-foreground">1,482</span>
                      <span className="text-muted-foreground">clicks</span>
                    </div>
                    <Button variant="outline" size="sm" className="gap-1.5">
                      <Copy className="h-3.5 w-3.5" />
                      <span>Copy</span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Strip */}
        <section
          id="stats"
          className="border-y border-border/60 bg-muted/20 py-12 px-6"
        >
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs font-medium text-muted-foreground sm:text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section id="features" className="py-24 px-6 md:py-32">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                Built For Speed & Control
              </span>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
                Everything you need to manage your links
              </h2>
              <p className="mt-4 text-base text-muted-foreground sm:text-lg">
                Crafted with Next.js 16, modern PostgreSQL, and strict domain
                invariants for maximum performance and bulletproof safety.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={i}
                    className="group relative flex flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-xs transition-all hover:border-primary/50 hover:shadow-md"
                  >
                    <div>
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="mt-5 text-lg font-semibold tracking-tight text-foreground">
                        {feature.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section
          id="how-it-works"
          className="border-t border-border/60 bg-muted/20 py-24 px-6 md:py-32"
        >
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                Simple Workflow
              </span>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
                Shorten and share in three steps
              </h2>
              <p className="mt-4 text-base text-muted-foreground sm:text-lg">
                Get up and running within seconds. No complex setup or steep
                learning curves.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
              {steps.map((item, i) => (
                <div
                  key={i}
                  className="relative flex flex-col rounded-2xl border border-border bg-card p-8 shadow-xs"
                >
                  <div className="text-3xl font-black text-primary/40 font-mono">
                    {item.step}
                  </div>
                  <h3 className="mt-4 text-xl font-bold tracking-tight text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-24 px-6 md:py-28">
          <div className="mx-auto max-w-5xl rounded-3xl border border-border bg-gradient-to-b from-card to-muted/40 p-10 text-center shadow-lg sm:p-16">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-md">
              <Globe className="h-7 w-7" />
            </div>
            <h2 className="mt-6 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
              Ready to take control of your links?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground sm:text-lg">
              Create your account in seconds with modal authentication and start
              generating clean, fast, and secure short links today.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <SignUpButton mode="modal">
                <Button size="lg" className="w-full gap-2 px-8 font-semibold sm:w-auto">
                  <span>Get Started Now</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </SignUpButton>
              <SignInButton mode="modal">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full px-8 sm:w-auto"
                >
                  Sign In
                </Button>
              </SignInButton>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/40 py-10 px-6">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <Link2 className="h-4 w-4" />
            </div>
            <span className="font-semibold text-foreground">Link Shortener</span>
          </div>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Link Shortener. Fast, secure, and modern link management.
          </p>
          <div className="flex items-center gap-6 text-xs text-muted-foreground">
            <a href="#features" className="hover:text-foreground">
              Features
            </a>
            <a href="#how-it-works" className="hover:text-foreground">
              How It Works
            </a>
            <a href="#stats" className="hover:text-foreground">
              Stats
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
