import { useMediaQuery } from 'react-responsive';

function IntroDesktop() {
	const title = `
    Hello! I'm Matt Duncan, self-taught React developer from northern Virginia.
  `;

	const isLarge = useMediaQuery({ query: '(min-width: 1600px)' });

	return (
		<div className='introWrapper'>
			{!isLarge ? (
				<div
					className='introContent'
					style={{
						gridTemplateColumns: 'repeat(1, 1fr)',
						textAlign: 'center',
					}}>
					<p className='briefAbout'>{title}</p>
				</div>
			) : (
				<>
					<div className='introContent'></div>
					<p className='briefAbout'>{title}</p>
				</>
			)}
		</div>
	);
}

export default IntroDesktop;
