import React from "react";
import { getFootballData } from "@/lib/fetch";
import { nationalLeagues } from "@/lib/mappings";
import { ScrollArea } from "@/components/scroll-area";

interface Season {
  seasons: {
    id: number;
    startDate: string;
    endDate: string;
    currentMatchDay: string;
    winner: {
      id: number;
      name: string;
      crest: string;
      website: string;
    };
  }[];
}

async function getStandings(nationalLeagues: [string, string][]) {
  const standings = [];
  for (const league of nationalLeagues) {
    const standing = await getFootballData(
      `competitions/${league[1]}/standings/?season=2023`,
    );
    standings.push({ ...standing, leagueName: league[0] });
  }
  return standings;
}

export default async function Standings() {
  const standings = await getStandings(Object.entries(nationalLeagues));

  return (
    <section>
      <h1 className="text-3xl font-semibold">Standings</h1>
      <div className="mt-4 grid grid-cols-2 gap-4">
        {standings.map((standing: any) => {
          return (
            <ScrollArea
              className="flex h-[400px] flex-col rounded-lg bg-background-300 p-4"
              key={"Standing data for: " + standing.leagueName}
            >
              <h2 className="text-xl font-medium">{standing.leagueName}</h2>
              <div className="grid">
                {standing.standings[0].table.map(
                  (positionEntry: any, i: number) => {
                    return (
                      <span key={"Premier League Standings " + i}>
                        {positionEntry.position} - {positionEntry.team.name}{" "}
                        <img
                          src={positionEntry.team.crest}
                          alt={positionEntry.team.name + " crest"}
                          width={100}
                          height={100}
                          className="inline w-4"
                        />
                      </span>
                    );
                  },
                )}
              </div>
            </ScrollArea>
          );
        })}
      </div>
    </section>
  );
}
