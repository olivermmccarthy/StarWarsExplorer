// import { useState } from 'react';

import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <Router>
      {/* <NavBar /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        {/* <Route path="/people" element={<ResourceList />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
