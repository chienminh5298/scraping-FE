import React, { useEffect } from 'react';

import 'src/scss/loading.scss';
import $ from 'jquery';

const Loading = () => {
	useEffect(() => {
		var count = 0;
		$('.letter').each((ind, obj) => {
			setTimeout(() => {
				$(obj).css('animation', 'blur 2s linear alternate infinite');
			}, count);
			count += 400;
		});
	}, []);
	return (
		<div id='loading-container'>
			<div id='loading_animation'>
				<div className='letter'>L</div>
				<div className='letter'>O</div>
				<div className='letter'>A</div>
				<div className='letter'>D</div>
				<div className='letter'>I</div>
				<div className='letter'>N</div>
				<div className='letter'>G</div>
				<div className='letter'>.</div>
				<div className='letter'>.</div>
				<div className='letter'>.</div>
			</div>
		</div>
	);
};

export default Loading;
