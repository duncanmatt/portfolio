
import { useMediaQuery } from 'react-responsive';
import SkillsMobile from '../components/SkillsMobile';
import SkillsDesktop from '../components/SkillsDesktop';


function Intro() {
  // change introSkills grid depending on viewport
  const isDesktop = useMediaQuery({ query: '(min-width: 1000px)' })




 


  return (
    <div className='intro'>
      <div className='introContentBG'>
        <div className='introContent'>
          <h3 className="briefAbout">
            Hello! I'm Matt Duncan, a self-taught React developer currently located in northern Virginia.
          </h3>
          {isDesktop ? <SkillsDesktop /> : <SkillsMobile /> }

        </div>
      </div>
    </div>
    
    
    
  )
}

export default Intro
