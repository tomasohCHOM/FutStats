import React from "react";
import { getFootballData } from "@/lib/fetch";
import { nationalLeagues } from "@/lib/mappings";
import { ScrollArea } from "@/components/scroll-area";

interface TableEntry {
  position: number;
  playedGames: number;
  points: number;
  goalDifference: number;
  team: {
    crest: string;
    name: string;
    shortName: string;
    tla: string;
  };
}

interface Standing {
  standings: {
    table: TableEntry[];
  }[];
  leagueName: string;
}

async function getStandings(nationalLeagues: [string, string][]) {
  const standings: Standing[] = [];
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
      <div className="mt-4 grid grid-cols-1 gap-8 lg:grid-cols-2">
        {standings.map((standing) => {
          return (
            <ScrollArea
              className="flex h-[400px] flex-col rounded-lg bg-background-300 p-6"
              key={"Standing data for: " + standing.leagueName}
            >
              <h2 className="text-lg font-medium sm:text-xl">
                {standing.leagueName}
              </h2>
              <table className="mt-2 table w-full text-left text-sm sm:text-[0.9685rem]">
                <thead>
                  <tr className="border-b-2 border-foreground-400">
                    <th>Pos.</th>
                    <th>Team</th>
                    <th>Matches</th>
                    <th>Points</th>
                    <th className="hidden sm:inline">+/-</th>
                  </tr>
                </thead>
                <tbody>
                  {standing.standings[0].table.map(
                    (positionEntry, i: number) => {
                      return (
                        <tr key={standing.leagueName + " Standing #" + i}>
                          <td>{positionEntry.position}.</td>
                          <td>
                            <img
                              src={positionEntry.team.crest}
                              alt={positionEntry.team.name + " crest"}
                              width={100}
                              height={100}
                              className="mr-1 inline w-4"
                            />
                            <span className="sm:hidden">
                              {positionEntry.team.tla}
                            </span>
                            <span className="hidden sm:inline md:hidden">
                              {positionEntry.team.shortName}
                            </span>
                            <span className="hidden md:inline">
                              {positionEntry.team.name}
                            </span>
                          </td>
                          <td>{positionEntry.playedGames}</td>
                          <td>{positionEntry.points}</td>
                          <td className="hidden text-right sm:inline">
                            {positionEntry.goalDifference}
                          </td>
                        </tr>
                      );
                    },
                  )}
                </tbody>
              </table>
            </ScrollArea>
          );
        })}
      </div>
    </section>
  );
}
