export type Team = {
	id: number;
	name: string;
	logo: string;
};

export type Match = {
	id: number;
	utcDate: string;
	duration: number;
	status: 'inProgress' | 'finished';
	homeTeam: Team;
	visitorTeam: Team;
	score: { homeTeam: number; visitorTeam: number };
	place: string;
};
