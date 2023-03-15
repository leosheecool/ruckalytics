export type Team = {
	id: number;
	name: string;
	logo: string;
};

export type Match = {
	id: number;
	utcDate: string;
	status: string;
	homeTeam: Team;
	visitorTeam: Team;
	score: { homeTeam: number; visitorTeam: number };
};
