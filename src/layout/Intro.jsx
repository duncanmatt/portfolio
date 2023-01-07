

import { useMediaQuery } from 'react-responsive';
import {default as LakePic} from './assets/lake.svg';
import IntroBackground from '../components/IntroBackground';



// style={{backgroundImage: `url(${LakePic}`}}

function Intro() {
  const isDesktop = useMediaQuery({ query: '(min-width: 1000px)' })

  const isMobile = useMediaQuery({ query: '(max-width: 599px)' })
 



  return (
    <div className='intro'>
      <div className='introContent'>
        {isDesktop && <p>this is DESKTOP</p>}
        {/* {isTablet && <p>this is TABLET</p>} */}
        {isMobile && <p>this is MOBILE</p>}
      </div>
    </div>
    
    
    
  )
}

export default Intro
