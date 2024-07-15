type Team = {
  name: string;
  shortName: string;
  tla: string;
  crest: string;
};

export type Scorer = {
  scorers: {
    player: {
      name: string;
    };
    team: Team;
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
  team: Team;
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

export enum MatchStatus {
  SCHEDULED,
  TIMED,
  IN_PLAY,
  PAUSED,
  FINISHED,
  SUSPENDED,
  POSTPONED,
  CANCELLED,
  AWARDED,
}

type Match = {
  utcDate: string;
  status: MatchStatus;
  competition: {
    name: string;
    emblem: string;
  };
  homeTeam: Team;
  awayTeam: Team;
};

export type MatchResult = {
  matches: Match[];
};
