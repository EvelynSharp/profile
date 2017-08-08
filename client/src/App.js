import React from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import SlideContainer from './components/SlideContainer'
import Scroll from 'react-scroll';


class App extends React.Component {


  componentDidMount = () => {
    let scroll = Scroll.animateScroll;
    scroll.scrollToTop();
    Scroll.Events.scrollEvent.register('begin', function() {
      console.log("begin", arguments);
    });
    Scroll.Events.scrollEvent.register('end', function() {
      console.log("end", arguments);
    });
    Scroll.scrollSpy.update();
  }

  componentWillUnmount() {
    Scroll.Events.scrollEvent.remove('begin');
    Scroll.Events.scrollEvent.remove('end');
  }

  render() {
    return (
      <div>
        <NavBar />
        <Scroll.Element name="home"><Home /></Scroll.Element>
        <div style={{ border: '1px solid rgba(73, 73, 73, 0.5)'}}></div>
        <Scroll.Element name="about"><About /></Scroll.Element>
        <div style={{ border: '1px solid rgba(73, 73, 73, 0.5)'}}></div>
        <Scroll.Element name="projects"><Projects /></Scroll.Element>
        <div style={{ border: '1px solid rgba(73, 73, 73, 0.5)'}}></div>
        <Scroll.Element name="contact"><Contact /></Scroll.Element>
      </div>
    )
  }
};

export default App;
