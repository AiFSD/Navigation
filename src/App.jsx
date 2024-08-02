import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Navigation from './components/Navigation';
import AllCourses from './components/AllCourses';
import DataScience from './components/DataScience';
import CyberSecurity from './components/CyberSecurity';
import Career from './components/Career';
import './App.css';
import FsdCourses from './components/FsdCourses';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Navigation />
        <Routes>
          <Route path="/all" element={<AllCourses />} />
          <Route path="/full-stack-development" element={<FsdCourses />} />
          <Route path="/data-science" element={<DataScience />} />
          <Route path="/cyber-security" element={<CyberSecurity />} />
          <Route path="/career" element={<Career />} />
          <Route path="/" element={<AllCourses />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
