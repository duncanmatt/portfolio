import LatestMobile from '../components/LatestMobile';
import LatestDesktop from '../components/LatestDesktop';
import { useMediaQuery } from 'react-responsive';

function Latest() {
	const isMobile = useMediaQuery({ query: '(max-width: 680px)' });

	return (
		<div className='latest'>
			{isMobile ? <LatestMobile /> : <LatestDesktop />}
		</div>
	);
}

export default Latest;
