import PropTypes from 'prop-types';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import ProjectCard from '../ProjectCard';
import ghFinderPreview from '../../layout/assets/ghFinderPreview.png';
import fbAppPreview from '../../layout/assets/fbAppPreview.png';

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
];

function Carousel({ width, height, slides, slidesShown }) {
  return (
    <CarouselProvider
      naturalSlideWidth={width}
      naturalSlideHeight={height}
      totalSlides={slides}
      visibleSlides={slidesShown}>
      <Slider className='slider'>
        {items.map(item => (
          <Slide
            className='slide'
            index={item.id}
            key={item.id}>
            <ProjectCard project={item} />
          </Slide>
        ))}
      </Slider>
      <ButtonBack className='carouselBackBtn'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='currentColor'
          className='w-6 h-6'>
          <path
            fillRule='evenodd'
            d='M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-4.28 9.22a.75.75 0 000 1.06l3 3a.75.75 0 101.06-1.06l-1.72-1.72h5.69a.75.75 0 000-1.5h-5.69l1.72-1.72a.75.75 0 00-1.06-1.06l-3 3z'
            clipRule='evenodd'
          />
        </svg>
      </ButtonBack>
      <ButtonNext>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='currentColor'
          className='w-6 h-6'>
          <path
            fillRule='evenodd'
            d='M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z'
            clipRule='evenodd'
          />
        </svg>
      </ButtonNext>
    </CarouselProvider>
  );
}

Carousel.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  slides: PropTypes.number.isRequired,
  slidesShown: PropTypes.number.isRequired,
};

export default Carousel;
