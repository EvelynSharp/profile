import React from 'react';
import Arrow from './Arrow';

const Home = ({setActivePage}) => {

  return(
      <div className='home'>
        <div className='homeTxt'>
          <h1>Evelyn Sharp</h1>
          <p>A former i-banker looking to enter Tech world.</p>
        </div>
        <div className='switchCon' style={{ marginTop: '25%'}}>
          <Arrow page={1} setActivePage={setActivePage}/>
        </div>
      </div>
  )
}

export default Home;
