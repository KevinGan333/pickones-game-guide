import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Page Not Found", robots: { index: false, follow: false } };

export default function NotFound() {
  return (
    <main className="flex min-h-[80vh] items-center justify-center bg-white px-6">
      <div className="text-center">
        <p className="mb-4 text-7xl font-extrabold text-[#1a5dc4]">404</p>
        <h1 className="mb-4 text-2xl font-bold text-[#1e293b] md:text-3xl">Page Not Found</h1>
        <p className="mx-auto mb-8 max-w-md text-[#475569]">The page you&apos;re looking for doesn&apos;t exist or has been moved.</p>
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link href="/games" className="btn-primary">Browse Game Guides</Link>
          <Link href="/" className="btn-ghost">Go Home</Link>
        </div>
      </div>
    </main>
  );
}
