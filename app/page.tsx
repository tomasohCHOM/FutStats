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
  return <section></section>;
}
