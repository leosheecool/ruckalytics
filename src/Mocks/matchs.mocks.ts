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
			global: [
				{
					title: 'Possession',
					homeTeam: 61,
					visitorTeam: 39,
					unit: '%',
				},
				{
					title: 'Occupation',
					homeTeam: 68,
					visitorTeam: 32,
					unit: '%',
				},
				{
					title: "Min d'attaque",
					homeTeam: 21.5,
					visitorTeam: 12.8,
					unit: 'min',
				},
				{
					title: 'Attaques gagnées',
					homeTeam: 93,
					visitorTeam: 88,
					unit: '%',
				},
				{
					title: 'Touches gagnées',
					homeTeam: 91,
					visitorTeam: 92,
					unit: '%',
				},
				{
					title: 'Mêlées gagnées',
					homeTeam: 60,
					visitorTeam: 56,
					unit: '%',
				},
				{
					title: 'Mêlées jouées',
					homeTeam: 60,
					visitorTeam: 44,
					unit: '%',
				},
			],
			actions: {
				scrums: [
					{
						description: 'Mêlée gagné',
						timeCode: 540,
						// url: 'http://localhost:3000/26_27_20sec.mp4',
						url: 'http://localhost:3000/scrum_1.mp4',
					},
					{
						description: 'Mêlée gagnée',
						timeCode: 700,
						url: 'http://localhost:3000/scrum_2.mp4',
					},
					{
						description: 'Mêlée gagnée',
						timeCode: 1544,
						url: 'http://localhost:3000/scrum_3.mp4',
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
			lineup: {
				homeTeam: [
					{
						id: 1,
						picture: 'https://avatars.dicebear.com/api/human/1.svg',
						name: 'Thomas Dupont',
						position: 'Scrum-half',
						number: 9,
					},
					{
						id: 2,
						picture: 'https://avatars.dicebear.com/api/human/2.svg',
						name: 'Lucas Lopez',
						position: 'Fly-half',
						number: 10,
					},
					{
						id: 3,
						picture: 'https://avatars.dicebear.com/api/human/3.svg',
						name: 'Benjamin Martin',
						position: 'Centre',
						number: 12,
					},
					{
						id: 4,
						picture: 'https://avatars.dicebear.com/api/human/4.svg',
						name: 'Julien Petit',
						position: 'Centre',
						number: 13,
					},
					{
						id: 5,
						picture: 'https://avatars.dicebear.com/api/human/5.svg',
						name: 'Antoine Durand',
						position: 'Wing',
						number: 11,
					},
					{
						id: 6,
						picture: 'https://avatars.dicebear.com/api/human/6.svg',
						name: 'Maxime Bonnet',
						position: 'Wing',
						number: 14,
					},
					{
						id: 7,
						picture: 'https://avatars.dicebear.com/api/human/7.svg',
						name: 'Romain Girard',
						position: 'Fullback',
						number: 15,
					},
					{
						id: 8,
						picture: 'https://avatars.dicebear.com/api/human/8.svg',
						name: 'Nicolas Lefebvre',
						position: 'Loosehead Prop',
						number: 1,
					},
					{
						id: 9,
						picture: 'https://avatars.dicebear.com/api/human/9.svg',
						name: 'Simon Morin',
						position: 'Hooker',
						number: 2,
					},
					{
						id: 10,
						picture: 'https://avatars.dicebear.com/api/human/10.svg',
						name: 'Hugo Poirier',
						position: 'Tighthead Prop',
						number: 3,
					},
					{
						id: 11,
						picture: 'https://avatars.dicebear.com/api/human/11.svg',
						name: 'Mathieu Gaillard',
						position: 'Lock',
						number: 4,
					},
					{
						id: 12,
						picture: 'https://avatars.dicebear.com/api/human/12.svg',
						name: 'Alexandre Roux',
						position: 'Lock',
						number: 5,
					},
				],
				visitorTeam: [
					{
						id: 14,
						picture: 'https://avatars.dicebear.com/api/human/14.svg',
						name: 'Philippe Leroux',
						position: 'Openside Flanker',
						number: 7,
					},
					{
						id: 15,
						picture: 'https://avatars.dicebear.com/api/human/15.svg',
						name: 'Guillaume Fournier',
						position: 'Number 8',
						number: 8,
					},
					{
						id: 16,
						picture: 'https://avatars.dicebear.com/api/human/16.svg',
						name: 'Frédéric Vincent',
						position: 'Prop',
						number: 17,
					},
					{
						id: 17,
						picture: 'https://avatars.dicebear.com/api/human/17.svg',
						name: 'Olivier Leclerc',
						position: 'Hooker',
						number: 16,
					},
					{
						id: 18,
						picture: 'https://avatars.dicebear.com/api/human/18.svg',
						name: 'Jean-Pierre Dubois',
						position: 'Prop',
						number: 18,
					},
					{
						id: 19,
						picture: 'https://avatars.dicebear.com/api/human/19.svg',
						name: 'Pierre Giraud',
						position: 'Lock',
						number: 19,
					},
					{
						id: 20,
						picture: 'https://avatars.dicebear.com/api/human/20.svg',
						name: 'Marc Lemoine',
						position: 'Back Row',
						number: 20,
					},
					{
						id: 21,
						picture: 'https://avatars.dicebear.com/api/human/21.svg',
						name: 'Rémi Moreau',
						position: 'Scrum-half',
						number: 21,
					},
					{
						id: 22,
						picture: 'https://avatars.dicebear.com/api/human/22.svg',
						name: 'Christophe Brun',
						position: 'Fly-half',
						number: 22,
					},
					{
						id: 23,
						picture: 'https://avatars.dicebear.com/api/human/23.svg',
						name: 'Fabrice Marchand',
						position: 'Centre',
						number: 23,
					},
				],
			},
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
			global: [],
			actions: {
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
			lineup: {
				homeTeam: [],
				visitorTeam: [],
			},
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
			global: [],
			lineup: {
				homeTeam: [],
				visitorTeam: [],
			},
			actions: {
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
			global: [],
			lineup: {
				homeTeam: [],
				visitorTeam: [],
			},
			actions: {
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
	},
];
