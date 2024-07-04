import { getFootballData } from "./utils/fetch";

interface Season {
  seasons: {
    id: number;
    startDate: string;
    endDate: string;
    currentMatchDay: string;
    winner: {
      id: number;
      name: string;
      crest: string;
      website: string;
    };
  }[];
}

export default async function Home() {
  const data: Season = await getFootballData("competitions/PL");
  return (
    <main className="grid grid-cols-4">
      {data.seasons.map((season) => {
        if (!season.winner) return;
        return <div>{season.winner.name}</div>;
      })}
    </main>
  );
}
