import PropTypes from 'prop-types';
import { Card } from 'antd';
import DSAPic from '../layout/assets/dsa.jpg';

function ProjectCard({ project: { id, title, desc, pic } }) {
	return (
		<Card
			key={id}
			hoverable
      cover={<img
        className='projCardPic'
        src={pic}
        alt='pic'
      />}
			style={{
				width: 320,
				height: 420,
				backgroundColor: '#fff',
			}}>
			<div className='projCardContent'>
				<h3 className='projectCardTitle'>{title}</h3>
				<p className='projectCardDesc'>{desc}</p>
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
