import PropTypes from 'prop-types'
import Card from './shared/Card'


function ProjectCard({ title }) {
  return (
    <Card className='projectCard'>
      <strong>{title}</strong>
    </Card>
  )
}

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  // desc: PropTypes.string.isRequired,
}

export default ProjectCard
