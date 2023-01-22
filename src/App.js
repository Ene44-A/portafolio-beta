import "./App.css";
import About from "./components/About";
import NavBar from "./components/NavBar";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import { motion } from "framer-motion";

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="header">
        <motion.div
        initial={{opacity:0, scale:0.5}}
        animate={{opacity:1, scale:1}}
        transition={{duration:0.5}}
        className='card-cont'>
          <div className="photo-hero"></div>
          <div className="title-hero">
            <h3>Hi!</h3>
            <h3>I'm <span> Andrés García</span></h3>
            <p>Frontend Developer</p>
          </div>
        </motion.div>
      </header>
      <About />
      <Services />
      <Portfolio />
    </div>
  );
}

export default App;
