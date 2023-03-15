import { matchs } from 'Mocks/matchs.mocks';
import React from 'react';
import styles from './Stats.module.scss';

const Stats = () => {
	const mockedData = matchs[0];

	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<p className={styles.globalInformation}>{mockedData.location}</p>
				<p className={styles.globalInformation}>{mockedData.utcDate}</p>
				<div className={styles.scoreContainer}>
					<div>
						<img src={mockedData.homeTeam.logo} alt="club" className={styles.clubLogo} />
						<p>{mockedData.homeTeam.name}</p>
					</div>
					<div>
						<p className={styles.score}>
							{mockedData.score.homeTeam} : {mockedData.score.visitorTeam}{' '}
						</p>
						<p>{mockedData.duration}'</p>
					</div>
					<div>
						<img src={mockedData.visitorTeam.logo} alt="club" className={styles.clubLogo} />
						<p>{mockedData.visitorTeam.name}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Stats;
