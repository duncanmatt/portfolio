import ProjectCard from './ProjectCard';
import ghFinderPreview from '../layout/assets/ghFinderPreview.png';
import fbAppPreview from '../layout/assets/fbAppPreview.png';
import bswPreview from '../layout/assets/bswPreview.png';
import hmPreview from '../layout/assets/hmPreview.png';

function LatestDesktop() {
  const items = [
    {
      id: 1,
      title: 'GITHUB FINDER',
      desc: 'React app that gives users the ability to search for and view profiles on GitHub by making use of the GitHub API.',
      pic: `${ghFinderPreview}`,
      url: 'https://blacksheepworld.herokuapp.com'
    },
    {
      id: 2,
      title: "ECOMMERCE SITE",
      desc: 'Website made using the MERN stack for my friend in the process of starting a clothing brand.',
      pic: `${bswPreview}`,
      url: 'https://blacksheepworld.herokuapp.com'
    },
    {
      id: 3,
      title: 'FEEDBACK APP',
      desc: 'React app for leaving reviews that are stored with firebase',
      pic: `${fbAppPreview}`,
      url: 'https://blacksheepworld.herokuapp.com'
    },
    {
      id: 4,
      title: "HOUSE MARKETPLACE",
      desc: 'React app for posting or viewing real estate listings that are stored with firebase',
      pic: `${hmPreview}`,
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
