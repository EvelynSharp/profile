import React from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import SlideContainer from './components/SlideContainer'
import _ from 'lodash';

class App extends React.Component {
  defaultData = { home: true, about: false, projects: false, contact: false }
  cleanData = { home: false, about: false, projects: false, contact: false }
  state={ ...this.defaultData }

  componentDidMount = () => {
    this.setState({...this.defaultData});
    document.body.scrollTop = 0;
  }

  setActivePage = (page, ifVisible) => {
    this.setState( { [page]: ifVisible } )
  }

  findActivePage = () => {
    const nameMap = ['home', 'about', 'projects', 'contact'];
    let trueIndex = _.toArray({...this.state}).indexOf(true);
    return nameMap[trueIndex];
  }

  setActiveByClick = (page) => {
    this.setState( {...this.cleanData, [page]: true} )
  }

  render() {
    return (
      <div>
        <NavBar activePage={this.findActivePage()} setActiveByClick={this.setActiveByClick}/>
        <SlideContainer setActivePage={this.setActivePage} page='home'><Home page={'home'}/></SlideContainer>
        <SlideContainer setActivePage={this.setActivePage} page='about'><About/></SlideContainer>
        <SlideContainer setActivePage={this.setActivePage} page='projects'><Projects/></SlideContainer>
        <SlideContainer setActivePage={this.setActivePage} page='contact'><Contact/></SlideContainer>
      </div>
    )
  }
};

export default App;
