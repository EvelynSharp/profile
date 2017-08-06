import React from 'react';
import { Icon } from 'semantic-ui-react';

const Arrow = ({ end }) => {
  return(
    <div className='arrowCon'>
      { end ?
        <Icon className='arrowIcon' name='angle double up' />
        :
        <Icon className='arrowIcon' name='angle double down' />
      }

    </div>
  )
}

export default Arrow;
