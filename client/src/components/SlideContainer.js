import React from 'react';

class SlideContainer extends React.Component {

  render() {
    return(
      <div style={{ height: '100px', margin: '100px'}}>
        { this.props.children }
      </div>
    )
  }
}

export default SlideContainer;
