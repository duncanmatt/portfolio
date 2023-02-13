import { useState } from 'react';
import ProjectCard from './ProjectCard';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

function SmCarousel({ items }) {
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

export default SmCarousel;
