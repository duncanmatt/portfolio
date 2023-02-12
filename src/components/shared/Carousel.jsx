import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import bswPreview from '../../layout/assets/bswPreview.png';
import ghFinderPreview from '../../layout/assets/ghFinderPreview.png';
import fbAppPreview from '../../layout/assets/fbAppPreview.png';
import hmPreview from '../../layout/assets/hmPreview.png';
import ProjectCard from '../ProjectCard';

import { RightOutlined, LeftOutlined } from '@ant-design/icons';

function CarouselSmall({ items }) {
	const [activeItem, setActiveItem] = useState(1);

	const nextItem = () => {
		setActiveItem(activeItem === items.length ? 1 : activeItem + 1);
	};

	const prevItem = () => {
		setActiveItem(activeItem === 1 ? items.length : activeItem - 1);
	};

	return (
		<div className='carouselSmall'>
			<div className='upper'>
				<h2>Latest</h2>
				<button
					className='carouselPrev'
					onClick={prevItem}>
					<LeftOutlined />
				</button>
				<button
					className='carouselNext'
					onClick={nextItem}>
					<RightOutlined />
				</button>
			</div>
			<div className='lower'>
				<div className='carouselInner'>
					{items.map(item => (
						<div
							key={item.id}
							className={
								item.id !== activeItem ? 'carouselItem' : 'carouselItemActive'
							}>
							<ProjectCard project={item} />
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

function CarouselLarge({ items }) {
	const [activeItem, setActiveItem] = useState(1);

	const nextItem = () => {
		setActiveItem(activeItem === items.length ? 1 : activeItem + 1);
	};

	const prevItem = () => {
		setActiveItem(activeItem === 1 ? items.length : activeItem - 1);
	};

	return (
		<div className='carouselLarge'>
			<h2>Latest</h2>
			<div className='carousel'>
				<button
					className='carouselPrev'
					onClick={prevItem}>
					<LeftOutlined />
				</button>
				<div className='carouselInner'>
					{items.map(item => (
						<div
							key={item.id}
							className={
								item.id !== activeItem ? 'carouselItem' : 'carouselItemActive'
							}>
							<ProjectCard project={item} />
						</div>
					))}
				</div>
				<button
					className='carouselNext'
					onClick={nextItem}>
					<RightOutlined />
				</button>
			</div>
		</div>
	);
}

function Carousel() {
	const isSmall = useMediaQuery({ query: '(max-width: 400px)' });

	const items = [
		{
			id: 1,
			title: 'GitHub Finder',
			desc: 'Search for GitHub profiles using axios and the GitHub API, styles with tailwind and DaisyUI',
			pic: `${ghFinderPreview}`,
		},
		{
			id: 2,
			title: "Marcus' Fullstack",
			desc: 'eCommerce website made with React and Express, newsletter and user information is collected with MongoDB',
			pic: `${bswPreview}`,
		},
		{
			id: 3,
			title: 'Feedback App',
			desc: 'React app for leaving reviews that are stored with firebase',
			pic: `${fbAppPreview}`,
		},
		{
			id: 4,
			title: 'House Marketplace',
			desc: 'React app for posting or viewing real estate listings that are stored with firebase',
			pic: `${hmPreview}`,
		},
	];

	return (
		<>
			{isSmall ? (
				<CarouselSmall items={items} />
			) : (
				<CarouselLarge items={items} />
			)}
		</>
	);
}

Carousel.propTypes = {};

export default Carousel;
