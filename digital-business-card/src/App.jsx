import React from "react";
import { ReactDOM } from "react";
import Info from "./Components/Info/Info"
import About from "./Components/About/About"
import Interests from "./Components/Interests/Interests"
import Footer from "./Components/Footer/Footer"

import "./style.css"


function App() {
  return (
    <div className="container">
        <Info />
        <About />
        <Interests />
        <Footer />
      
    </div>
  )
}

export default App
