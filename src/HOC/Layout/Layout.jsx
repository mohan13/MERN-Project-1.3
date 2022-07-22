import React from 'react'
import Toolbar from '../../Components/Navigation/Toolbar/Toolbar'
const Layout = (props) => {
  return (
    <div>
        <Toolbar/>
        <div>{props.children}</div>
    </div>
  )
}

export default Layout