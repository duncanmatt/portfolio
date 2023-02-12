import React from 'react';

function IntroMoboile() {
	const title = `
    Hello! I'm Matt Duncan, a self-taught React developer from northern Virginia.
  `;

	return (
		<div className='introContent'>
			<p className='briefAbout'>{title}</p>
		</div>
	);
}

export default IntroMoboile;
