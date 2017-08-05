import React from 'react';
import { Carousel } from 'react-bootstrap';
import { projectImgs } from '../projectImgs';

const Projects = () => {
  return(
    <div className='compContainer'>
      <div className='projects'>
        <div>
          <h1>My Work</h1>
        </div>
        <Carousel className='carouselCon'>
          <Carousel.Item>
            <a href='https://eventech-capstone.herokuapp.com/' target='_blank'>
              <img alt='900x500' src={projectImgs[0].src}/>
            </a>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  )
}

export default Projects;
