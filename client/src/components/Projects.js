import React from 'react';
import { Carousel } from 'react-bootstrap';
import { projectImgs } from '../projectImgs';
import Arrow from './Arrow';


const Projects = () => {
  return(
    <div className='compContainer'>
      <div className='projects' id='projects'>
        <div>
          <h1>My Work</h1>
        </div>
        <Carousel className='carouselCon'>
          <Carousel.Item>
            <a href='https://es-restaurant2.herokuapp.com/' target='_blank' rel="noopener noreferrer">
              <img alt='900x500' src={projectImgs[0].src}/>
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <a href='https://eventech-capstone.herokuapp.com/' target='_blank' rel="noopener noreferrer">
              <img alt='900x500' src={projectImgs[1].src}/>
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <a href='https://github.com/EvelynSharp/redux-practice-2' target='_blank' rel="noopener noreferrer">
              <img alt='900x500' src={projectImgs[2].src}/>
            </a>
          </Carousel.Item>
        </Carousel>
        <div className='switchCon' style={{ marginTop: '2%'}}>
          <Arrow page={3}/>
        </div>
      </div>
    </div>
  )
}

export default Projects;
