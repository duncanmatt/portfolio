import PropTypes from 'prop-types';
import Card from './shared/Card';
import DSAPic from '../layout/assets/dsa.jpg';

function ProjectCard({ project: { title, desc, pic } }) {
  return (
    <Card>
      <div className='projCard'>
        <div className='projCardImg'>
          <img
            className='projCardPic'
            src={pic}
            alt='pic'
          />
        </div>
        <div className='projCardContent'>
          <h3 className='projectCardTitle'>{title}</h3>
          <p className='projectCardDesc'>{desc}</p>
        </div>
      </div>
    </Card>
  );
}

ProjectCard.defaultProps = {
  pic: `${DSAPic}`,
};

ProjectCard.propTypes = {
  project: PropTypes.object.isRequired,
};

export default ProjectCard;
