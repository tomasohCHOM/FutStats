import { Error, MatchResult, Scorer, Standing } from "./types";

/**
 * Function to get football data from a specific endpoint
 * @param endpoint the endpoint to obtain the resource from
 * @returns the result of the request
 */
export async function getFootballData(endpoint: string) {
  const res = await fetch(`https://api.football-data.org/v4/${endpoint}`, {
    headers: {
      "X-Auth-Token": process.env.NEXT_PUBLIC_API_TOKEN || "",
    },
    cache: "no-cache",
  });
  return res.json();
}

type ScorersReturnType = Scorer[] & Error;

export async function getTopScorersFromLeagues(
  nationalLeagues: [string, string][],
  year: number,
): Promise<ScorersReturnType> {
  const scorers: Scorer[] = [];
  for (const league of nationalLeagues) {
    const scorer = await getFootballData(
      `competitions/${league[1]}/scorers/?season=${year}`,
    );
    if (scorer.errorCode === 429) {
      const waitTime = scorer.message.match(/(\d+)/)[0];
      return { ...scorer, waitTime: waitTime };
    }
    scorers.push({ ...scorer, leagueName: league[0] });
  }
  return scorers;
}

type StandingsReturnType = Standing[] & Error;

export async function getStandings(
  nationalLeagues: [string, string][],
  year: number,
): Promise<StandingsReturnType> {
  const standings: Standing[] = [];
  for (const league of nationalLeagues) {
    const standing = await getFootballData(
      `competitions/${league[1]}/standings/?season=${year}`,
    );
    if (standing.errorCode === 429) {
      const waitTime = standing.message.match(/(\d+)/)[0];
      return { ...standing, waitTime: waitTime };
    }
    standings.push({ ...standing, leagueName: league[0] });
  }
  return standings;
}

type MatchReturnType = MatchResult & Error;

export async function getUpcomingMatches(): Promise<MatchReturnType> {
  const matches = await getFootballData("matches/?status=SCHEDULED");
  if (matches.errorCode === 429) {
    const waitTime = matches.message.match(/(\d+)/)[0];
    return { ...matches, waitTime: waitTime };
  }
  return matches;
}
