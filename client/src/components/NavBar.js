import React from 'react';
import { Menu } from 'semantic-ui-react';

class NavBar extends React.Component {
  state = { activeItem: 'HOME'}

  items = [
    {name: 'HOME', key: 'Home'},
    {name: 'ABOUT', key: 'About'},
    {name: 'PROJECTS', key: 'Projects'},
    {name: 'CONTACT', key: 'Contact'}
  ]

  componentWillReceiveProps = () => {
    let { activePage } = this.props;
    if (activePage)
      this.changeActive(activePage)
  }

  changeActive = ( activeItem ) => {
    this.setState({ activeItem });
  }

  render() {
    let { activeItem } = this.state;
    return(
       <div className='nav-bar' className='navMenu'>
         <Menu className='navMenu' size='large' borderless={true} fixed='top'>
           <Menu.Menu position='right' className='navMenu' >
             { this.items.map( item => {
                 return (
                   <a href={`#${item.name}`} key={item.key}>
                     <Menu.Item
                       className='navItem'
                       name={item.name}
                       active={activeItem === item.name}
                     >
                      {item.name}
                     </Menu.Item>
                   </a>
                 )
               })
             }
           </Menu.Menu>
         </Menu>
       </div>
    )
 }


}

export default NavBar;
