import { useState } from 'react';
// import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { default as Initials } from './assets/initials.svg';
import {
	RedditOutlined,
	LinkedinOutlined,
	GithubOutlined,
	MenuOutlined,
	CloseOutlined,
	RightOutlined,
} from '@ant-design/icons';

function MobileHeader({ links }) {
	const [menuOpen, setMenuOpen] = useState(false);
	const showMenu = () => setMenuOpen(!menuOpen);

	return (
		<>
			{menuOpen ? (
				<div className='menuWrapper'>
					<div className='menuUpperContent'>
						<CloseOutlined onClick={showMenu} />
					</div>
					<div className='menuLowerContent'>
						<span className='menuLinks'>
							{links.map(link => (
								<a
									key={link.id}
									href={link.url}
									className='menuLink'
									onClick={showMenu}>
									<div>
										{link.icon} {link.title}
									</div>
									<RightOutlined style={{ alignSelf: 'flex-end' }} />
								</a>
							))}
						</span>
					</div>
				</div>
			) : (
				<div className='mobileHeader'>
					<h1 className='mobileHeaderName'>Matt Duncan</h1>
					<MenuOutlined
						onClick={showMenu}
						style={{ paddingInline: '0 1rem', fontSize: '1.2em' }}
					/>
				</div>
			)}
		</>
	);
}

function DesktopHeader({ links }) {
	return (
		<div className='desktopHeader'>
			<h1 className='desktopHeaderName'>Matt Duncan</h1>
			<img
				src={Initials}
				alt='initials'
				className='headerInitials'
			/>
			<span className='right'>
				{links.map(link => (
					<a
						key={link.id}
						href={link.url}
						className='header-link'>
						{link.icon}
					</a>
				))}
			</span>
		</div>
	);
}

function Navbar() {
	const links = [
		{
			id: 0,
			title: 'Linkedin',
			url: 'https://www.linkedin.com/in/matthew-duncan-bb8757209',
			icon: <LinkedinOutlined />,
		},
		{
			id: 1,
			title: 'GitHub',
			url: 'https://github.com/duncanmatt',
			icon: <GithubOutlined />,
		},
		{
			id: 2,
			title: 'Reddit',
			url: 'https://www.reddit.com/user/marriedtomdn',
			icon: <RedditOutlined />,
		},
	];
	const isMobile = useMediaQuery({ query: '(max-width: 600px)' });

	return (
		<header>
			{isMobile ? (
				<MobileHeader links={links} />
			) : (
				<DesktopHeader links={links} />
			)}
		</header>
	);
}

export default Navbar;
