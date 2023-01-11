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
    desc: 'description',
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
      <ButtonBack className='carouselBackBtn'>Back</ButtonBack>
      <ButtonNext className='carouselNextBtn'>Next</ButtonNext>
    </CarouselProvider>
  );
}

Carousel.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  slides: PropTypes.number.isRequired,
  slidesShown: PropTypes.number.isRequired
};

export default Carousel;
