
import { useMediaQuery } from 'react-responsive';
import IntroMobile from '../components/IntroMobile';
import IntroDesktop from '../components/IntroDesktop';


function Intro() {
  // change introSkills grid depending on viewport
  const isDesktop = useMediaQuery({ query: '(min-width: 800px)' })




 

  
  return (
    <div className='intro'>
        {isDesktop ? <IntroDesktop /> : <IntroMobile /> }
    </div>
  )
}

export default Intro
