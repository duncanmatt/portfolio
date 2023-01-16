import { useMediaQuery } from 'react-responsive';
import CertifiedDesktop from '../components/CertifiedDesktop';
import CertifiedMobile from '../components/CertifiedMobile';

function Certified() {
	const isMobile = useMediaQuery({ query: '(max-width: 600px)' });

	return (
		<div className='certified'>
			<h2>Certified</h2>
			{isMobile ? <CertifiedMobile /> : <CertifiedDesktop />}
		</div>
	);
}

export default Certified;
