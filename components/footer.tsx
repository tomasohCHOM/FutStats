import React from "react";

export default function Footer() {
  return (
    <footer className="mt-auto px-4 py-8 text-sm md:px-8">
      <div>
        Developed with 🔥 by{" "}
        <a
          target="_blank"
          className="underline"
          href="https://github.com/tomasohCHOM"
        >
          Chom
        </a>
        .
      </div>
      <div>
        Built using{" "}
        <a
          target="_blank"
          className="underline"
          href="https://www.football-data.org/"
        >
          football-data.org
        </a>
        .
      </div>
    </footer>
  );
}
