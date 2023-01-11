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

function Carousel({width, height, slides}) {
  const items = [
    {
      id: 1,
      title: 'GitHub Finder',
      desc: 'description',
    },
    {
      id: 2,
      title: "Marcus' Fullstack",
      desc: 'description',
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
      desc: 'description',
    },
  ];

  return (
    <CarouselProvider
      naturalSlideWidth={width}
      naturalSlideHeight={height}
      totalSlides={slides}>
      <Slider className='slider'>
        {items.map(item => (
          <Slide index={item.id} key={item.id}>
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
};

export default Carousel;
