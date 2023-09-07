import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import SelectTag from './components/selectTag';
import Footer from './components/Footer';
import Welcome from './components/Welcome';
import Whydigi from './components/Whydigi';
import Responsiblity from './components/Responsiblity';
import './App.css';

function App() {
  return (
    <Router>
      <div className="main-div">
        <Navbar />
        <Routes>
          <Route path="/" element={<FrontPage />} />
          <Route path="/select" element={<SelectTag />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

function FrontPage() {
  return (
    <>
      <Welcome />
      <Whydigi />
      <Responsiblity />
    </>
  );
}

export default App;