import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Display } from './pages/Display.jsx'

import { Portfolio } from './pages/Portfolio.jsx'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route index element = { <Display/> } />
          <Route path="/intro" element= { <Display />} /> */}
          <Route index element = { <Portfolio/> } />
          <Route path="/home" element = { <Portfolio />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
