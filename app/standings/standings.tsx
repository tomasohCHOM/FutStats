"use client";

import { ScrollArea } from "@/components/scroll-area";
import { nationalLeagues, years } from "@/lib/constants";
import { getStandings } from "@/lib/fetch";
import { Standing } from "@/lib/types";
import React, { useEffect, useState } from "react";

export default function Standings({ standings }: { standings: Standing[] }) {
  const [leagueStandings, setLeagueStandings] = useState(standings);
  const [isLoading, setIsLoading] = useState(false);
  const [year, setYear] = useState(2022);

  // useEffect(() => {
  //   const fetchLeagueStandings = async () => {
  //     const updatedStandings = await getStandings(
  //       Object.entries(nationalLeagues),
  //       year,
  //     );
  //     setLeagueStandings(updatedStandings);
  //     setIsLoading(false);
  //   };
  //   setIsLoading(true);
  //   fetchLeagueStandings();
  // }, [year]);

  if (isLoading) {
    return <div>Loading data...</div>;
  }

  return (
    <section>
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-semibold">Standings</h1>
        <select
          onChange={(e) => setYear(Number(e.target.value))}
          className="btn-regular cursor-pointer p-2 outline-none"
        >
          {years.map((year) => {
            return (
              <option key={"Option for standings " + year} value={year}>
                {year}
              </option>
            );
          })}
        </select>
      </div>
      <div className="mt-4 grid grid-cols-1 gap-8 lg:grid-cols-2">
        {leagueStandings.map((league) => {
          return (
            <ScrollArea
              className="flex h-[400px] flex-col rounded-lg bg-background-300 p-6"
              key={"Standing data for: " + league.leagueName}
            >
              <h2 className="text-lg font-medium sm:text-xl">
                <span>{league.leagueName}</span>
                <img
                  src={league.area?.flag ?? "Flag"}
                  alt={(league.area?.name ?? "Undefined") + " Flag"}
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
                    <th className="hidden text-right sm:block">+/-</th>
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
                        <td className="hidden text-right sm:block">
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
