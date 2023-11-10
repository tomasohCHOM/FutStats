"use client";

import Highlights from "./components/Highlights";

const callAPI = async () => {
  try {
    const res = await fetch(
      "https://api.football-data.org/v4/teams/86/matches?status=SCHEDULED",
      {
        mode: "no-cors",
        headers: {
          // "Access-Control-Allow-Origin": "*",
          // "Access-Control-Allow-Credentials": true,
          "Content-Type": "applications/json",
          "X-Auth-Token": "84a721b3da6a410298a1fb584f79a8d6",
        },
      }
    );
    console.log(res);
    const data = await res.json();
    console.log(data);
    return data;
  } catch (err) {
    console.error(err);
  }
};

export default function Home() {
  return (
    <main className="grid grid-cols-4">
      <Highlights></Highlights>

      <button onClick={callAPI}>CLICK MEEE</button>
    </main>
  );
}
