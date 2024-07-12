import React from "react";
import { getFootballData } from "@/lib/fetch";
import { nationalLeagues, years } from "@/lib/constants";
import { ScrollArea } from "@/components/scroll-area";

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
  competition: {
    name: string;
    emblem: string;
  };
}

function getOverallTopScorers(scorers: Scorer[]) {
  const allScorers = scorers.flatMap((scorer) => scorer.scorers);
  allScorers.sort((a, b) => b.goals - a.goals);
  return allScorers.slice(0, 30);
}

async function getTopScorersFromLeagues(
  nationalLeagues: [string, string][],
  year: number,
) {
  const scorers: Scorer[] = [];
  for (const league of nationalLeagues) {
    const scorer = await getFootballData(
      `competitions/${league[1]}/scorers/?season=${year}`,
    );
    scorers.push({ ...scorer, leagueName: league[0] });
  }
  return scorers;
}

export default async function Players() {
  const leagueScorers = await getTopScorersFromLeagues(
    Object.entries(nationalLeagues),
    2022,
  );
  const overallTopScorers = getOverallTopScorers(leagueScorers);

  return (
    <section>
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-semibold">Top Scorers</h1>
        <form>
          <select className="btn-regular p-2 outline-none">
            {years.map((year) => {
              return (
                <option key={"Option for standings " + year} value={year}>
                  {year}
                </option>
              );
            })}
          </select>
        </form>
      </div>
      <div className="mt-4 grid grid-cols-1 gap-8 lg:grid-cols-2">
        <ScrollArea className="h-[380px] rounded-lg bg-background-300 p-6">
          <h2 className="text-lg font-medium sm:text-xl">
            Overall Top Scorers (Top 30)
          </h2>
          <table className="mt-2 w-full text-left">
            <thead>
              <tr className="border-b-2 border-foreground-400">
                <th>Pos.</th>
                <th>Player</th>
                <th>Goals</th>
                <th className="text-right">Assists</th>
              </tr>
            </thead>
            <tbody>
              {overallTopScorers.map((scorer, i) => {
                return (
                  <tr key={"Overall Top Scorer " + i}>
                    <td>{i + 1}.</td>
                    <td>
                      <img
                        src={scorer.team.crest}
                        alt={scorer.team.name + " crest"}
                        width={100}
                        height={100}
                        className="mr-1 inline w-4"
                      />
                      <span className="hidden sm:inline">
                        {scorer.player.name}
                      </span>
                      <span className="inline sm:hidden">
                        {(() => {
                          const name = scorer.player.name;
                          return name.indexOf(" ") === -1
                            ? name
                            : name.substring(name.indexOf(" "));
                        })()}
                      </span>
                    </td>
                    <td>{scorer.goals}</td>
                    <td className="text-right">
                      {scorer.assists > 0 ? scorer.assists : 0}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="flex flex-col"></div>
        </ScrollArea>
        {leagueScorers.map((league) => {
          return (
            <div
              className="flex flex-col rounded-lg bg-background-300 p-6"
              key={"Top Scorers data for: " + league.leagueName}
            >
              <h2 className="text-lg font-medium sm:text-xl">
                <span>{league.leagueName}</span>
                <img
                  src={league.competition.emblem}
                  alt={league.competition.name + " Emblem"}
                  className="ml-2 inline w-8 bg-white p-1"
                />
              </h2>
              <table className="mt-2 w-full text-left">
                <thead>
                  <tr className="border-b-2 border-foreground-400">
                    <th>Pos.</th>
                    <th>Player</th>
                    <th>Goals</th>
                    <th className="text-right">Assists</th>
                  </tr>
                </thead>
                <tbody>
                  {league.scorers.map((scorer, i) => {
                    return (
                      <tr key={league.leagueName + " Top Scorer " + i}>
                        <td>{i + 1}.</td>
                        <td>
                          <img
                            src={scorer.team.crest}
                            alt={scorer.team.name + " crest"}
                            width={100}
                            height={100}
                            className="mr-1 inline w-4"
                          />
                          <span className="hidden sm:inline">
                            {scorer.player.name}
                          </span>
                          <span className="inline sm:hidden">
                            {(() => {
                              const name = scorer.player.name;
                              return name.indexOf(" ") === -1
                                ? name
                                : name.substring(name.indexOf(" "));
                            })()}
                          </span>
                        </td>
                        <td>{scorer.goals}</td>
                        <td className="text-right">
                          {scorer.assists > 0 ? scorer.assists : 0}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          );
        })}
      </div>
    </section>
  );
}
