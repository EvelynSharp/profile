import React from 'react';
import { Icon } from 'semantic-ui-react';

const Arrow = ({ page }) => {
  const pageArr = ['HOME', 'ABOUT', 'PROJECTS', 'CONTACT' ]
  return(
    <div className='arrowCon'>
      <a href={`#${pageArr[ (page+1)%pageArr.length ]}`} style={{ textDecoration: 'none', color: 'white'}}>
        { page === 3 ?
          <Icon className='arrowIcon' name='angle double up' />
          :
          <Icon className='arrowIcon' name='angle double down' />
        }
      </a>
    </div>
  )
}

export default Arrow;
