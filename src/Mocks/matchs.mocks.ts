import { Match } from '../Models/Match.types.d';

export const matchs: Match[] = [
	{
		id: 1,
		utcDate: '2023-03-16T19:00:00Z',
		duration: 80,
		status: 'finished',
		homeTeam: {
			id: 101,
			name: 'Co Multisport Bagneux Rugby',
			logo: 'https://api-agregateur-static.ffr.fr/assets/embleme/club/111.jpg',
		},
		visitorTeam: {
			id: 102,
			name: 'Ass Sportive Fontenaisienne',
			logo: 'https://api-agregateur-static.ffr.fr/assets/embleme/club/1745.jpg',
		},
		score: { homeTeam: 2, visitorTeam: 1 },
		location: 'Stade A',
		stats: {
			scrum: [
				{
					description: 'Scrum gagné',
					timeCode: 0,
				},
				{
					description: 'Scrum gagné',
					timeCode: 0,
				},
			],
			foul: [
				{
					timeCode: 0,
				},
				{
					timeCode: 0,
				},
			],
		},
	},
	{
		id: 2,
		utcDate: '2023-03-17T21:00:00Z',
		duration: 80,
		status: 'inProgress',
		homeTeam: {
			id: 103,
			name: 'RC Paris 15',
			logo: 'https://api-agregateur-static.ffr.fr/assets/embleme/club/608.jpg',
		},
		visitorTeam: {
			id: 101,
			name: 'Co Multisport Bagneux Rugby',
			logo: 'https://api-agregateur-static.ffr.fr/assets/embleme/club/111.jpg',
		},
		score: { homeTeam: 1, visitorTeam: 1 },
		location: 'Stade B',
		stats: {
			scrum: [
				{
					description: 'Scrum gagné',
					timeCode: 0,
				},
				{
					description: 'Scrum gagné',
					timeCode: 0,
				},
			],
			foul: [
				{
					timeCode: 0,
				},
				{
					timeCode: 0,
				},
			],
		},
	},
	{
		id: 3,
		utcDate: '2023-03-18T18:00:00Z',
		duration: 80,
		status: 'finished',
		homeTeam: {
			id: 101,
			name: 'Co Multisport Bagneux Rugby',
			logo: 'https://api-agregateur-static.ffr.fr/assets/embleme/club/111.jpg',
		},
		visitorTeam: {
			id: 106,
			name: 'E S Vitry',
			logo: 'https://api-agregateur-static.ffr.fr/assets/embleme/club/706.jpg',
		},
		score: { homeTeam: 3, visitorTeam: 0 },
		location: 'Stade C',
		stats: {
			scrum: [
				{
					description: 'Scrum gagné',
					timeCode: 0,
				},
				{
					description: 'Scrum gagné',
					timeCode: 0,
				},
			],
			foul: [
				{
					timeCode: 0,
				},
				{
					timeCode: 0,
				},
			],
		},
	},
];
