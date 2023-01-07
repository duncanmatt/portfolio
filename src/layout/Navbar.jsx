

import HeaderName from '../components/HeaderName'
import {default as Initials} from './assets/initials.svg'
import { FaRedditAlien, FaLinkedinIn, FaGithub } from 'react-icons/fa'


function Navbar() {



  return (
    <header>
      <div className='pageHeader'>
        <HeaderName  />
        <img 
          src={Initials} 
          alt='initials'
          className='headerInitials'
        />
        <span className='right'>
          <FaLinkedinIn
            style={{
              marginRight: '1rem',
              fontSize: '1.6rem',
            }} 
          />
          <FaGithub 
            style={{
             
              fontSize: '1.6rem'
            }} 
          />        
          <FaRedditAlien 
            style={{
              marginLeft: '1rem',
              fontSize: '1.6rem'
            }} 
          />
        </span>
      </div>
    </header>
  )
}

export default Navbar
