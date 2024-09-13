import './App.css';
import NavbarPage from './Components/Nav';
import Home from './Components/Home';
import Download from './Components/Download';
import About from './Components/About';
import Features from './Components/Features';
import Footer from './Components/Footer';
import { Route, Router, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <NavbarPage/>
     <Home/>
     {/* <Download /> */}
     <About />
     <Features />
     <Footer />
    </div>
  );
}

export default App;
