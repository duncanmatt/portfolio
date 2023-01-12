import Carousel from './shared/Carousel';

function LatestMobile() {
  return (
    <div className='carouselWrapper'>
      <Carousel
        width={329}
        height={420}
        slides={5}
        slidesShown={1}
      />
    </div>
  );
}

export default LatestMobile;
