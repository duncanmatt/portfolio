
import Carousel from './shared/Carousel';
import bswPreview from '../layout/assets/bswPreview.png';
import ghFinderPreview from '../layout/assets/ghFinderPreview.png';
import fbAppPreview from '../layout/assets/fbAppPreview.png';

function LatestMobile() {

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
			pic: `${bswPreview}`
		},
		{
			id: 3,
			title: 'Feedback App',
			desc: 'React app for leaving reviews that are stored with firebase',
			pic: `${fbAppPreview}`,
		},
		{
			id: 5,
			title: "House Marketplace",
			desc: 'React app for posting or viewing real estate listings that are stored with firebase',
		},
	];

	return (
		<div className='carouselWrapper'>
			<Carousel items={items}/>
		</div>
	);
}

export default LatestMobile;
