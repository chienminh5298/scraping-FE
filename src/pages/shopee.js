import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { SocketContext } from 'src/context';
import 'src/scss/shopee.scss';
import shopee from 'src/images/shopee.png';
import { server_url } from 'src/helper/setting';
import * as action from 'src/actions';

const Shopee = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const socket = useContext(SocketContext);

	var [textInput, setTextInput] = useState({
		keyword: '',
		url: '',
	});

	const handleChange = (event) => {
		setTextInput({
			...textInput,
			[event.target.name]: event.target.value,
		});
	};

	const handleCategory = async (category) => {
		const data = {
			platform: 'shopee.vn',
			type: 'url',
			value: `https://shopee.vn/${category}`,
			room: socket.id,
			items: 0,
			file: undefined,
			status: 'scraping',
		};
		var result = await fetch(`${server_url}/download`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		});
		if (result.status === 200) {
			dispatch(action.add_task(data));
			navigate('/download');
		}
	};

	const handleUrlSubmit = async (event) => {
		event.preventDefault();
		if (textInput.url !== '') {
			const data = {
				platform: 'shopee.vn',
				type: 'url',
				value: textInput.url,
				room: socket.id,
				items: 0,
				file: undefined,
				status: 'scraping',
			};
			var result = await fetch(`${server_url}/download`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			});
			if (result.status === 200) {
				dispatch(action.add_task(data));
				navigate('/download');
			}
		}
	};

	const handleKeywordSubmit = async (event) => {
		event.preventDefault();
		if (textInput.keyword !== '') {
			const data = {
				platform: 'shopee.vn',
				type: 'keyword',
				value: textInput.keyword,
				room: socket.id,
				items: 0,
				file: undefined,
				status: 'scraping',
			};

			var result = await fetch(`${server_url}/download`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			});
			if (result.status === 200) {
				dispatch(action.add_task(data));
				navigate('/download');
			}
		}
	};
	return (
		<div id='shopee-page-container'>
			<div id='shopee-page-collect-search'>
				<h1>Scraping by "search"</h1>
				<img src={shopee} alt='Searching img' />
				<div id='searching-form'>
					<span>We can scraping by keyword you need to search. Just enter the information you are looking for in the first input below. Or you can copy the link of a certain discount program (as shown on the left) and paste it into the 2nd input box.</span>
					<span className='note-1'>If you see the message that 0 products were found, then either you entered the wrong url or your search value doesn't match.</span>
					<span className='note-2'>
						*A few search keyword can have thousands of results so scraping can take up to <strong>15-30</strong> minutes. Please be patient.
					</span>
					<form className='form' method='post' onSubmit={handleKeywordSubmit}>
						<input type='text' name='keyword' onChange={handleChange} placeholder='Search by keywords' />
						<button type='submit'>Submit</button>
					</form>
					<form id='url-form' className='form' method='post' onSubmit={handleUrlSubmit}>
						<input type='text' name='url' onChange={handleChange} placeholder='Search by URL' />
						<button type='submit'>Submit</button>
					</form>
				</div>
			</div>
			<div id='shopee-page-collect-category'>
				<h1>Or scraping by categories</h1>
				<div id='shopee-page-categories'>
					<div
						className='shopee-category'
						onClick={() => {
							handleCategory('Thời-Trang-Nam-cat.11035567');
						}}
					>
						<div className='shopee-category-icon'>
							<i className='icon fa-solid fa-person'></i>
						</div>
						<span>Men clothes</span>
					</div>
					<div
						className='shopee-category'
						onClick={() => {
							handleCategory('Thời-Trang-Nữ-cat.11035639');
						}}
					>
						<div className='shopee-category-icon'>
							<i className='icon fa-solid fa-person-dress'></i>
						</div>
						<span>Women clothes</span>
					</div>
					<div
						className='shopee-category'
						onClick={() => {
							handleCategory('Điện-Thoại-Phụ-Kiện-cat.11036030');
						}}
					>
						<div className='shopee-category-icon'>
							<i className='icon fa-solid fa-mobile'></i>
						</div>
						<span>Phone & accessories</span>
					</div>
					<div
						className='shopee-category'
						onClick={() => {
							handleCategory('Thiết-Bị-Điện-Tử-cat.11036132');
						}}
					>
						<div className='shopee-category-icon'>
							<i className='icon fa-solid fa-tv'></i>
						</div>
						<span>Electronic</span>
					</div>
					<div
						className='shopee-category'
						onClick={() => {
							handleCategory('Máy-Tính-Laptop-cat.11035954');
						}}
					>
						<div className='shopee-category-icon'>
							<i className='icon fa-solid fa-laptop'></i>
						</div>
						<span>PC & Laptop</span>
					</div>
					<div
						className='shopee-category'
						onClick={() => {
							handleCategory('Máy-Ảnh-Máy-Quay-Phim-cat.11036101');
						}}
					>
						<div className='shopee-category-icon'>
							<i className='icon fa-solid fa-camera'></i>
						</div>
						<span>Camera</span>
					</div>
					<div
						className='shopee-category'
						onClick={() => {
							handleCategory('Đồng-Hồ-cat.11035788');
						}}
					>
						<div className='shopee-category-icon'>
							<i className='icon fa-solid fa-clock'></i>
						</div>
						<span>Watch</span>
					</div>
					<div
						className='shopee-category'
						onClick={() => {
							handleCategory('Sắc-Đẹp-cat.11036279');
						}}
					>
						<div className='shopee-category-icon'>
							<i className='icon fa-solid fa-b'></i>
						</div>
						<span>Cosmetic</span>
					</div>
					<div
						className='shopee-category'
						onClick={() => {
							handleCategory('Sức-Khỏe-cat.11036345');
						}}
					>
						<div className='shopee-category-icon'>
							<i className='icon fa-solid fa-heart'></i>
						</div>
						<span>Health</span>
					</div>
					<div
						className='shopee-category'
						onClick={() => {
							handleCategory('Ô-Tô-Xe-Máy-Xe-Đạp-cat.11036793');
						}}
					>
						<div className='shopee-category-icon'>
							<i className='icon fa-solid fa-car-side'></i>
						</div>
						<span>Car & bike</span>
					</div>
					<div
						className='shopee-category'
						onClick={() => {
							handleCategory('Thể-Thao-Du-Lịch-cat.11035478');
						}}
					>
						<div className='shopee-category-icon'>
							<i className='icon fa-solid fa-plane'></i>
						</div>
						<span>Sport & travel</span>
					</div>
					<div
						className='shopee-category'
						onClick={() => {
							handleCategory('Đồ-Chơi-cat.11036932');
						}}
					>
						<div className='shopee-category-icon'>
							<i className='icon fa-solid fa-gamepad'></i>
						</div>
						<span>Toys</span>
					</div>
					<div
						className='shopee-category'
						onClick={() => {
							handleCategory('Chăm-Sóc-Thú-Cưng-cat.11036478');
						}}
					>
						<div className='shopee-category-icon'>
							<i className='icon fa-solid fa-cat'></i>
						</div>
						<span>Pet</span>
					</div>
					<div
						className='shopee-category'
						onClick={() => {
							handleCategory('Voucher-Dịch-Vụ-cat.11035898');
						}}
					>
						<div className='shopee-category-icon'>
							<i className='icon fa-solid fa-ticket'></i>
						</div>
						<span>Voucher</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Shopee;
