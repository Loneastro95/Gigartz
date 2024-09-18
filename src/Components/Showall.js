import React from 'react'
import NavbarPage from "./Nav";
import Home from "./Home";
import About from "./About";
import Footer from "./Footer"
import Features from './Features';


const Showall = () => {
  return (
    <div className="App">
     <NavbarPage/>
     <Home/>
     {/* <Download /> */}
     <About />
     <Features />
     <Footer />
    </div>
  )
}

export default Showall