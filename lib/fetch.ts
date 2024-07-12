"use server";

import { Standing } from "./types";

export async function getFootballData(endpoint: string) {
  const res = await fetch(`https://api.football-data.org/v4/${endpoint}`, {
    headers: {
      "X-Auth-Token": process.env.NEXT_PUBLIC_API_TOKEN || "",
    },
  });
  return res.json();
}

export async function getStandings(
  nationalLeagues: [string, string][],
  year: number,
) {
  const standings: Standing[] = [];
  for (const league of nationalLeagues) {
    const standing = await getFootballData(
      `competitions/${league[1]}/standings/?season=${year}`,
    );
    standings.push({ ...standing, leagueName: league[0] });
  }
  return standings;
}
