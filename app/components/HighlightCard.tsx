import Image from "next/image";
import React from "react";

export default function HighlightCard() {
  return (
    <div className="border-blue-100 m-12 flex h-72 w-72 flex-col items-center justify-center rounded-lg border-2">
      <Image
        src="/static/placeholder.jpg"
        alt="Highlight Image Card"
        width="100"
        height="0"
        priority
        className="h-auto w-full"
      ></Image>
      <h3 className="font-poppins">Manchester City vs Leicester</h3>
    </div>
  );
}
