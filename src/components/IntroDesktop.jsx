
import Badge from './shared/Badge'

function SkillsDesktop() {
  const title = `
    Hello! I'm Matt Duncan, a self-taught React developer currently located in northern Virginia but prepared to relocate.
  `

  return (
    <div
      className='introContent'
      style={{
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '2rem'
      }}
    >
      <h2
        className='briefAbout'
        style={{
          
          fontSize: '3rem',
          marginInlineStart: '2rem',
          marginBlockStart: '2rem'
        }}
      >
       {title}
      </h2>
      <div
        className='introSkills'
        style={{
          placeSelf: 'center',
          
          alignContent: 'space-evenly',
          rowGap: '1.75rem',
          columnGap: '1.99rem',
          fontSize: '2rem',
        }}>
        <Badge skill='HTML' />
        <Badge skill='CSS' />
        <Badge skill='JavaScript' />
        <Badge skill='DSA' />
        <Badge skill='React' />
        <Badge skill='Node' />
        <Badge skill='Figma' />
      </div>
    </div>
  );
}

export default SkillsDesktop
