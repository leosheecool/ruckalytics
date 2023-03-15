import { Match } from '../Models/Match.types.d';

export const matchs: Match[] = [
	{
		id: 1,
		utcDate: '2023-03-16T19:00:00Z',
		duration: 90,
		status: 'finished',
		homeTeam: {
			id: 101,
			name: 'Équipe A',
			logo: 'https://example.com/team-a-logo.png',
		},
		visitorTeam: {
			id: 102,
			name: 'Équipe B',
			logo: 'https://example.com/team-b-logo.png',
		},
		score: { homeTeam: 2, visitorTeam: 1 },
		place: 'Stade A',
	},
	{
		id: 2,
		utcDate: '2023-03-17T21:00:00Z',
		duration: 90,
		status: 'inProgress',
		homeTeam: {
			id: 103,
			name: 'Équipe C',
			logo: 'https://example.com/team-c-logo.png',
		},
		visitorTeam: {
			id: 104,
			name: 'Équipe D',
			logo: 'https://example.com/team-d-logo.png',
		},
		score: { homeTeam: 1, visitorTeam: 1 },
		place: 'Stade B',
	},
	{
		id: 3,
		utcDate: '2023-03-18T18:00:00Z',
		duration: 0,
		status: 'finished',
		homeTeam: {
			id: 105,
			name: 'Équipe E',
			logo: 'https://example.com/team-e-logo.png',
		},
		visitorTeam: {
			id: 106,
			name: 'Équipe F',
			logo: 'https://example.com/team-f-logo.png',
		},
		score: { homeTeam: 3, visitorTeam: 0 },
		place: 'Stade C',
	},
];
