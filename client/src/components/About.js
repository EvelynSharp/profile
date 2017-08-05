import React from 'react';
import { List } from 'semantic-ui-react';

const About = () => {
  return(
    <div className='compContainer'>
      <div className='about'>
        <h1>About Me</h1>
        <p> {'I am an ex-banker with 4 years of experience in improving process efficiency, optimizing client performance reports and analyzing large private equity fund statistics. \
         I have recently attended and graduated from a bootcamp focusing on JavaScript, React/Redux, MongoDB and Node. ' } </p>
        <p>{ 'On top of a full time finance job, I am currently working as a TA and building inhouse projects for DevPointLabs using JS and Ruby. \
          I have also been learning new skills online and working on a few personal projects. \
         I’m looking for an opportunity on front end web development. ' }
        </p>
      </div>
    </div>
  )
}

export default About;
