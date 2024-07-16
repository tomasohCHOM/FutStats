import React from "react";
import { nationalLeagues } from "@/lib/constants";
import { getStandings } from "@/lib/fetch";
import StandingCard from "@/components/standing-card";
import Pending from "@/components/pending";

export default async function StandingsPage() {
  const leagueStandings = await getStandings(
    Object.entries(nationalLeagues),
    2022,
  );

  if (leagueStandings.errorCode === 429 && leagueStandings.waitTime) {
    return <Pending waitTime={leagueStandings.waitTime} />;
  }

  return (
    <section>
      <h1 className="text-3xl font-semibold">Standings</h1>
      <p className="mt-2">
        Includes data regarding the team standings (from 2022) in the major
        national football leagues
      </p>
      <div className="mt-4 grid grid-cols-1 gap-8 lg:grid-cols-2">
        {leagueStandings.map((league, i) => {
          return <StandingCard key={"Standing Card " + i} league={league} />;
        })}
      </div>
    </section>
  );
}
