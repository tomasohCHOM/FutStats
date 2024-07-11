import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  title: "FutStats",
  description: "Display soccer data across multiple leagues",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Navbar />
        <main className="mt-12 max-w-screen-2xl px-4 py-8 md:px-8">
          {children}
        </main>
      </body>
    </html>
  );
}
