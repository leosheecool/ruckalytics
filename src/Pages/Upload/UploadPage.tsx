import { PageHeader } from 'Components';
import { Document, Page, pdfjs } from 'react-pdf';
import globalStyles from 'Styles/global.module.scss';
import { RiVideoUploadFill } from 'react-icons/ri';
import { FaFileUpload } from 'react-icons/fa';
import styles from './UploadPage.module.scss';
import { useEffect, useRef, useState } from 'react';

const UploadPage = () => {
	const [numPages, setNumPages] = useState<number>();
	const [file, setFile] = useState<Blob | undefined>();
	const [videoFile, setVideoFile] = useState<Blob | undefined>();

	const videoRef = useRef<HTMLInputElement>(null);
	const fileRef = useRef<HTMLInputElement>(null);

	const [pageNumber, setPageNumber] = useState(1);

	function onDocumentLoadSuccess({ numPages: newPagesNb }: { numPages: number }) {
		setNumPages(newPagesNb);
	}

	useEffect(() => {
		pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
	});

	// function that creates a blob from file and set it as state
	// function that creates a blob from file and set it as state
	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newFile = e.target.files?.[0];
		if (newFile) {
			const reader = new FileReader();
			reader.onload = (e) => {
				const buffer = e.target?.result;
				if (buffer) {
					const blob = new Blob([new Uint8Array(buffer as ArrayBuffer)], {
						type: newFile.type,
					});
					setFile(blob);
				}
			};
			reader.readAsArrayBuffer(newFile);
		}
	};
	const handleVideoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newFile = e.target.files?.[0];
		if (newFile) {
			const reader = new FileReader();
			reader.onload = (e) => {
				const buffer = e.target?.result;
				if (buffer) {
					const blob = new Blob([new Uint8Array(buffer as ArrayBuffer)], {
						type: newFile.type,
					});
					setFile(blob);
				}
			};
			reader.readAsArrayBuffer(newFile);
		}
	};

	return (
		<div>
			<PageHeader title="Upload" />
			<div className={styles.container}>
				<div className={globalStyles.card}>
					<p className={styles.sectionTitle}>Importez la vidéo d'un match ici</p>
					<button className={styles.button} onClick={() => videoRef.current?.click()}>
						<RiVideoUploadFill size={48} fill="#fff" />
					</button>
					<input
						type="file"
						ref={videoRef}
						style={{ display: 'none' }}
						onChange={handleVideoChange}
					/>
					<div className={styles.separator} />
					<p className={styles.sectionTitle}>Importez la fiche de match correspondante ici</p>
					<Document
						file={file ? file : 'https://arxiv.org/pdf/quant-ph/0410100.pdf'}
						onLoadSuccess={onDocumentLoadSuccess}
					>
						<Page pageNumber={pageNumber} />
					</Document>
					<p>
						Page {pageNumber} of {numPages}
					</p>
					<button className={styles.button} onClick={() => fileRef.current?.click()}>
						<FaFileUpload size={48} fill="#fff" />
					</button>
					<input
						type="file"
						ref={fileRef}
						style={{ display: 'none' }}
						onChange={handleFileChange}
					/>
				</div>
			</div>
		</div>
	);
};

export default UploadPage;
