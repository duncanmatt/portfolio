import PropTypes from 'prop-types';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

function Carousel({ height, width, slides, children }) {
  return (
    <CarouselProvider
      naturalSlideHeight={height}
      naturalSlideWidth={width}
      totalSlides={slides}>
      <Slider>{children}</Slider>
      <ButtonBack>Back</ButtonBack>
      <ButtonNext>Next</ButtonNext>
    </CarouselProvider>
  );
}

Carousel.propTypes = {
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  slides: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
};

export default Carousel;
