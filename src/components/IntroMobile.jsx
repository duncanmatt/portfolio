import React from 'react'
import ContentCard from './shared/ContentCard'

function SkillsMobile() {
  return (
    <div 
      className='introContent'
      style={{
        gridTemplateRows: 'min-content 1fr',
        
      }}
    >
      <div>
        <p 
          className='briefAbout'
          style={{
            fontSize: '1.8rem',
            
          }}  
        >
          
          Hello! I'm Matt Duncan, a self-taught React developer currently
          located in northern Virginia.
        </p>
      </div>

      <div
        className='introSkills'
        style={{
          alignSelf: 'flex-start',
          rowGap: '1rem',
          columnGap: '.5rem'
        }}>
        <ContentCard skill='HTML' />
        <ContentCard skill='CSS' />
        <ContentCard skill='JavaScript' />
        <ContentCard skill='React' />
        <ContentCard skill='Node' />
        <ContentCard skill='Figma' />
      </div>
    </div>
  );
}

export default SkillsMobile
