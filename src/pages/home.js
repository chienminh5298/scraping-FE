import React from 'react';
import { Link } from 'react-router-dom';

import 'src/scss/home.scss';
import shopee from 'src/images/shopee.jpg';
import excel from 'src/images/excel.png';

const Home = () => {
	return (
		<div id='home-page-container'>
			<div id='home-page-intro'>
				<h2>Hi there,</h2>
				<span>
					This is a project to scraping products from major e-commerce platforms. The system will automatically list products with factors such as product name, link, discount percentage, old price, new price, ... and export to a file in <strong>XLSX</strong> format. Once you have finished downloading, please manually align the format to your liking.
				</span>
				<div id='intro-tech'>
					<span>Some libraries we use in the project:</span>
					<div id='list-tech'>
						<span>Socket.io</span>
						<span>Puppeteer</span>
						<span>ExpressJS</span>
						<span>ReactJS</span>
						<span>Redux</span>
					</div>
				</div>
			</div>
			<div id='home-page-img'>
				<img src={excel} alt='XLSX image example' />
			</div>
			<div id='platform-container'>
				<h1>Platform:</h1>
				<div id='platform'>
					<div className='platform'>
						<Link to='/shopee'>
							<img src={shopee} alt='shopee.vn' />
							<span>Shopee.vn</span>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
