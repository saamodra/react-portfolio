/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
import React, { useRef, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Education from './components/Education/Education';
import Experience from './components/Experience/Experience';
import Project from './components/Project/Project';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  const refs = useRef([]);

  useEffect(() => {
    refs.current = Array(6).fill().map((_, i) => refs.current[i] || React.createRef());
  }, []);

  return (
    <>
      <Router>
        <a href="#content" className="skip-to-content">Skip to Content</a>
        <header>
          <Navbar refs={refs} />
        </header>
        <main>
          <Hero componentRef={(ref) => { refs.current[0] = ref; }} />
          <About componentRef={(ref) => { refs.current[1] = ref; }} />
          <Education componentRef={(ref) => { refs.current[2] = ref; }} />
          <Experience componentRef={(ref) => { refs.current[3] = ref; }} />
          <Project componentRef={(ref) => { refs.current[4] = ref; }} />
          <Contact componentRef={(ref) => { refs.current[5] = ref; }} />
          <Switch>
            <Route path="/" exact />
          </Switch>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
