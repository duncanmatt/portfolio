import Initials from '../layout/assets/initials.svg'

function Footer() {
  const footerYear = new Date().getFullYear();

  return (
    <div className='footer'>
      <img src={Initials} alt='MD' style={{
        alignSelf: 'center',
        width: '66px'
      }} />
      <p>Copyright &copy; {footerYear} All rights reserved</p>
    </div>
  )
}

export default Footer
