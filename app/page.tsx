import Pending from "@/components/pending";
import ScorerCard from "@/components/scorer-card";
import StandingCard from "@/components/standing-card";
import { getStandings, getTopScorersFromLeagues } from "@/lib/fetch";
import Link from "next/link";

const sampleLeagues = [
  ["Premier League (England)", "PL"],
  ["La Liga (Spain)", "PD"],
] as [string, string][];

export default async function Home() {
  const leagueScorers = await getTopScorersFromLeagues(sampleLeagues, 2022);
  const leagueStandings = await getStandings(sampleLeagues, 2022);

  if (leagueStandings.errorCode === 429 && leagueStandings.waitTime) {
    return <Pending waitTime={leagueStandings.waitTime} />;
  }
  if (leagueScorers.errorCode === 429 && leagueScorers.waitTime) {
    return <Pending waitTime={leagueScorers.waitTime} />;
  }

  return (
    <section className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-semibold">FutStats</h1>
        <p className="text-lg">
          Find football data for the largest national leagues here! ⚽
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-semibold">Scorers</h2>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {leagueScorers.map((league, i) => {
            return (
              <ScorerCard key={"Home Page Scorer Card " + i} league={league} />
            );
          })}
        </div>
        <p>
          See the{" "}
          <Link href="/scorers">
            <span className="underline">top scorers from 2022</span>.
          </Link>
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-semibold">Standings</h2>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {leagueStandings.map((league, i) => {
            return (
              <StandingCard
                key={"Home Page Standing Card " + i}
                league={league}
              />
            );
          })}
        </div>
        <p>
          See more standings in{" "}
          <Link href="/standings">
            <span className="underline">this page</span>.
          </Link>
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-semibold">Upcoming</h2>
        <p>
          Check out all upcoming matches through{" "}
          <Link href="/upcoming">
            <span className="underline">this page</span>
          </Link>
        </p>
      </div>
    </section>
  );
}
