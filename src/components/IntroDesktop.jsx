function IntroDesktop() {
	const title = `
    Hello! I'm Matt Duncan, self-taught React developer from northern Virginia.
  `;

	return (
		<>
			<div
				className='introContent'
				style={{
					gridTemplateColumns: 'repeat(1, 1fr)',
					textAlign: 'center',
				}}>
				<p className='briefAbout'>{title}</p>
			</div>
		</>
	);
}

export default IntroDesktop;
