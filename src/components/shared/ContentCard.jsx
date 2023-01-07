import PropTypes from 'prop-types'


function SkillCard({skill}) {
  return (
    <div className='skillCard'>
      {skill}
    </div>
  )
}

SkillCard.propTypes = {
  skill: PropTypes.node.isRequired,
}


export default SkillCard
