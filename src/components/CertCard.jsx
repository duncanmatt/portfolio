import { Card } from 'antd';

function CertCard({ cert: { id, pic, desc } }) {
	return (
		<Card
			key={id}
			hoverable
			cover={
				<img
					className='projCardPic'
					src={pic}
					alt='pic'
				/>
			}
			style={{
				width: 400,
				height: 420,
				backgroundColor: '#fff',
			}}>
			<div className='projCardContent'>
				<p className='projectCardDesc'>{desc}</p>
			</div>
		</Card>
	);
}

export default CertCard;
