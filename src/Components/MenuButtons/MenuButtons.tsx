import React from 'react';

type Props = {
	icon: string;
};

const MenuButtons = ({ icon }: Props) => {
	return (
		<div>
			<img src={icon} alt="button" />
		</div>
	);
};

export default MenuButtons;
