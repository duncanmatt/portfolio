import Carousel from './shared/Carousel';
import ProjectCard from './ProjectCard';

function LatestMobile() {
  return (
    <div className='latest-carousel'>
      <Carousel
        height={400}
        width={300}
        slides={1}>
        <ProjectCard
          title='GitHub Finder'
          desc='description'
        />
        <ProjectCard
          title='Tic Tac Toe'
          desc='description'
        />
        <ProjectCard
          title='Feedback App'
          desc='description'
        />
        <ProjectCard
          title='Full Stack MERN App'
          desc='description'
        />
        <ProjectCard
          title='Etch a Sketch'
          desc='description'
        />
      </Carousel>
    </div>
  );
}

export default LatestMobile;
