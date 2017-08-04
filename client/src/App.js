import React from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import SlideContainer from './components/SlideContainer';

const App = () => (
  <div>
    <NavBar />
    <SlideContainer> <Home /> </SlideContainer>
    <SlideContainer> <About /> </SlideContainer>
    <SlideContainer> <Projects /> </SlideContainer>
    <SlideContainer> <Contact /> </SlideContainer>

  </div>
);

export default App;
