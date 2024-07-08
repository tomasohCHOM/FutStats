import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-background-300 px-6 py-3">
      <section>
        <Link href="/">
          <h1 className="text-gray-10 cursor-pointer font-poppins text-lg font-bold">
            FutStats
          </h1>
        </Link>
      </section>
      <section className="flex items-center justify-between gap-4 font-poppins font-normal">
        <Link href="/highlights">
          <span>Highlights</span>
        </Link>
        <Link href="/upcoming">
          <span>Upcoming</span>
        </Link>
        <Link href="/standings">
          <span>Standings</span>
        </Link>
        <Link href="/news">
          <span>News</span>
        </Link>
      </section>
    </nav>
  );
}
