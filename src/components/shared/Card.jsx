import PropTypes from 'prop-types';


function Card({ children }) {
	return (
		<div
			style={{
				marginRight: '1rem',
			}}
			className='cardWrapper'>
			{children}
		</div>
	);
}

Card.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Card;
