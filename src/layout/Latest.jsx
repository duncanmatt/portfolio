
import LatestMobile from '../components/LatestMobile';
import LatestDesktop from '../components/LatestDesktop';
import { useMediaQuery } from 'react-responsive';

function Latest() {

  
  
  const isMobile = useMediaQuery({ query: '(max-width: 700px)' });

  return <div className="latest">
    <h2>Latest Work</h2>
    {isMobile && <LatestMobile />}
    {!isMobile && <LatestDesktop />}
  </div> 
  
}

export default Latest;
