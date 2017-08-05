import React from 'react';

class SlideContainer extends React.Component {
  state={ height: 500}

  componentDidMount = () => {
    this.findHeight();
    if( typeof window !== 'undefined' )
      window.addEventListener('resize', this.findHeight, true)
  }

  findHeight = () => {
    let height = window.innerHeight;
    if ( height < 500) {
      this.setState( {height: 500} )
    } else {
      this.setState( { height } )
    }
  }

  render() {
    let { height } = this.state;
    return(
      <div style={{ height: height + 'px', border: '1px solid red'}}>
        { this.props.children }
      </div>
    )
  }
}

export default SlideContainer;
