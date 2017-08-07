import React from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import SlideContainer from './components/SlideContainer'
import Scroll from 'react-scroll';


class App extends React.Component {
  defaultData = { page: '' }

  state={ ...this.defaultData }

  componentDidMount = () => {
    let scroll = Scroll.animateScroll;
    scroll.scrollToTop();
  }

  setActivePage = (page) => {
    console.log(page)
    this.setState( { page } )
  }

  render() {
    return (
      <div>
        <NavBar activePage={this.state.page}/>
        <Scroll.Element name="home"><Home setActivePage={this.setActivePage}/></Scroll.Element>
        <Scroll.Element name="about"><About setActivePage={this.setActivePage}/></Scroll.Element>
        <Scroll.Element name="projects"><Projects setActivePage={this.setActivePage}/></Scroll.Element>
        <Scroll.Element name="contact"><Contact setActivePage={this.setActivePage}/></Scroll.Element>
      </div>
    )
  }
};

export default App;
