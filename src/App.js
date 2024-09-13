import './App.css';
import NavbarPage from './Components/Nav';
import Home from './Components/Home';
import Download from './Components/Download';
import About from './Components/About';
import Features from './Components/Features';

function App() {
  return (
    <div className="App">
     <NavbarPage/>
     <Home/>
     {/* <Download /> */}
     <About />
     <Features />
    </div>
  );
}

export default App;
