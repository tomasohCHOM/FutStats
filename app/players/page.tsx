import React from "react";
import { getFootballData } from "@/lib/fetch";

export default async function Players() {
  const scorers = await getFootballData("competitions/SA/scorers?season=2023");

  return (
    <section>
      <h1 className="text-3xl font-semibold">Top Scorers</h1>
      <div className="mt-4 flex flex-col">
        {scorers.scorers.map((scorer: any, i: number) => {
          return (
            <span key={"League top scorer " + i}>
              {scorer.player.name} - {scorer.goals}{" "}
              <img
                src={scorer.team.crest}
                alt={scorer.team.name + " crest"}
                width={100}
                height={100}
                className="inline w-4"
              />
            </span>
          );
        })}
      </div>
    </section>
  );
}
