import { Card } from 'antd';

const { Meta } = Card;

function Certifications({ certs }) {
	return (
		<div className='certifications'>
			{certs.map(cert => (
				<Card
					key={cert.id}
          size='small'
					cover={
						<img
							src={cert.pic}
							alt={cert.title}
						/>
					}
					style={{
						minWidth: 'inherit',
						maxWidth: '720px',
						height: 'inherit',
						backgroundColor: '#fff',
					}}>
					<Meta
						title={cert.title}
						description={cert.desc}
					/>
				</Card>
			))}
		</div>
	);
}

export default Certifications;
