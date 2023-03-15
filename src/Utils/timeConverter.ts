export const secondsToTime = (secs: number) => {
	const hours = Math.floor(secs / (60 * 60));

	const divisorForMinutes = secs % (60 * 60);
	const minutes = Math.floor(divisorForMinutes / 60);

	const divisorForSeconds = divisorForMinutes % 60;
	const seconds = Math.ceil(divisorForSeconds);

	return {
		h: `${hours < 10 ? '0' : ''}${hours}`,
		m: `${minutes < 10 ? '0' : ''}${minutes}`,
		s: `${seconds < 10 ? '0' : ''}${seconds}`,
	};
};
