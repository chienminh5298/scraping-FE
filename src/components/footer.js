import React from 'react';

import 'src/scss/footer.scss';

const Footer = () => {
	return (
		<div id='app-footer'>
			<div id='footer-contact'>
				<h2>Contact me at -</h2>
				<div>
					<span>chienminh5298@gmail.com</span>
					<span>+1(561)-255-4297</span>
				</div>
			</div>
			<div id='footer-follow'>
				<h2>Follow me on -</h2>
				<div>
					<a href='#' target='_blank'>
						Linkedin
					</a>
					<a href='#' target='_blank'>
						Github
					</a>
					<a href='#' target='_blank'>
						Instagram
					</a>
				</div>
			</div>
		</div>
	);
};

export default Footer;
