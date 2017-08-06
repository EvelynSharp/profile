import React from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

class App extends React.Component {
  defaultData = { home: true, about: false, projects: false, contact: false }
  state={ ...this.defaultData }

  componentDidMount = () => {
    this.setState({...this.defaultData});
  }

  setActivePage = (page, ifVisible) => {
    console.log(page)
    console.log(ifVisible)
    this.setState( { [page]: ifVisible } )
  }
  render() {
    return (
      <div>
        <NavBar />
        <Home page={'home'} setActivePage={this.setActivePage}/>
        <About setActivePage={this.setActivePage} />
        <Projects setActivePage={this.setActivePage} />
        <Contact setActivePage={this.setActivePage} />
      </div>
    )
  }
};

export default App;
