import React from 'react';
import { Icon } from 'semantic-ui-react';

const Arrow = ({ page }) => {
  return(
    <div className='arrowCon'>
      { page === 'CONTACT' ?
        <Icon className='arrowIcon' name='angle double up' />
        :
        <Icon className='arrowIcon' name='angle double down' />
      }

    </div>
  )
}

export default Arrow;
