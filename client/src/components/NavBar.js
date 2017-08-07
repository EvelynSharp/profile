import React from 'react';
import { Menu } from 'semantic-ui-react';

class NavBar extends React.Component {
  state = { activeItem: 'home'}

  items = [
    {name: 'home', key: 'HOME'},
    {name: 'about', key: 'ABOUT'},
    {name: 'projects', key: 'PROJECTS'},
    {name: 'contact', key: 'CONTACT'}
  ]

  componentWillReceiveProps = () => {
    let { activePage } = this.props;
    if (activePage)
      this.changeActive(activePage)
  }

  changeActive = ( activeItem ) => {
    this.setState({ activeItem });
  }

  handleClick = (pageName) => {
    this.props.setActiveByClick(pageName);
    this.changeActive(pageName);
  }

  render() {
    let { activeItem } = this.state;
    return(
       <div className='nav-bar' className='navMenu'>
         <Menu className='navMenu' size='large' borderless={true} fixed='top'>
           <Menu.Menu position='right' className='navMenu' >
             { this.items.map( item => {
                 return (
                   <a onClick={() => this.handleClick(item.name)} href={`#${item.name}`} key={item.key} >
                     <Menu.Item
                       className='navItem'
                       name={item.name}
                       active={activeItem === item.name}
                       style={activeItem === item.name? {backgroundColor: 'rgba(73, 73, 73, 0.5)' } : null}
                     >
                      {item.key}
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
