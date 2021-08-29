/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
import React, { useRef, useEffect, Suspense } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Hero = React.lazy(() => import('./components/Hero/Hero'));
const About = React.lazy(() => import('./components/About/About'));
const Education = React.lazy(() => import('./components/Education/Education'));
const Experience = React.lazy(() => import('./components/Experience/Experience'));
const Project = React.lazy(() => import('./components/Project/Project'));
const Contact = React.lazy(() => import('./components/Contact/Contact'));
const Footer = React.lazy(() => import('./components/Footer/Footer'));
const Navbar = React.lazy(() => import('./components/Navbar/Navbar'));

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
          <Suspense fallback={<div className="loading">Loading...</div>}>
            <Navbar refs={refs} />
          </Suspense>
        </header>
        <main>
          <Suspense fallback={<div className="loading">Loading...</div>}>
            <Hero componentRef={(ref) => { refs.current[0] = ref; }} />
          </Suspense>
          <Suspense fallback={<div className="loading">Loading...</div>}>
            <About componentRef={(ref) => { refs.current[1] = ref; }} />
          </Suspense>
          <Suspense fallback={<div className="loading">Loading...</div>}>
            <Education componentRef={(ref) => { refs.current[2] = ref; }} />
          </Suspense>
          <Suspense fallback={<div className="loading">Loading...</div>}>
            <Experience componentRef={(ref) => { refs.current[3] = ref; }} />
          </Suspense>
          <Suspense fallback={<div className="loading">Loading...</div>}>
            <Project componentRef={(ref) => { refs.current[4] = ref; }} />
          </Suspense>
          <Suspense fallback={<div className="loading">Loading...</div>}>
            <Contact componentRef={(ref) => { refs.current[5] = ref; }} />
          </Suspense>
          <Switch>
            <Route path="/" exact />
          </Switch>
        </main>
        <Suspense fallback={<div className="loading">Loading...</div>}>
          <Footer />
        </Suspense>
      </Router>
    </>
  );
}

export default App;
