import { Match } from '../Models/Match.types.d';

export const matchs: Match[] = [
	{
		id: 1,
		utcDate: '2023-03-16T19:00:00Z',
		status: 'SCHEDULED',
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
		score: { homeTeam: 0, visitorTeam: 0 },
	},
	{
		id: 2,
		utcDate: '2023-03-17T21:00:00Z',
		status: 'SCHEDULED',
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
		score: { homeTeam: 0, visitorTeam: 0 },
	},
	{
		id: 3,
		utcDate: '2023-03-18T18:00:00Z',
		status: 'SCHEDULED',
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
		score: { homeTeam: 0, visitorTeam: 0 },
	},
];
