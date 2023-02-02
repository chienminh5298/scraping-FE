import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';

import 'src/scss/files.scss';
import empty from 'src/images/nothing.png';
import { server_url } from 'src/helper/setting';

const Files = () => {
	let files = useSelector((state) => state.taskReducer);
	let renderFiles = <img id='empty' src={empty} alt='empty' />;
	if (files.length !== 0) {
		renderFiles = files.map((file, index) => {
			let status = <span id='status-scraping'>Scraping ...</span>;
			if (file.status === 'prepair') {
				if (file.file === undefined) {
					status = <span id='status-embed'>Your file will be finished in a few minutes.</span>;
				} else status = '';
			}
			let gear_or_file = file.file ? <i className='fa-solid fa-file'></i> : <i className='gear fa-solid fa-gear'></i>;
			let download_button = file.file ? (
				<Fragment>
					<span>
						Found <strong>{file.items}</strong> items
					</span>
					<a href={`${server_url}/files?id=${file.file}`}>Download</a>
				</Fragment>
			) : (
				<span>
					Found <strong>{file.items}</strong> items
				</span>
			);
			return (
				<div className='download-block' key={index}>
					{gear_or_file}
					<div className='download-info'>
						<span className='download-platform'>{file.platform.toUpperCase()}</span>
						<span className='download-search-by'>Search by "{file.value}"</span>
					</div>
					<div className='download-status'>{status}</div>
					<div className='download-button'>{download_button}</div>
				</div>
			);
		});
	}

	return (
		<div id='file-page-container'>
			<h1>Your files are here.</h1>
			{renderFiles}
		</div>
	);
};

export default Files;
