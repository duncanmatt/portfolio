import { useState } from 'react';
import { Link } from 'react-router-dom';
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

// TODO: max-width: 600px make links accessable through burger menu and remove border radius from intro pic

function MobileHeader() {
	const [menuOpen, setMenuOpen] = useState(false);
	const showMenu = () => setMenuOpen(!menuOpen);

	const links = [
		{
			id: 0,
			title: 'Linkedin',
			url: '',
		},
		{
			id: 1,
			title: 'GitHub',
			url: 'https://github.com/duncanmatt',
		},
		{
			id: 2,
			title: 'Reddit',
			url: '',
		},
	];

	return (
		<div className='mobileHeader'>
			{menuOpen ? (
				<div className='menu-content'>
					<div className='menu-upper-wrapper'>
						<strong style={{ alignSelf: 'flex-start' }}>Black Sheep</strong>

						<CloseOutlined
							style={{ alignSelf: 'flex-end' }}
							onClick={showMenu}
						/>
					</div>
					<hr />
					<div className='menu-lower-wrapper'>
						<ul className='menu-links'>
							{links.map(link => (
								<a href={link.url}>
									<li
										key={link.id}
										className='menu-link'
										onClick={showMenu}>
										{link.title}
										<RightOutlined style={{ alignSelf: 'flex-end' }} />
									</li>
								</a>
							))}
						</ul>
					</div>
				</div>
			) : (
				<div className='headerClosed'>
					<h1 className='mobileHeaderName'>Matt Duncan</h1>
					<MenuOutlined onClick={showMenu} />
				</div>
			)}
		</div>
	);
}

function DesktopHeader() {
	return (
		<div className='desktopHeader'>
			<h1 className='desktopHeaderName'>Matt Duncan</h1>
			<img
				src={Initials}
				alt='initials'
				className='headerInitials'
			/>
			<span className='right'>
				<LinkedinOutlined
					style={{
						fontSize: '1.6rem',
					}}
				/>
				<GithubOutlined
					style={{
						fontSize: '1.6rem',
					}}
				/>
				<RedditOutlined
					style={{
						fontSize: '1.6rem',
					}}
				/>
			</span>
		</div>
	);
}

function Navbar() {
	const isMobile = useMediaQuery({ query: '(max-width: 600px)' });

	return (
		<header className='pageHeader'>
			{isMobile ? <MobileHeader /> : <DesktopHeader />}
		</header>
	);
}

export default Navbar;
