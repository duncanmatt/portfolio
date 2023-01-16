import CertCard from './CertCard';
import DSAPic from '../layout/assets/dsa.jpg';
import BeginnerJSPic from '../layout/assets/beginner-js-cert.png';

function CertifiedDesktop() {
	let certs = [
		{
			id: 1,
			pic: DSAPic,
			desc: 'Took this course from Colt Steele after getting comfortable with JavaScript.',
		},
		{
			id: 2,
			pic: BeginnerJSPic,
			desc: 'Was inspired to learn a programming language after having fun playing around with HTML/CSS.',
		},
	];
	return <div className='certified-lg'>
    {certs.map((cert) => (
      <CertCard key={cert.id} cert={cert} />
    ))}
  </div>;
}

export default CertifiedDesktop;
