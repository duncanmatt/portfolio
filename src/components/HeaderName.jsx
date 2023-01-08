import { useMediaQuery } from "react-responsive"

function HeaderName() {


  const isBigScreen = useMediaQuery({ query: '(min-width: 1200px)' })
  const isTablet = useMediaQuery({ query: '(max-width: 1200px)'})


  return (
    <div className="headerName">
      {isBigScreen && <h1>Matt Duncan</h1> }
      {isTablet && <h3>Matt Duncan</h3>}
      
    </div>
  )
}

export default HeaderName
 