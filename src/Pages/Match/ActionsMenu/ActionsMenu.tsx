import { useState } from 'react';
import styles from './ActionsMenu.module.scss';
import { ActionList } from 'Models/Match.types';
import { secondsToTime } from 'Utils/timeConverter';
import cn from 'classnames';
import globalStyles from 'Styles/global.module.scss';

type Props = {
	actions: ActionList;
	onActionClick: (url: string) => void;
	activeVideo?: string;
};

const Fr_Menu = {
	scrums: 'Mêlées',
	fouls: 'Fautes',
	// try: 'Essais',
	// penalty: 'Pénalités',
	// drop: 'Drop',
	// conversion: 'Conversions',
	// kick: 'Kicks',
	// other: 'Autres',
};

const ActionsMenu = ({ actions, onActionClick: handleActionClick, activeVideo }: Props) => {
	const [actionsTabSelected, setActionsTabSelected] = useState<keyof ActionList>('scrums');

	const handleActionTabClick = (key: keyof ActionList) => {
		setActionsTabSelected(key);
	};

	return (
		<>
			{Object.keys(actions).map((key) => (
				<button
					key={key}
					className={cn(styles.tabButton, { [styles.active]: key === actionsTabSelected })}
					onClick={() => handleActionTabClick(key as keyof ActionList)}
				>
					{Fr_Menu[key as keyof typeof Fr_Menu]}
				</button>
			))}

			{actions[actionsTabSelected]?.map((item) => {
				const timecode = secondsToTime(item.timeCode);

				return (
					<div
						key={item.timeCode}
						className={cn(globalStyles.card, styles.card, {
							[styles.active]: activeVideo === item.url,
						})}
						onClick={() => handleActionClick(item.url)}
					>
						<p className={styles.scrum}>{item.description}</p>
						<p className={styles.scrum}>
							{timecode.h}:{timecode.m}:{timecode.s}
						</p>
					</div>
				);
			})}
		</>
	);
};

export default ActionsMenu;
