import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Display } from './pages/Display.js'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element = { <Display/> } />
          <Route path="/intro" element= { <Display />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
