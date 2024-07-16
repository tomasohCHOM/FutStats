import React from "react";

export default function Pending({ waitTime }: { waitTime: number }) {
  return (
    <p>Processing... please wait {waitTime} seconds, then refresh the page.</p>
  );
}
