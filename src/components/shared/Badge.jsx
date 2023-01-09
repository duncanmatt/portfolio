import PropTypes from 'prop-types'


function Badge({skill}) {
  return (
    <div className='skillBadge'>
      {skill}
    </div>
  )
}

Badge.propTypes = {
  skill: PropTypes.string.isRequired,
}


export default Badge
