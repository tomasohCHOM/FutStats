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
  area: {
    name: string;
    flag: string;
  };
}

async function getStandings(nationalLeagues: [string, string][], year: number) {
  const standings: Standing[] = [];
  for (const league of nationalLeagues) {
    const standing = await getFootballData(
      `competitions/${league[1]}/standings/?season=${year}`,
    );
    standings.push({ ...standing, leagueName: league[0] });
  }
  return standings;
}

export default async function Standings() {
  const leagueStandings = await getStandings(
    Object.entries(nationalLeagues),
    2022,
  );

  return (
    <section>
      <h1 className="text-3xl font-semibold">Standings</h1>
      <div className="mt-4 grid grid-cols-1 gap-8 lg:grid-cols-2">
        {leagueStandings.map((league) => {
          return (
            <ScrollArea
              className="flex h-[400px] flex-col rounded-lg bg-background-300 p-6"
              key={"Standing data for: " + league.leagueName}
            >
              <h2 className="items-center text-lg font-medium sm:text-xl">
                <span>{league.leagueName}</span>
                <img
                  src={league.area.flag}
                  alt={league.area.name + " Flag"}
                  className="ml-2 inline w-8 pb-1"
                />
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
                  {league.standings[0].table.map((standing, i: number) => {
                    return (
                      <tr key={league.leagueName + " Standing #" + i}>
                        <td>{standing.position}.</td>
                        <td>
                          <img
                            src={standing.team.crest}
                            alt={standing.team.name + " crest"}
                            width={100}
                            height={100}
                            className="mr-1 inline w-4"
                          />
                          <span className="sm:hidden">{standing.team.tla}</span>
                          <span className="hidden sm:inline md:hidden">
                            {standing.team.shortName}
                          </span>
                          <span className="hidden md:inline">
                            {standing.team.name}
                          </span>
                        </td>
                        <td>{standing.playedGames}</td>
                        <td>{standing.points}</td>
                        <td className="hidden text-right sm:inline">
                          {standing.goalDifference}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </ScrollArea>
          );
        })}
      </div>
    </section>
  );
}
