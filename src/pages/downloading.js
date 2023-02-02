import React from 'react';
import { Link } from 'react-router-dom';

import 'src/scss/downloading.scss';

const Downloading = () => {
	return (
		<div id='download-page-container'>
			<h1>Scraping ...</h1>
			<h1>
				Click <Link to='/your-files'>here</Link> to view your files.
			</h1>
			<div id='download-page-loading-icon'>
				<i className='gear fa-solid fa-gear'></i>
			</div>
		</div>
	);
};

export default Downloading;
