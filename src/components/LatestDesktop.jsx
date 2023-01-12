import ProjectCard from './ProjectCard';
import ghFinderPreview from '../layout/assets/ghFinderPreview.png';
import fbAppPreview from '../layout/assets/fbAppPreview.png'

function LatestDesktop() {
  const items = [
    {
      id: 1,
      title: 'GitHub Finder',
      desc: 'description',
      pic: `${ghFinderPreview}`,
    },
    {
      id: 2,
      title: "Marcus' Fullstack",
      desc: 'description',
      pic: ''
    },
    {
      id: 3,
      title: 'Feedback App',
      desc: 'description',
      pic: `${fbAppPreview}`
    },
    {
      id: 4,
      title: 'Fullstack MERN App',
      desc: 'description',
    },
    {
      id: 5,
      title: "Kalin's fullstack",
      desc: 'description',
    },
  ];

  return (
    <div className='latest-lg'>
      {items.map(item => (
          <ProjectCard key={item.id} project={item} />
      ))}
    </div>
  );
}

export default LatestDesktop;
