import React from 'react'
import ContentCard from '../components/shared/ContentCard'

function SkillsMobile() {
  return (
    <div>
      <div
        className='introSkills'
        style={{
          gridTemplateRows: 'min-content min-content min-content',
          gridTemplateColumns: 'min-content min-content',
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
