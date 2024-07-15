import { getFootballData } from "@/lib/fetch";
import { Match } from "@/lib/types";
import Link from "next/link";
import React from "react";

async function getUpcomingMatches() {
  return await getFootballData("matches/?status=SCHEDULED");
}

export default async function Upcoming() {
  const upcomingMatches = await getUpcomingMatches();
  console.log(upcomingMatches);

  const sampleMatches: Match[] = [
    {
      utcDate: "2022-02-27T16:05:00Z",
      competition: {
        name: "Ligue 1",
        emblem: "https://crests.football-data.org/FL1.pn",
      },
      awayTeam: {
        name: "Real Betis Balompié",
        shortName: "Real Betis",
        tla: "BET",
        crest: "https://crests.football-data.org/90.png",
      },
      homeTeam: {
        name: "ES Troyes AC",
        shortName: "Troyes",
        tla: "ETR",
        crest: "https://crests.football-data.org/531.svg",
      },
    },
    {
      utcDate: "2022-02-27T16:05:00Z",
      competition: {
        name: "Ligue 1",
        emblem: "https://crests.football-data.org/FL1.pn",
      },
      awayTeam: {
        name: "Real Betis Balompié",
        shortName: "Real Betis",
        tla: "BET",
        crest: "https://crests.football-data.org/90.png",
      },
      homeTeam: {
        name: "ES Troyes AC",
        shortName: "Troyes",
        tla: "ETR",
        crest: "https://crests.football-data.org/531.svg",
      },
    },
  ];
  return (
    <section>
      <h1 className="text-3xl font-semibold">Standings</h1>
      {false ? (
        <div className="mt-4 flex flex-col gap-2">
          <p>No upcoming matches at this current time :/</p>
          <Link href="/">
            <button className="btn-contrast px-3 py-2">Home</button>
          </Link>
        </div>
      ) : (
        <div className="mt-4 flex flex-col gap-6">
          {sampleMatches.map((match, i) => {
            return (
              <div
                key={"Match scheduled at " + match.utcDate + " #" + i}
                className="flex max-w-screen-lg items-center justify-between gap-8 rounded-lg bg-background-300 p-2 px-4"
              >
                <div>
                  <span className="mr-1">
                    <img
                      src={match.homeTeam.crest}
                      alt={match.homeTeam.name + " crest"}
                      width={100}
                      height={100}
                      className="mr-1 inline w-4"
                    />
                    {match.homeTeam.name}
                  </span>
                  vs.
                  <span className="ml-1">
                    <img
                      src={match.awayTeam.crest}
                      alt={match.awayTeam.name + " crest"}
                      width={100}
                      height={100}
                      className="mr-1 inline w-4"
                    />
                    {match.awayTeam.name}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="btn-contrast rounded-full p-1 text-sm">
                    SCHEDULED
                  </span>
                  <div className="rounded-md border border-foreground-400 p-1">
                    {new Date(match.utcDate).toLocaleDateString()}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}
