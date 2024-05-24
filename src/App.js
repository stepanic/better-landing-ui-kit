import React from 'react';
import {
  Routes,
  Route
} from 'react-router-dom';

import IndexPage from './pages/Index.js';
import Faq1Page from './pages/Faq-1.js';

function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
         
      <Route path="/faq1" element={<Faq1Page />} />
    </Routes>
  );
}

export default App;
