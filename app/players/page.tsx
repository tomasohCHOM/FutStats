import React from "react";
import { getTopScorersFromLeagues } from "@/lib/fetch";
import { nationalLeagues } from "@/lib/constants";
import { ScrollArea } from "@/components/scroll-area";
import { Scorer } from "@/lib/types";
import ScorerCard from "@/components/scorer-card";
import Pending from "@/components/pending";

function getOverallTopScorers(scorers: Scorer[]) {
  const allScorers = scorers.flatMap((scorer) => scorer.scorers);
  allScorers.sort((a, b) => b.goals - a.goals);
  return allScorers.slice(0, 30);
}

export default async function PlayersPage() {
  const leagueScorers = await getTopScorersFromLeagues(
    Object.entries(nationalLeagues),
    2022,
  );

  if (leagueScorers.errorCode === 429 && leagueScorers.waitTime) {
    return <Pending waitTime={leagueScorers.waitTime} />;
  }

  const overallTopScorers = getOverallTopScorers(leagueScorers);

  return (
    <section>
      <h1 className="text-3xl font-semibold">Top Scorers</h1>
      <p className="mt-2">
        Includes data regarding the top scorers (from 2022) in the major
        national football leagues
      </p>
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
        {leagueScorers.map((league, i) => {
          return <ScorerCard key={"Scorer Card " + i} league={league} />;
        })}
      </div>
    </section>
  );
}
