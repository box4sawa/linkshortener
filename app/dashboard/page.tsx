import Link from "next/link";
import { Link2 } from "lucide-react";
import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const { userId } = await auth();
  if (!userId) {
    redirect("/");
  }

  return (
    <div className="flex flex-col flex-1 items-center bg-zinc-50 font-sans dark:bg-black">
      <header className="w-full max-w-3xl flex items-center justify-between py-6 px-16 border-b border-zinc-200 dark:border-zinc-800">
        <Link href="/dashboard" className="flex items-center gap-2 font-semibold text-lg text-zinc-950 dark:text-zinc-50">
          <Link2 className="h-5 w-5" />
          <span>Link Shortener</span>
        </Link>
        <div className="flex items-center gap-3">
          <UserButton />
        </div>
      </header>
      <main className="flex flex-1 w-full max-w-3xl flex-col py-12 px-16">
        <h1 className="text-2xl font-semibold text-black dark:text-zinc-50">Dashboard</h1>
      </main>
    </div>
  );
}


