import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <header className="flex items-center justify-between px-6 py-3 border-b-2 border-contrast-400">
      <section>
        <Link href="/">
          <h1 className="font-poppins text-lg font-bold text-gray-10 cursor-pointer">
            FutStats
          </h1>
        </Link>
      </section>
      <section className="font-poppins font-normal flex items-center justify-between gap-4 [&>span]:cursor-pointer">
        <Link href="/highlights">
          <span className="hover:text-contrast-200 transition-all">
            Highlights
          </span>
        </Link>
        <Link href="/upcoming">
          <span className="hover:text-contrast-200 transition-all">
            Upcoming
          </span>
        </Link>
        <Link href="/standings">
          <span className="hover:text-contrast-200 transition-all">
            Standings
          </span>
        </Link>
        <Link href="/news">
          <span className="hover:text-contrast-200 transition-all">News</span>
        </Link>
      </section>
    </header>
  );
}
