/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Education from './components/Education/Education';
import Experience from './components/Experience/Experience';

function App() {
  return (
    <>
      <Router>
        <a href="#content" className="skip-to-content">Skip to Content</a>
        <header>
          <Navbar />
        </header>
        <main>
          <Hero />
          <About />
          <Education />
          <Experience />
          <Switch>
            <Route path="/" exact />
          </Switch>
        </main>
      </Router>
    </>
  );
}

export default App;
