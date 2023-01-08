
import { useMediaQuery } from 'react-responsive';
import IntroMobile from '../components/IntroMobile';
import IntroDesktop from '../components/IntroDesktop';


function Intro() {
  // change introSkills grid depending on viewport
  const isDesktop = useMediaQuery({ query: '(min-width: 600px)' })




 

  
  return (
    <div className='intro'>
      <div className='introContentBG'>
        {isDesktop ? <IntroDesktop /> : <IntroMobile /> }
      </div>
    </div>
    
    
    
  )
}

export default Intro
