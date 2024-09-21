import './App.css';
import { Route, Router, Routes } from 'react-router-dom';
import Showall from './Components/Showall';
import Terms from './Components/Terms';
import Policy from './Components/Policy';
import Test from './Components/test';
import Privacytest from './Components/Privacytest';
import { useState } from 'react';
import { Audio, Bars } from 'react-loader-spinner'


function App() {
  const [isLoading, setIsLoading] = useState(true);
  setTimeout(() => {
    setIsLoading(false);
}, 2000);

  return (
    <div className="App">
      {isLoading ? (
         <div
         style={{
             display: "flex",
             alignItems: "center",
             justifyContent: "center",
             width: "100%",
             minHeight: "100vh"
         }}
     >
   <Bars
  height="80"
  width="80"
  radius="9"
  color="#AB00FB"
  ariaLabel="loading"
  wrapperStyle
  wrapperClass
/>
     </div>
      ): (
        <Routes>
        <Route path="/" element={<Showall />} />
        <Route path="/terms" element={<Terms/>}/>
        <Route path='/policy' element={<Policy/>} />
        <Route path='/test' element={<Test/>} />
        <Route path='/privacytest' element={<Privacytest/>} />
      </Routes>
      )}
      
    </div>
  );
}

export default App;
