export type Scorer = {
  scorers: {
    player: {
      name: string;
    };
    team: {
      name: string;
      crest: string;
    };
    goals: number;
    assists: number;
    penalties: number;
  }[];
  leagueName: string;
  competition: {
    name: string;
    emblem: string;
  };
};

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
