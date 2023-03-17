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

type GlobalGameStats = {
	title: string;
	homeTeam: number;
	visitorTeam: number;
	unit: string;
};

// export type GolbalStats = {
// 	// scrums: Action[];
// 	// fouls: Action[];
// 	global: golbalGameStats[];
// 	// tries: number;
// 	// conversions: number;
// 	// penalties: number;
// 	// dropGoals: number;
// 	// penaltiesConceded: number;
// 	// possesion: number;
// 	// turnovers: number;
// };
export type ActionList = {
	scrums: Action[];
	fouls: Action[];
};

export type Player = {
	id: number;
	picture?: string;
	name: string;
	position: string;
	number: number;
};
export type LineupList = {
	homeTeam: Player[];
	visitorTeam: Player[];
};

export type GolbalStats = {
	global: GlobalGameStats[];
	actions: ActionList;
	lineup: LineupList;
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
