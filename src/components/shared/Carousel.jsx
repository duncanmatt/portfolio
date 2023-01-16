import { useState } from 'react';

import ProjectCard from '../ProjectCard';
import CertCard from '../CertCard';

import { RightOutlined, LeftOutlined } from '@ant-design/icons';

function Carousel({ items }) {
	const [activeItem, setActiveItem] = useState(1);

	const nextItem = () => {
		setActiveItem(activeItem === items.length ? 1 : activeItem + 1);
	};

	const prevItem = () => {
		setActiveItem(activeItem === 1 ? items.length : activeItem - 1);
	};

	return (
		<div className='carousel'>
			<div className='carouselInner'>
				{items.map(item => (
					<div
						key={item.id}
						className={
							item.id !== activeItem ? 'carouselItem' : 'carouselItemActive'
						}>
						{items.length === 5 ? (
							<ProjectCard project={item} />
						) : (
							<CertCard cert={item} />
						)}
					</div>
				))}
			</div>
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
	);
}

Carousel.propTypes = {};

export default Carousel;
