

function IntroDesktop() {
	const title = `
    Hello! I'm Matt Duncan, a self-taught React developer from northern Virginia.
  `;

	return (
		<div
			className='introContent'
			style={{
				gridTemplateColumns: 'repeat(1, 1fr)',
				textAlign: 'center',
			}}>
			<h2
				className='briefAbout'
				style={{
					fontSize: '3rem',
					marginInlineStart: '2rem',
					marginBlockStart: '2rem',
				}}>
				{title}
			</h2>
		
		
		</div>
	);
}

export default IntroDesktop;
