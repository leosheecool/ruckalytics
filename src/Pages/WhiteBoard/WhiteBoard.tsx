import React, { useRef, useEffect, useState, useCallback } from 'react';
import CanvasDraw from 'react-canvas-draw';
import styles from './WhiteBoard.module.scss';
import { CgErase } from 'react-icons/cg';
import { IoAmericanFootballOutline } from 'react-icons/io5';
import { RiArrowGoBackFill } from 'react-icons/ri';
import fieldPng from 'Assets/images/field.png';
import { TbPencilPlus, TbPencilOff } from 'react-icons/tb';

const WhiteBoard: React.FC = () => {
	const canvasRef = useRef<CanvasDraw | null>(null);
	const [dimensions, setDimensions] = useState({
		width: window.innerWidth,
		height: window.innerHeight,
	});
	const [showBall, setShowBall] = useState(false);
	const [ballPosition, setBallPosition] = useState({
		x: window.innerHeight / 2,
		y: window.innerWidth / 2,
	});
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
		setDrawMode(false);
		if (!showBall) setBallPosition({ x: window.innerHeight / 2, y: window.innerWidth / 2 });
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

	console.log('dimensions.width', dimensions.width, window.innerWidth);
	return (
		<div
			className={styles.container}
			style={{ height: window.innerHeight - 70, width: window.innerWidth }}
			onMouseDown={onMouseDown}
			onMouseMove={onMouseMove}
		>
			<div className={styles.backgroundContainer}>
				<img src={fieldPng} alt="Background" className={styles.backgroundImage} />
				<CanvasDraw
					ref={canvasRef}
					canvasWidth={dimensions.width - 50}
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
							width: 50,
							height: 50,
							position: 'absolute',
							zIndex: 30,
							left: ballPosition.x,
							top: ballPosition.y,
						}}
					/>
				)}
			</div>
			<div className={styles.buttonContainer}>
				<button onClick={undo} className={styles.button}>
					<RiArrowGoBackFill size={35} />
				</button>
				<button onClick={clear} className={styles.button}>
					<CgErase size={35} />
				</button>
				<button onClick={toggleBall} className={styles.button}>
					<IoAmericanFootballOutline size={35} />
				</button>
				<button onClick={toggleDrawMode} className={styles.button}>
					{drawMode ? <TbPencilOff size={35} /> : <TbPencilPlus size={35} />}
				</button>
			</div>
		</div>
	);
};

export default WhiteBoard;
