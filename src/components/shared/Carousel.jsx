import PropTypes from 'prop-types';

function Carousel({ children }) {
  return (
    <>
      <div style={{
        display: 'flex',
          
      }}
      >
        {children}
      </div>
    </>
  );
}

Carousel.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Carousel;
