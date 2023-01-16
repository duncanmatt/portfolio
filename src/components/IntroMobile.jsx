import React from 'react';
import Badge from './shared/Badge';

function SkillsMobile() {
	const title = `
    Hello! I'm Matt Duncan, a self-taught React developer from northern Virginia.
  `;

	return (
		<div
			className='introContent'
			style={{
				gridTemplateRows: 'repeat(2, 1fr)',
			}}>
			<p
				className='briefAbout'
				style={{
					fontSize: 'clamp(24px, 2.6rem, 36px)',
					marginInlineStart: '2rem',
					marginInlineEnd: '1rem',
					marginBlockStart: '3rem',
				}}>
				{title}
			</p>
				<div
					className='introSkills'
					style={{
						rowGap: '20px',
						columnGap: '1rem',

						alignContent: 'space-between',
						fontSize: '1.6rem',
					}}>
					<Badge skill='HTML' />
					<Badge skill='CSS' />
					<Badge skill='JavaScript' />
					<Badge skill='DSA' />
					<Badge skill='React' />
					<Badge skill='Node' />
					<Badge skill='Figma' />
				</div>
		
		</div>
	);
}

export default SkillsMobile;
