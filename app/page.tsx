import Link from "next/link";
import {
  Link2,
  Zap,
  BarChart3,
  Copy,
  Lock,
  Smartphone,
  QrCode,
  ArrowRight,
} from "lucide-react";
import { SignInButton, SignUpButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";

interface Feature {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Create and manage short links instantly with our blazing-fast URL shortening service.",
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description:
      "Track every click with detailed analytics including referrer data, device types, and geographic information.",
  },
  {
    icon: Copy,
    title: "Easy Sharing",
    description:
      "Copy your short links with a single click and share them across social media, emails, and messages.",
  },
  {
    icon: Lock,
    title: "Secure & Reliable",
    description:
      "Enterprise-grade security with SSL encryption and guaranteed uptime for all your shortened links.",
  },
  {
    icon: QrCode,
    title: "QR Code Generation",
    description:
      "Automatically generate QR codes for your short links for seamless scanning and sharing.",
  },
  {
    icon: Smartphone,
    title: "Mobile Optimized",
    description:
      "Fully responsive design that works perfectly on all devices and screen sizes.",
  },
];

export default async function Home() {
  const { userId } = await auth();
  if (userId) {
    redirect("/dashboard");
  }

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black font-sans">
      {/* Header */}
      <header className="flex items-center justify-between py-6 px-6 sm:px-8 border-b border-zinc-200 dark:border-zinc-800">
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold text-lg text-zinc-950 dark:text-zinc-50"
        >
          <Link2 className="h-5 w-5" />
          <span>Link Shortener</span>
        </Link>
        <div className="flex items-center gap-3">
          <SignInButton mode="modal">
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
          </SignInButton>
          <SignUpButton mode="modal">
            <Button variant="default" size="sm">
              Sign Up
            </Button>
          </SignUpButton>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex-1 flex items-center justify-center px-6 sm:px-8 py-20 sm:py-32">
        <div className="w-full max-w-2xl text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
              Shorten Your Links, Amplify Your Reach
            </h1>
            <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400">
              Create memorable short links, track every click, and gain insights
              with our powerful URL shortening platform.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <SignUpButton mode="modal">
              <Button size="lg" className="gap-2">
                <span>Get Started Free</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </SignUpButton>
            <SignInButton mode="modal">
              <Button variant="outline" size="lg">
                Sign In
              </Button>
            </SignInButton>
          </div>

          <div className="pt-8 text-sm text-zinc-500 dark:text-zinc-400">
            No credit card required • Free forever plan available
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 sm:px-8 py-20 sm:py-32 bg-zinc-50 dark:bg-zinc-950">
        <div className="w-full max-w-5xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-950 dark:text-zinc-50">
              Powerful Features for Your Links
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              Everything you need to create, manage, and track your shortened
              links.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col gap-4 p-6 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800"
                >
                  <div className="w-12 h-12 rounded-lg bg-blue-50 dark:bg-blue-950 flex items-center justify-center">
                    <IconComponent className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-zinc-950 dark:text-zinc-50">
                    {feature.title}
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 sm:px-8 py-20 sm:py-32">
        <div className="w-full max-w-2xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-950 dark:text-zinc-50">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              Join thousands of users who are already shortening links and
              tracking their performance.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <SignUpButton mode="modal">
              <Button size="lg" className="gap-2">
                <span>Create Your First Link</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </SignUpButton>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200 dark:border-zinc-800 px-6 sm:px-8 py-8 text-center text-sm text-zinc-600 dark:text-zinc-400">
        <p>&copy; 2024 Link Shortener. All rights reserved.</p>
      </footer>
    </div>
  );
}
