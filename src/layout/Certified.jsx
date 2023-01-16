// import { useMediaQuery } from 'react-responsive'

import CertifiedMobile from '../components/CertifiedMobile'

// const certs = [
//   {
//     img: `${DsaCert}`,
//   },
//   {
//     img: `${BeginnerJSCert}`,
//   },
// ]



function Certified() {
  // const isMobile = useMediaQuery({ query: '(max-width: 600px)' })

  return (
    <div className='certified'>
      <h2>Certified</h2>
      
        <CertifiedMobile />

      
    </div>
  )
}

export default Certified
