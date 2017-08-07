import React from 'react';
import WithinViewport from 'react-within-viewport'

class SlideContainer extends React.Component {
  state={ height: 500}

  componentDidMount = () => {
    let {inViewport, setActivePage, page} = this.props
    if( typeof window !== 'undefined' )
      window.addEventListener('scroll', () => { setActivePage(page, this.props.inViewport)}, true)
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
    // <div className='slideCon' style={{ height: height + 'px' }}>
  render() {
    let { height } = this.state;
    return(
      <div className='slideCon'>
        { this.props.children }
      </div>
    )
  }
}

export default WithinViewport()(SlideContainer);
