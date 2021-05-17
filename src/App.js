import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Education from './components/Education/Education';


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
          <div className="random"></div>
          <Switch>
            <Route path='/' exact />
          </Switch>
        </main>
      </Router>
    </>
  );
}

export default App;
