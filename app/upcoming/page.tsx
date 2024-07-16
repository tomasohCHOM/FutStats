import Pending from "@/components/pending";
import { getUpcomingMatches } from "@/lib/fetch";
import Link from "next/link";
import React from "react";

export default async function Upcoming() {
  const upcomingMatches = await getUpcomingMatches();

  if (upcomingMatches.errorCode === 429 && upcomingMatches.waitTime) {
    return <Pending waitTime={upcomingMatches.waitTime} />;
  }

  return (
    <section>
      <h1 className="text-3xl font-semibold">Upcoming Matches</h1>
      {upcomingMatches.matches.length === 0 ? (
        <div className="mt-4 flex flex-col gap-2">
          <p>No upcoming matches at this current time :/</p>
          <Link href="/">
            <button className="btn-contrast px-3 py-2">Home</button>
          </Link>
        </div>
      ) : (
        <div className="mx-auto mt-4 flex max-w-screen-lg flex-col gap-6">
          {upcomingMatches.matches.map((match, i) => {
            return (
              <div
                key={"Match scheduled at " + match.utcDate + " #" + i}
                className="flex w-full flex-col items-center justify-between gap-2 rounded-lg bg-background-300 p-2 px-4 md:flex-row md:gap-8"
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
                    <span className="hidden sm:inline">
                      {match.homeTeam.name}
                    </span>
                    <span className="inline sm:hidden">
                      {match.homeTeam.shortName}
                    </span>
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
                    <span className="hidden sm:inline">
                      {match.awayTeam.name}
                    </span>
                    <span className="inline sm:hidden">
                      {match.awayTeam.shortName}
                    </span>
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-foreground-400 p-1 text-sm font-semibold text-background-200">
                    SCHEDULED
                  </span>
                  <div className="rounded-md border border-foreground-400 p-1 text-sm">
                    {new Date(match.utcDate).toLocaleString()}
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
