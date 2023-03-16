import React, { useRef, useEffect, useState, useCallback } from 'react';
import CanvasDraw from 'react-canvas-draw';
import styles from './WhiteBoard.module.scss';

const WhiteBoard: React.FC = () => {
	const canvasRef = useRef<CanvasDraw | null>(null);
	const [dimensions, setDimensions] = useState({
		width: window.innerWidth,
		height: window.innerHeight,
	});
	const [showBall, setShowBall] = useState(false);
	const [ballPosition, setBallPosition] = useState({ x: 0, y: 0 });
	const [isDragging, setIsDragging] = useState(false);
	const [drawMode, setDrawMode] = useState(true);

	useEffect(() => {
		const handleResize = () => {
			if (canvasRef.current) {
				canvasRef.current.clear();
				setDimensions({ width: window.innerWidth, height: window.innerHeight });
			}
		};

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	const undo = () => {
		if (canvasRef.current) {
			canvasRef.current.undo();
		}
	};

	const clear = () => {
		if (canvasRef.current) {
			canvasRef.current.clear();
		}
	};

	const toggleBall = () => {
		setShowBall(!showBall);
	};

	const toggleDrawMode = () => {
		setDrawMode(!drawMode);
	};

	const onMouseDown = useCallback(
		(e: React.MouseEvent) => {
			if (drawMode) return;

			const rect = e.currentTarget.getBoundingClientRect();
			const x = e.clientX - rect.left;
			const y = e.clientY - rect.top;

			if (
				showBall &&
				x >= ballPosition.x &&
				x <= ballPosition.x + 40 &&
				y >= ballPosition.y &&
				y <= ballPosition.y + 40
			) {
				setIsDragging(!isDragging);
			}
		},
		[ballPosition, drawMode, showBall, isDragging]
	);

	const onMouseMove = useCallback(
		(e: React.MouseEvent) => {
			if (drawMode || !isDragging) return;

			const rect = e.currentTarget.getBoundingClientRect();
			const x = e.clientX - rect.left - 20;
			const y = e.clientY - rect.top - 20;

			setBallPosition({ x, y });
		},
		[drawMode, isDragging]
	);

	return (
		<div className={styles.container} onMouseDown={onMouseDown} onMouseMove={onMouseMove}>
			<img
				src="https://www.tactictables.com/content/images/thumbs/0000272_club-160-rugby.png"
				alt="Background"
				className={styles.background}
			/>
			<CanvasDraw
				ref={canvasRef}
				canvasWidth={dimensions.width}
				canvasHeight={dimensions.height}
				className={styles.canvas}
				backgroundColor="rgba(0, 0, 0, 0)"
				disabled={!drawMode}
				brushRadius={2}
			/>
			{showBall && (
				<img
					src="https://creazilla-store.fra1.digitaloceanspaces.com/emojis/48767/rugby-football-emoji-clipart-md.png"
					alt="Ballon"
					style={{
						width: 40,
						height: 40,
						position: 'absolute',
						zIndex: 1,
						left: ballPosition.x,
						top: ballPosition.y,
					}}
				/>
			)}
			<div className={styles.buttonContainer}>
				<button onClick={undo} className={styles.button}>
					Effacer la dernière action
				</button>
				<button onClick={clear} className={styles.button}>
					Tout effacer
				</button>
				<button onClick={toggleBall} className={styles.button}>
					Ballon
				</button>
				<button onClick={toggleDrawMode}>
					{drawMode ? 'Désactiver le mode dessin' : 'Activer le mode dessin'}
				</button>
			</div>
		</div>
	);
};

export default WhiteBoard;
