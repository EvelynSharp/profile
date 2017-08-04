import React from 'react';
import { Menu } from 'semantic-ui-react';

const NavBar = () => {
  return(
    <div className='nav-bar'>
      <Menu  className='navMenu' size='large' borderless={true} fixed='top'>
        <Menu.Menu position='right' className='navMenu'>
          <Menu.Item className='navItem'>Home</Menu.Item>
          <Menu.Item className='navItem'>About</Menu.Item>
          <Menu.Item className='navItem'>Projects</Menu.Item>
          <Menu.Item className='navItem'>Contact</Menu.Item>
        </Menu.Menu>
      </Menu>
    </div>
  )
}

export default NavBar;
