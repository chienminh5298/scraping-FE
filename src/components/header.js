import React from 'react';

import 'src/scss/header.scss';
import { Link } from 'react-router-dom';
import logo from 'src/images/logo-black.png';

const Header = () => {
	return (
		<div id='app-header'>
			<div id='header-logo'>
				<Link to='/'>
					<img src={logo} alt='header-logo' />
				</Link>
			</div>
			<div id='your-files-button'>
				<Link to='/your-files'>Your files</Link>
			</div>
		</div>
	);
};

export default Header;
