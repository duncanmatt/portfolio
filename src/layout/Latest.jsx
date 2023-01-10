
import LatestMobile from '../components/LatestMobile';
import LatestDesktop from '../components/LatestDesktop';
import { useMediaQuery } from 'react-responsive';

function Latest() {

  
  
  const isMobile = useMediaQuery({ query: '(max-width: 600px)' });

  return <div className="latest">
    {isMobile && <LatestMobile />}
    {!isMobile && <LatestDesktop />}
  </div> 
  
}

export default Latest;
