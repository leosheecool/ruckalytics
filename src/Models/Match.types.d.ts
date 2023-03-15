export type Team = {
	id: number;
	name: string;
	logo: string;
};

export type GolbalStats = {
	scrums: {
		description: string;
		timeCode: number;
	}[];
	fouls: {
		description: string;
		timeCode: number;
	}[];
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
