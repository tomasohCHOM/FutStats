import React from "react";
import { getStandings } from "@/lib/fetch";
import { nationalLeagues } from "@/lib/constants";
import Standings from "./standings";

export default async function StandingsPage() {
  const leagueStandings = await getStandings(
    Object.entries(nationalLeagues),
    2022,
  );

  return <Standings standings={leagueStandings} />;
}
