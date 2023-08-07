import Image from "next/image";
import React from "react";

export default function HighlightCard() {
  return (
    <div className="flex flex-col items-center justify-center m-12 w-72 h-72 rounded-lg border-2 border-blue-100">
      <Image src="" alt="Highlight Image Card"></Image>
      <h3 className="font-poppins">Manchester City vs Leicester</h3>
    </div>
  );
}
