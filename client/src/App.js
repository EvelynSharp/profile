import React from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import SlideContainer from './components/SlideContainer'
import _ from 'lodash';
import Scroll from 'react-scroll';
import {scroller} from 'react-scroll';


class App extends React.Component {
  defaultData = { home: true, about: false, projects: false, contact: false }
  // cleanData = { home: false, about: false, projects: false, contact: false }
  state={ ...this.defaultData }

  componentDidMount = () => {
    let scroll = Scroll.animateScroll;
    scroll.scrollToTop();
    this.setState({...this.defaultData});
  }

  setActivePage = (page, ifVisible) => {
    this.setState( { [page]: ifVisible } )
  }

  findActivePage = () => {
    const nameMap = ['home', 'about', 'projects', 'contact'];
    let trueIndex = _.toArray({...this.state}).indexOf(true);
    return nameMap[trueIndex];
  }

  // setActiveByClick = (page) => {
  //   this.setState( {...this.cleanData, [page]: true} )
  // }

  render() {
    return (
      <div>
        <NavBar activePage={this.findActivePage()} />
        <Scroll.Element name="home"><Home page={'home'}/></Scroll.Element>
        <Scroll.Element name="about"><About/></Scroll.Element>
        <Scroll.Element name="projects"><Projects/></Scroll.Element>
        <Scroll.Element name="contact"><Contact/></Scroll.Element>
      </div>
    )
  }
};

export default App;
