import { Divider } from 'antd';
import DSAPic from '../layout/assets/dsa.jpg';
import ReactPic from '../layout/assets/reactCert.jpg';
import BeginnerJSPic from '../layout/assets/beginner-js-cert.png';
import Certifications from '../components/Certifications';

function Certified() {
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
		{
			id: 3,
			pic: ReactPic,
			desc: 'A great course from Brad Traversy, one of my favorite content creators. I would highly recommend to anyone wanting to start building modern apps.',
		},
	];

	return (
		<div className='certified'>
      <h2>Certified</h2>
			<Certifications certs={certs} />
		</div>
	);
}

export default Certified;
