import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "FutStats",
  description: "Display soccer data across multiple leagues",
  icons: {
    shortcut: "./favicon.ico",
  },
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
        <div className="flex h-screen flex-col">
          <main className="mt-12 max-w-screen-2xl px-4 py-8 md:px-8">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
