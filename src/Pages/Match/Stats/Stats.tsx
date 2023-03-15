import React from 'react';
import styles from './Stats.module.scss';

const Stats = () => {
	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<p className={styles.globalInformation}>Location</p>
				<p className={styles.globalInformation}>date</p>
				<div className={styles.scoreContainer}>
					<div>
						<img
							src="https://api-agregateur-static.ffr.fr/assets/embleme/club/111.jpg"
							alt="club"
							className={styles.clubLogo}
						/>
						<p>Co Multisport Bagneux Rugby</p>
					</div>
					<div>
						<p className={styles.score}>3 : 0 </p>
						<p>40'</p>
					</div>
					<div>
						<img
							src="https://api-agregateur-static.ffr.fr/assets/embleme/club/1745.jpg"
							alt="club"
							className={styles.clubLogo}
						/>
						<p>Ass Sportive Fontenaisienne</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Stats;
