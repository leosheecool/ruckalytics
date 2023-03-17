import React, { useState } from 'react';
import styles from './LinesUpMenu.module.scss';
import globalStyles from 'Styles/global.module.scss';
import cn from 'classnames';
import { LineupList, Player } from 'Models/Match.types';

type Props = {
	teams: LineupList;
};

const LinesUpMenu = ({ teams }: Props) => {
	const [actionsTabSelected, setActionsTabSelected] = useState<keyof LineupList>('homeTeam');

	const handleActionTabClick = (key: keyof LineupList) => {
		setActionsTabSelected(key);
	};

	const Fr_Menu = {
		homeTeam: 'Equipe à domicile',
		visitorTeam: "Equipe à l'extérieur",
	};

	return (
		<>
			{Object.keys(teams).map((key) => (
				<button
					key={key}
					className={cn(styles.tabButton, { [styles.active]: key === actionsTabSelected })}
					onClick={() => handleActionTabClick(key as keyof LineupList)}
				>
					{Fr_Menu[key as keyof typeof Fr_Menu]}
				</button>
			))}

			{teams[actionsTabSelected]?.map((player: Player) => {
				return (
					<div key={player.id} className={cn(globalStyles.card, styles.card)}>
						<img src={player.picture} alt="player" className={styles.image} />
						<p>n°{player.number}</p>
						<p className={styles.name}>{player.name}</p>
						<p className={styles.name}>{player.position}</p>
					</div>
				);
			})}
		</>
	);
};

export default LinesUpMenu;
