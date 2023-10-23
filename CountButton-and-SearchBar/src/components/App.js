import React, {useState, useEffect} from "react"
import CountButton from "./CountButton/CountButton"
import SearchBar from "./SearchBar/SearchBar";

const App = () => {


  const products = [
    "apple notebook",
    "huawei notebook",
    "asus notebook",
    "asus desktop",
    "casper notebook"
  ]

  return (
    <div className="App">
      <SearchBar products = {products}/>
      <CountButton incrementBy = {1}/>
      <br></br>
      <CountButton incrementBy = {5}/>
      <br></br>
      <CountButton incrementBy = {10}/>

    </div>
  );
}

export default App;
