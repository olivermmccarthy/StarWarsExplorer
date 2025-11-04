// import { useState } from 'react';

import HomePage from './pages/HomePage';
import ResourceDetail from './pages/ResourceDetail';
import ResourceList from './pages/ResourceList';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Intro from './pages/Intro';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/:resourceType" element={<ResourceList />} />{' '}
        <Route path="/:resourceType/page/:pageNum" element={<ResourceList />} />
        <Route path="/:resourceType/:id" element={<ResourceDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
