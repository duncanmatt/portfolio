import Carousel from './shared/Carousel';
import ghFinderPreview from '../layout/assets/ghFinderPreview.png'
import fbAppPreview from '../layout/assets/fbAppPreview.png'

function LatestMobile() {
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
      desc: 'eCommerce website made with React and Express',
    },
    {
      id: 3,
      title: 'Feedback App',
      desc: 'React app for leaving reviews that are stored with firebase',
      pic: `${fbAppPreview}`,
    },
    {
      id: 4,
      title: 'Fullstack MERN App',
      desc: 'description',
    },
    {
      id: 5,
      title: "Kalin's fullstack",
      desc: 'eCommerce website made with React and Express',
    },
  ]

  return (
    <div className='carouselWrapper'>
      <Carousel items={items}/>
    </div>
  );
}

export default LatestMobile;
