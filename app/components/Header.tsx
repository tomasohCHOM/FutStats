import React from "react";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-3 shadow-md bg-slate-50 cursor-pointer">
      <section>
        <h1 className="font-poppins text-3xl font-bold text-gray-10">
          FutStats
        </h1>
      </section>
      <section className="font-poppins font-normal text-xl flex items-center justify-between [&>div]:mx-3 [&>div]:cursor-pointer">
        <div>Highlights</div>
        <div>Upcoming</div>
        <div>Standings</div>
        <div>News</div>
      </section>
    </header>
  );
}
