import React from "react";
import { getFootballData } from "../utils/fetch";

export default async function Standings() {
  const premierLeagueStandings = await getFootballData(
    "competitions/PL/standings/?season=2023",
  );
  const primeraDivisionStandings = await getFootballData(
    "competitions/PD/standings/?season=2023",
  );

  return (
    <section>
      <h1 className="text-3xl font-semibold">Standings</h1>
      <div className="mt-4 flex gap-4">
        <div className="flex flex-col">
          <h2 className="text-xl font-medium">Premier League (England)</h2>
          <div className="grid">
            {premierLeagueStandings.standings[0].table.map(
              (positionEntry: any, i: number) => {
                return (
                  <span key={"entry" + i}>
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
        </div>
        <div className="flex flex-col">
          <h2 className="text-xl font-medium">Primera Division (Spain)</h2>
          <div className="grid">
            {primeraDivisionStandings.standings[0].table.map(
              (positionEntry: any, i: number) => {
                return (
                  <span key={"entry" + i}>
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
        </div>
      </div>
    </section>
  );
}
