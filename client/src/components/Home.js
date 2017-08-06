import React from 'react';
import Arrow from './Arrow';

const Home = () => {
  return(
    <div className='home'>
      <div className='homeTxt'>
        <h1>Evelyn Sharp</h1>
        <p>A former i-banker looking to enter Tech world.</p>
      </div>
      <div className='switchCon' style={{ marginTop: '25%'}}>
        <Arrow />
      </div>
    </div>
  )
}

export default Home;
