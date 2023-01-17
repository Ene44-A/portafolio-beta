import "./App.css";
import NavBar from "./components/NavBar";

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
            <h3>Frontend Developer</h3>
          </div>
        </di>
      </header>
    </div>
  );
}

export default App;
