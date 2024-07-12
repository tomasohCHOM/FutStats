import React from "react";
import { getFootballData } from "@/lib/fetch";
import { nationalLeagues } from "@/lib/mappings";

interface Scorer {
  scorers: {
    player: {
      name: string;
    };
    team: {
      name: string;
      crest: string;
    };
    goals: number;
    assists: number;
    penalties: number;
  }[];
  leagueName: string;
}

function getOverallTopScorers(scorers: Scorer[]) {
  for (const scorer of scorers) {
  }
}

async function getTopScorersFromLeagues(nationalLeagues: [string, string][]) {
  const scorers: Scorer[] = [];
  for (const league of nationalLeagues) {
    const scorer = await getFootballData(
      `competitions/${league[1]}/scorers/?season=2022`,
    );
    scorers.push({ ...scorer, leagueName: league[0] });
  }
  return scorers;
}

export default async function Players() {
  const scorers = await getTopScorersFromLeagues(
    Object.entries(nationalLeagues),
  );
  const overallTopScorers = getOverallTopScorers(scorers);

  return (
    <section>
      <h1 className="text-3xl font-semibold">Top Scorers</h1>
      <div className="mt-4 grid grid-cols-1 gap-8 lg:grid-cols-2">
        {scorers.map((scorer) => {
          return (
            <div
              className="flex flex-col rounded-lg bg-background-300 p-6"
              key={"Top Scorers data for: " + scorer.leagueName}
            >
              <h2 className="text-lg font-medium sm:text-xl">
                {scorer.leagueName}
              </h2>
              {scorer.scorers.map((scorer, i) => {
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
          );
        })}
      </div>
    </section>
  );
}
