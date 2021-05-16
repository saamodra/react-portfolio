import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Hero from './components/Hero/Hero';


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
