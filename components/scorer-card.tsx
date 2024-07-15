import type { Scorer } from "@/lib/types";
import React from "react";

export default function ScorerCard({ league }: { league: Scorer }) {
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
                  <span className="hidden sm:inline">{scorer.player.name}</span>
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
}
