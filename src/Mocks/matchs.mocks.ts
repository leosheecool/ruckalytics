import { Match } from '../Models/Match.types.d';

export const matchs: Match[] = [
	{
		id: 1,
		utcDate: '2023-03-16T19:00:00Z',
		duration: 80,
		status: 'finished',
		homeTeam: {
			id: 101,
			name: 'Stade rochelais',
			logo: 'https://upload.wikimedia.org/wikipedia/fr/thumb/4/44/Logo_Stade_rochelais_2016.svg/1200px-Logo_Stade_rochelais_2016.svg.png',
		},
		visitorTeam: {
			id: 102,
			name: 'Lyon Ol U',
			logo: 'https://api-agregateur-static.ffr.fr/assets/embleme/club/74.jpg',
		},
		score: { homeTeam: 16, visitorTeam: 20 },
		location: 'Stade Marcel-Deflandre',
		stats: {
			scrums: [
				{
					description: 'Mêlée gagné',
					timeCode: 540,
					// url: 'http://localhost:3000/26_27_20sec.mp4',
					url: 'http://localhost:3000/scrum 1.mp4',
				},
				{
					description: 'Mêlée gagnée',
					timeCode: 700,
					url: 'http://localhost:3000/scrum 2.mp4',
				},
				{
					description: 'Mêlée gagnée',
					timeCode: 1544,
					url: 'http://localhost:3000/scrum 3.mp4',
				},
				{
					description: 'Mêlée perdue',
					timeCode: 1600,
					url: 'http://localhost:3000/scrum and foul.mp4',
				},
				{
					description: 'Mêlée gagnée',
					timeCode: 1740,
					url: 'http://localhost:3000/scrum 4.mp4',
				},
				{
					description: 'Mêlée perdue',
					timeCode: 2140,
					url: 'http://localhost:3000/scrum 4.mp4',
				},
				{
					description: 'Mêlée perdue',
					timeCode: 2490,
					url: 'http://localhost:3000/scrum 4.mp4',
				},
				{
					description: 'Mêlée gagnée',
					timeCode: 2950,
					url: 'http://localhost:3000/scrum 4.mp4',
				},
				{
					description: 'Mêlée perdue',
					timeCode: 3180,
					url: 'http://localhost:3000/scrum 4.mp4',
				},
			],
			fouls: [
				{
					description: 'Equipe A',
					timeCode: 1600,
					url: 'http://localhost:3000/scrum and foul.mp4',
				},
				{
					description: 'Equipe B',
					timeCode: 1928,
					url: 'http://localhost:3000/foul 2.mp4',
				},
				{
					description: 'Equipe A',
					timeCode: 1977,
					url: 'http://localhost:3000/foul 2.mp4',
				},
				{
					description: 'Equipe A',
					timeCode: 2187,
					url: 'http://localhost:3000/foul 2.mp4',
				},
				{
					description: 'Equipe A',
					timeCode: 2375,
					url: 'http://localhost:3000/foul 2.mp4',
				},
			],
		},
	},
	{
		id: 2,
		utcDate: '2023-03-15T21:00:00Z',
		duration: 80,
		status: 'inProgress',
		visitorTeam: {
			id: 103,
			name: 'RC Paris 15',
			logo: 'https://api-agregateur-static.ffr.fr/assets/embleme/club/608.jpg',
		},
		homeTeam: {
			id: 101,
			name: 'Co Multisport Bagneux Rugby',
			logo: 'https://api-agregateur-static.ffr.fr/assets/embleme/club/111.jpg',
		},
		score: { homeTeam: 29, visitorTeam: 17 },
		location: 'Stade B',
		stats: {
			scrums: [
				{
					description: 'Scrum gagné',
					timeCode: 0,
					url: 'http://localhost:3000/test1.mp4',
				},
				{
					description: 'Scrum gagné',
					timeCode: 0,
					url: 'http://localhost:3000/test1.mp4',
				},
			],
			fouls: [
				{
					description: 'Equipe B',
					timeCode: 0,
					url: 'http://localhost:3000/test1.mp4',
				},
				{
					description: 'Equipe A',
					timeCode: 0,
					url: 'http://localhost:3000/test1.mp4',
				},
			],
		},
	},
	{
		id: 3,
		utcDate: '2023-03-14T18:00:00Z',
		duration: 80,
		status: 'finished',
		visitorTeam: {
			id: 101,
			name: 'Co Multisport Bagneux Rugby',
			logo: 'https://api-agregateur-static.ffr.fr/assets/embleme/club/111.jpg',
		},
		homeTeam: {
			id: 106,
			name: 'E S Vitry',
			logo: 'https://api-agregateur-static.ffr.fr/assets/embleme/club/706.jpg',
		},
		score: { homeTeam: 16, visitorTeam: 20 },
		location: 'Stade C',
		stats: {
			scrums: [
				{
					description: 'Scrum gagné',
					timeCode: 170,
					url: 'http://localhost:3000/test1.mp4',
				},
				{
					description: 'Scrum gagné',
					timeCode: 350,
					url: 'http://localhost:3000/test1.mp4',
				},
			],
			fouls: [
				{
					description: 'Equipe B',
					timeCode: 195,
					url: 'http://localhost:3000/test1.mp4',
				},
				{
					description: 'Equipe C',
					timeCode: 652,
					url: 'http://localhost:3000/test1.mp4',
				},
			],
		},
	},
	{
		id: 3,
		utcDate: '2023-03-13T18:00:00Z',
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
		score: { homeTeam: 25, visitorTeam: 25 },
		location: 'Stade C',
		stats: {
			scrums: [
				{
					description: 'Scrum gagné',
					timeCode: 170,
					url: 'http://localhost:3000/test1.mp4',
				},
				{
					description: 'Scrum gagné',
					timeCode: 350,
					url: 'http://localhost:3000/test1.mp4',
				},
			],
			fouls: [
				{
					description: 'Equipe B',
					timeCode: 195,
					url: 'http://localhost:3000/test1.mp4',
				},
				{
					description: 'Equipe C',
					timeCode: 652,
					url: 'http://localhost:3000/test1.mp4',
				},
			],
		},
	},
	{
		id: 3,
		utcDate: '2023-03-12T18:00:00Z',
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
		score: { homeTeam: 25, visitorTeam: 25 },
		location: 'Stade C',
		stats: {
			scrums: [
				{
					description: 'Scrum gagné',
					timeCode: 170,
					url: 'http://localhost:3000/test1.mp4',
				},
				{
					description: 'Scrum gagné',
					timeCode: 350,
					url: 'http://localhost:3000/test1.mp4',
				},
			],
			fouls: [
				{
					description: 'Equipe B',
					timeCode: 195,
					url: 'http://localhost:3000/test1.mp4',
				},
				{
					description: 'Equipe C',
					timeCode: 652,
					url: 'http://localhost:3000/test1.mp4',
				},
			],
		},
	},
];
