import React from 'react';
import { Menu } from 'semantic-ui-react';

class NavBar extends React.Component {
  state = { activeItem: 'Home'}


  items = [
    {name: 'Home', key: 'Home'},
    {name: 'About', key: 'About'},
    {name: 'Projects', key: 'Projects'},
    {name: 'Contact', key: 'Contact'}
  ]

  render() {
    let { activeItem } = this.state;
    return(
       <div className='nav-bar'>
         <Menu className='navMenu' size='large' borderless={true} fixed='top'>

           <Menu.Menu position='right' className='navMenu' >
             { this.items.map( item => {
                 return (
                   <Menu.Item
                     className='navItem'
                     name={item.name}
                     key={item.key}
                     active={activeItem === item.name}
                   >
                     {item.name}
                   </Menu.Item>
                 )
               })
             }
           </Menu.Menu>
         </Menu>
       </div>
    )
 }
  // <Menu.Item className='navItem'>Home</Menu.Item>
  // <Menu.Item className='navItem'>About</Menu.Item>
  // <Menu.Item className='navItem'>Projects</Menu.Item>
  // <Menu.Item className='navItem'>Contact</Menu.Item>

}

export default NavBar;
