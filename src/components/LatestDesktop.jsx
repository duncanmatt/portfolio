import ProjectCard from './ProjectCard';
import ghFinderPreview from '../layout/assets/ghFinderPreview.png';
import fbAppPreview from '../layout/assets/fbAppPreview.png';
import bswPreview from '../layout/assets/bswPreview.png'

function LatestDesktop() {
  const items = [
    {
      id: 1,
      title: 'GitHub Finder',
      desc: 'description',
      pic: `${ghFinderPreview}`,
      url: 'https://blacksheepworld.herokuapp.com'
    },
    {
      id: 2,
      title: "Marcus' Fullstack",
      desc: 'eCommerce website made with React and Express, newsletter and user information is collected with MongoDB',
      pic: `${bswPreview}`,
      url: 'https://blacksheepworld.herokuapp.com'
    },
    {
      id: 3,
      title: 'Feedback App',
      desc: 'React app for leaving reviews that are stored with firebase',
      pic: `${fbAppPreview}`,
      url: 'https://blacksheepworld.herokuapp.com'
    },
    {
      id: 5,
      title: "House Marketplace",
      desc: 'React app for posting or viewing real estate listings that are stored with firebase',
      url: 'https://blacksheepworld.herokuapp.com'
    },
  ];

  return (
    <div className='latest-lg'>
      {items.map((item) => (
          <ProjectCard key={item.id} project={item} />
      ))}
    </div>
  );
}

export default LatestDesktop;
