import "./App.css";
import About from "./components/About";
import NavBar from "./components/NavBar";
import Services from "./components/Services";

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="header">
        <di className='card-cont'>
          <div className="photo-hero"></div>
          <div className="title-hero">
            <h3>Hi!</h3>
            <h3>I'm <span> Andrés García</span></h3>
            <p>Frontend Developer</p>
          </div>
        </di>
      </header>
      <About />
      <Services />
    </div>
  );
}

export default App;
