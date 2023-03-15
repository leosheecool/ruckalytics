import React from 'react';
import FFRLogo from 'Assets/images/FFRLogo.jpg';
import styles from './Header.module.scss';

const Header = () => {
	return (
		<div className={styles.container}>
			<img src={FFRLogo} className={styles.img} alt="FFR" />
		</div>
	);
};

export default Header;
