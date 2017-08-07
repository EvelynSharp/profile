import React from 'react';
import { Icon } from 'semantic-ui-react';
import Scroll from 'react-scroll';
        // onSetActive={ () => setActivePage(pageArr[page]) }
const Arrow = ({ page, setActivePage }) => {
  const pageArr = ['home', 'about', 'projects', 'contact' ]
  return(
    <div className='arrowCon'>
      <Scroll.Link
        to={ pageArr[page] }
        spy={true} smooth={true} duration={500} delay={200}
        style={{ textDecoration: 'none'}}

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

export default Arrow;
