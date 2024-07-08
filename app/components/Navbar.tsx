"use client";

import Link from "next/link";
import React, { useState } from "react";
import { MdMenu } from "react-icons/md";

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 flex w-full items-center justify-between bg-background-300 px-6 py-3">
      <div>
        <Link href="/">
          <span className="text-gray-10 cursor-pointer text-lg font-bold">
            FutStats
          </span>
        </Link>
      </div>
      <div className="hidden items-center justify-between gap-2 md:flex">
        <Link href="/highlights">
          <span className="btn-regular p-2">Highlights</span>
        </Link>
        <Link href="/upcoming">
          <span className="btn-regular p-2">Upcoming</span>
        </Link>
        <Link href="/standings">
          <span className="btn-regular p-2">Standings</span>
        </Link>
        <Link href="/news">
          <span className="btn-regular p-2">News</span>
        </Link>
      </div>

      <MdMenu
        onClick={() => {
          setMobileMenuOpen(!isMobileMenuOpen);
        }}
        size={24}
        className="block md:hidden"
      />

      <div
        className={`fixed right-6 top-14 flex w-[10rem] flex-col justify-center gap-4 rounded-lg bg-background-300 p-3 pl-4 shadow-md transition-transform md:hidden ${
          isMobileMenuOpen ? "scale-100" : "scale-0"
        }`}
      >
        <Link href="/highlights" onClick={() => setMobileMenuOpen(false)}>
          <span className="btn-regular p-2">Highlights</span>
        </Link>
        <Link href="/upcoming" onClick={() => setMobileMenuOpen(false)}>
          <span className="btn-regular p-2">Upcoming</span>
        </Link>
        <Link href="/standings" onClick={() => setMobileMenuOpen(false)}>
          <span className="btn-regular p-2">Standings</span>
        </Link>
        <Link href="/news" onClick={() => setMobileMenuOpen(false)}>
          <span className="btn-regular p-2">News</span>
        </Link>
      </div>
    </nav>
  );
}
