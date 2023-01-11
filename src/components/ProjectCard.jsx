import PropTypes from 'prop-types';
import Card from './shared/Card';
import DSAPic from '../layout/assets/dsa.jpg'

function ProjectCard({ project: {title, desc, pic} }) {
  return (
    <Card>
      <div className='projCard'>
        <img
          className='projCardPic'
          src={pic}
          alt='pic'
        />
        <strong className='projectCardTitle'>{title}</strong>
        <p className='projectCardDesc'>{desc}</p>
      </div>
    </Card>
  );
}

ProjectCard.defaultProps = {
  pic: `${DSAPic}`,
};

ProjectCard.propTypes = {
  project: PropTypes.object.isRequired
};

export default ProjectCard;
