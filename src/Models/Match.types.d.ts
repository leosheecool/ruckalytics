export type Team = {
	id: number;
	name: string;
	logo: string;
};

type Action = {
	description: string;
	timeCode: number;
	url: string;
};

type globalGameStats = {
	title: string;
	homeTeam: number;
	visitorTeam: number;
	unit: string;
};

export type GolbalStats = {
	scrums: Action[];
	fouls: Action[];
	global: golbalGameStats[];
	// tries: number;
	// conversions: number;
	// penalties: number;
	// dropGoals: number;
	// penaltiesConceded: number;
	// possesion: number;
	// turnovers: number;
};

// export type MatchStats = {
// 	homeTeam: TeamStats;
// 	visitorTeam: TeamStats;
// 	players: PlayerStats[];
// };

export type Match = {
	id: number;
	utcDate: string;
	duration: number;
	status: 'inProgress' | 'finished';
	homeTeam: Team;
	visitorTeam: Team;
	score: { homeTeam: number; visitorTeam: number };
	location: string;
	stats: GolbalStats;
};
