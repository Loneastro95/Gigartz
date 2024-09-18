import './App.css';
import { Route, Router, Routes } from 'react-router-dom';
import Showall from './Components/Showall';
import Terms from './Components/Terms';
import Policy from './Components/Policy';
import Test from './Components/test';
import Privacytest from './Components/Privacytest';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Showall />} />
        <Route path="/terms" element={<Terms/>}/>
        <Route path='/policy' element={<Policy/>} />
        <Route path='/test' element={<Test/>} />
        <Route path='/privacytest' element={<Privacytest/>} />
      </Routes>
    </div>
  );
}

export default App;
