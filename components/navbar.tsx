"use client";

import Link from "next/link";
import React, { useState } from "react";
import { MdMenu } from "react-icons/md";

const navbarItems = [
  {
    name: "Players",
    href: "/players",
  },
  {
    name: "Teams",
    href: "/teams",
  },
  {
    name: "Standings",
    href: "/standings",
  },
  {
    name: "Upcoming",
    href: "/upcoming",
  },
];

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

      {/* DESKTOP VIEW */}
      <div className="hidden items-center justify-between gap-2 md:flex">
        {navbarItems.map((navbarItem, i) => {
          return (
            <Link
              key={"Desktop view " + navbarItem.name + " " + i}
              href={navbarItem.href}
            >
              <span className="btn regular p-2">{navbarItem.name}</span>
            </Link>
          );
        })}
      </div>

      {/* MOBILE VIEW */}
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
        {navbarItems.map((navbarItem, i) => {
          return (
            <Link
              key={"Mobile view " + navbarItem.name + " " + i}
              href={navbarItem.href}
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="btn-regular p-2">{navbarItem.name}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
