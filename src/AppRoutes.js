import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Build from './Pages/Build';
import App from './App';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/build" element={<Build />} />
        
        {/* You can add a catch-all route for 404 pages if needed */}
        <Route path="*" element={<App />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;