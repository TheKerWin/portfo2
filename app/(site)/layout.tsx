import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Link from "next/link";
import { getPages } from "@/sanity/sanity-utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kerwin Mercado",
  description: "Generated with Next + Sanity",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // get all of our pages
  const pages = await getPages();
  return (
    <html lang="en">
      <body className="mad-w-3xl mx-auto py-10">
        <header className="flex items-center justify-between">
          <Link
            href="/"
            className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text
          text-transparent text-lg font-bold"
          >
            Home
          </Link>
          <div className="flex items-center gap-5 text-sm text-gray-300">
            {pages.map((page) => (
              <Link key = {page._id} href={`/${page.slug}`} className="hover:underline">
                {page.title}
            </Link>
            ))}
          </div>
        </header>

        <main className="py-20 bg-gradient-to-b from-neutral-900  to-purple-900">{children}</main>
      </body>
    </html>
  );
}
