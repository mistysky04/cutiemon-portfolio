import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Display } from './pages/Display.jsx'

import { TrainerPage } from './pages/TrainerPage.jsx'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route index element = { <Display/> } />
          <Route path="/intro" element= { <Display />} /> */}
          <Route index element = { <TrainerPage/> } />
          <Route path="/home" element = { <TrainerPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
