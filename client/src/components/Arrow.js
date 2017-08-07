import React from 'react';
import { Icon } from 'semantic-ui-react';
import Scroll from 'react-scroll';

const Arrow = ({ page }) => {
  const pageArr = ['home', 'about', 'projects', 'contact' ]
  return(
    <div className='arrowCon'>
      <Scroll.Link to={ pageArr[ (page+1)%pageArr.length ] } spy={true} smooth={true} duration={500} delay={200} style={{ textDecoration: 'none'}}>
        { page === 3 ?
          <Icon className='arrowIcon' name='angle double up' />
          :
          <Icon className='arrowIcon' name='angle double down' />
        }
      </Scroll.Link>
    </div>
  )
}

export default Arrow;
