import React from 'react';
import { Button, Icon, Grid } from 'semantic-ui-react';
import Arrow from './Arrow';

const Contact = () => {

  return(
    <div className='compContainer'>
      <div className='contact'>
        <h1>Contact Me</h1>
        <p>FEEL FREE TO SEND ME A MESSAGE!</p>
        <p className='profileInv'>CHECK OUT MY PROFILE</p>
        <Grid>
          <Grid.Column width={4} />
          <Grid.Column width={8} style={{ textAlign: 'center'}}>
            <a href='https://www.linkedin.com/in/evelyn-sharp-606a8816/' target='_blank'>
              <Button className='contactBtn'>
                <Icon name='linkedin square' size='big' style={{ marginBottom: '5px'}}/>
                <span>LINKEDIN</span>
              </Button>
            </a>
            <a href='https://github.com/EvelynSharp' target='_blank'>
              <Button className='contactBtn'>
                <Icon name='github' size='big' style={{ marginBottom: '5px'}}/>
                <span>GITHUB</span>
              </Button>
            </a>
          </Grid.Column>
          <Grid.Column width={4} />
        </Grid>
        <div className='switchCon' style={{ marginTop: '5%'}}>
          <Arrow end={true}/>
        </div>
      </div>
    </div>
  )
}

export default Contact;
