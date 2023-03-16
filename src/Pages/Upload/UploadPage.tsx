import { PageHeader } from 'Components';
import { Document, Page, pdfjs } from 'react-pdf';
import globalStyles from 'Styles/global.module.scss';
import { RiVideoUploadFill } from 'react-icons/ri';
import { FaFileUpload } from 'react-icons/fa';
import styles from './UploadPage.module.scss';
import { useEffect, useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import cn from 'classnames';

const UploadPage = () => {
	const [numPages, setNumPages] = useState<number>();
	const [file, setFile] = useState<Blob | undefined>();
	const [videoFile, setVideoFile] = useState<Blob | undefined>();

	const videoRef = useRef<HTMLInputElement>(null);
	const fileRef = useRef<HTMLInputElement>(null);

	const [pageNumber, setPageNumber] = useState(1);

	function onDocumentLoadSuccess({ numPages: newPagesNb }: { numPages: number }) {
		setNumPages(newPagesNb);
		const textLayers = document.querySelectorAll('.react-pdf__Page__textContent textLayer');
		textLayers.forEach((layer) => {
			layer.setAttribute('style', 'top: 0; left: 0; transform: none;');
		});
	}

	const setBlobVideoFile = (file: Blob) => {
		setVideoFile(file);
	};

	const setBlobPdfFile = (file: Blob) => {
		setFile(file);
	};

	useEffect(() => {
		// pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
		pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;
	}, []);

	// function that creates a blob from file and set it as state
	// function that creates a blob from file and set it as state
	const handleFileChange = (
		e: React.ChangeEvent<HTMLInputElement>,
		changeFn: (file: Blob) => void
	) => {
		const newFile = e.target.files?.[0];
		if (newFile) {
			const reader = new FileReader();
			reader.onload = (e) => {
				const buffer = e.target?.result;
				if (buffer) {
					const blob = new Blob([new Uint8Array(buffer as ArrayBuffer)], {
						type: newFile.type,
					});
					changeFn(blob);
				}
			};
			reader.readAsArrayBuffer(newFile);
		}
	};

	return (
		<div>
			<PageHeader title="Mise en ligne" hasBtns />
			<div className={cn(styles.container, globalStyles.pageContainer)}>
				<div className={globalStyles.card}>
					<div>
						<p className={styles.sectionTitle}>Importez la vidéo d'un match ici</p>
						{videoFile && (
							<ReactPlayer
								className={styles.pdf}
								url={videoFile ? URL.createObjectURL(videoFile) : ''}
								width="auto"
								height={360}
								controls={true}
							/>
						)}
						<button className={styles.button} onClick={() => videoRef.current?.click()}>
							<RiVideoUploadFill size={48} fill="#fff" />
						</button>
						<input
							type="file"
							ref={videoRef}
							style={{ display: 'none' }}
							typeof="video/*"
							accept="video/*"
							onChange={(e) => handleFileChange(e, setBlobVideoFile)}
						/>
					</div>
					<div className={styles.separator} />
					<div>
						<p className={styles.sectionTitle}>Importez la fiche de match correspondante ici</p>
						{file && (
							<>
								<Document file={file ? file : ''} onLoadSuccess={onDocumentLoadSuccess}>
									<Page
										pageNumber={pageNumber}
										renderTextLayer={false}
										renderAnnotationLayer={false}
										className={styles.pdf}
										height={500}
									/>
								</Document>
								<p>
									Page {pageNumber} of {numPages}
								</p>
							</>
						)}
						<button className={styles.button} onClick={() => fileRef.current?.click()}>
							<FaFileUpload size={48} fill="#fff" />
						</button>
						<input
							type="file"
							ref={fileRef}
							style={{ display: 'none' }}
							onChange={(e) => handleFileChange(e, setBlobPdfFile)}
							typeof="application/pdf"
							accept="application/pdf"
						/>
					</div>
					<button className={styles.button}>Confirmer l'envoi</button>
				</div>
			</div>
		</div>
	);
};

export default UploadPage;
