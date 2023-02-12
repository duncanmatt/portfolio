import PropTypes from 'prop-types';
import { Card } from 'antd';

const { Meta } = Card;

function ProjectCard({ project: { id, title, desc, pic, url } }) {
	return (
		<a href={url}>
			<Card
				key={id}
				hoverable
				bordered='true'
				cover={
					<img
						src={pic}
						alt={title}
						style={{ maxHeight: '300px', maxWidth: '300px' }}
					/>
				}
				style={{
					width: 300,
					height: 450,
					backgroundColor: '#fff',
				}}>
				<Meta
					title={title}
					description={desc}
				/>
			</Card>
		</a>
	);
}

ProjectCard.propTypes = {
	project: PropTypes.object.isRequired,
};

export default ProjectCard;
