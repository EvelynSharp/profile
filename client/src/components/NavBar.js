import React from 'react';
import { Menu } from 'semantic-ui-react';
import Scroll from 'react-scroll';
import {scroller} from 'react-scroll';

class NavBar extends React.Component {
  state = { activeItem: ''}

  items = [
    {name: 'home', key: 'HOME'},
    {name: 'about', key: 'ABOUT'},
    {name: 'projects', key: 'PROJECTS'},
    {name: 'contact', key: 'CONTACT'}
  ]

  // componentWillReceiveProps = () => {
  //   let { activePage } = this.props;
  //   if (activePage)
  //     this.changeActive(activePage)
  // }

  changeActive = ( activeItem ) => {
    this.setState({ activeItem });
  }

  // handleClick = (pageName) => {
  //   this.props.setActiveByClick(pageName);
  //   this.changeActive(pageName);
  // }


  // active={activeItem === item.name}
  // style={activeItem === item.name? {backgroundColor: 'rgba(73, 73, 73, 0.5)' } : null}

  render() {
    let { activeItem } = this.state;
    return(
       <div className='nav-bar' className='navMenu'>
         <Menu className='navMenu' size='large' borderless={true} fixed='top'>
           <Menu.Menu position='right' className='navMenu' >
             { this.items.map( item => {
                 return (
                   <Scroll.Link key={item.key} offset={50} activeClass="active" to={item.name} spy={true} smooth={true} duration={500} delay={200}>
                     <Menu.Item
                       key={item.key}
                       className='navItem'
                       name={item.name}

                     >
                      {item.key}
                     </Menu.Item>
                   </Scroll.Link>
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
