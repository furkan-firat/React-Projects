import './style.css';
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Card from "./components/Card/Card";
import data from "./data"

function App() {

const cards = data.map((item)=>{
  
  return (
    <Card 
        key           = {item.id}
        item          = {item}
        />
  )
})




  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className='cards-list'>
          {cards}
      </section>
      
      
      
    </div>
  )
}


export default App;
