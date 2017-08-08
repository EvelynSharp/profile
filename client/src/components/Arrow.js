import React from 'react';
import { Icon } from 'semantic-ui-react';
import Scroll from 'react-scroll';
import { connect } from 'react-redux';
import { setPage } from '../actions/page';
        // onSetActive={ () => setActivePage(pageArr[page]) }
const Arrow = ({ page, setActivePage, dispatch }) => {
  const pageArr = ['home', 'about', 'projects', 'contact' ]
  return(
    <div className='arrowCon'>
      <Scroll.Link
        to={ pageArr[page] }
        spy={true} smooth={true} duration={500} delay={200} offser={5}
        style={{ textDecoration: 'none'}}
        onSetActive={ () => dispatch(setPage(pageArr[page]))}
      >
        { page === 0 ?
          <Icon className='arrowIcon' name='angle double up' />
          :
          <Icon className='arrowIcon' name='angle double down' />
        }
      </Scroll.Link>
    </div>
  )
}

export default connect()(Arrow);
