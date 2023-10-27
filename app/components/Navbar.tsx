import React from "react";

export default function Navbar() {
  return (
    <header className="flex items-center justify-between px-6 py-3 shadow-md">
      <section>
        <h1 className="font-poppins text-3xl font-bold text-gray-10 cursor-pointer">
          FutStats
        </h1>
      </section>
      <section className="font-poppins font-normal text-xl flex items-center justify-between [&>div]:mx-3 [&>div]:cursor-pointer">
        <div className="hover:text-contrast-200 transition-all">Highlights</div>
        <div className="hover:text-contrast-200 transition-all">Upcoming</div>
        <div className="hover:text-contrast-200 transition-all">Standings</div>
        <div className="hover:text-contrast-200 transition-all">News</div>
      </section>
    </header>
  );
}
