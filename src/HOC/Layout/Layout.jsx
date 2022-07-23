import React from 'react'
import Toolbar from '../../Components/Navigation/Toolbar/Toolbar'
import Footer from '../../Components/Pages/Footer/Footer';

const Layout = (props) => {
  return (
    <div>
        <Toolbar/>
        <div>{props.children}</div>
        <Footer/>

    </div>
  )
}

export default Layout