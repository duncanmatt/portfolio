
import ContentCard from './shared/ContentCard'

function SkillsDesktop() {
  return (
    <div
      className='introContent'
      style={{
        gridTemplateColumns: 'repeat(2, .5fr)',
        justifyItems: 'center',
        gap: '2rem',
      }}
    >
      <h2
        className='briefAbout'
        style={{
          fontSize: '2rem',
          fontWeight: 'normal',
          marginTop: '2.4rem'
        }}
      >
        Hello! I'm Matt Duncan, a self-taught React developer currently located
        in northern Virginia.
      </h2>
      <div
        className='introSkills'
        style={{
          alignContent: 'center',
          rowGap: '2rem',
          columnGap: '1rem',
          fontSize: '1.6rem',
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

export default SkillsDesktop
