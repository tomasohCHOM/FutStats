import "./globals.css";
import type { Metadata } from "next";
import Navbar from "./components/Navbar";

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
        <main className="max-w-screen-2xl p-4 md:p-8">{children}</main>
      </body>
    </html>
  );
}
