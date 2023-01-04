
import {default as Initials} from './assets/initials.svg'
import { FaHome } from 'react-icons/fa'

function Navbar() {
  return (
    <>
      <header className='pageHeader'>
        <img src={Initials} alt='initials'/>
        <button>About</button>
        <FaHome />
      </header>
    </>
  )
}

export default Navbar
