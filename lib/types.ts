type TableEntry = {
  position: number;
  playedGames: number;
  points: number;
  goalDifference: number;
  team: {
    crest: string;
    name: string;
    shortName: string;
    tla: string;
  };
};

export type Standing = {
  standings: {
    table: TableEntry[];
  }[];
  leagueName: string;
  area?: {
    name: string;
    flag: string;
  };
};
