import React from 'react';
import { Menu } from 'semantic-ui-react';
import Scroll from 'react-scroll';
import { connect } from 'react-redux';
import { setPage } from '../actions/page';

class NavBar extends React.Component {
  state = { activeItem: ''}

  items = [
    {name: 'home', key: 'HOME'},
    {name: 'about', key: 'ABOUT'},
    {name: 'projects', key: 'PROJECTS'},
    {name: 'contact', key: 'CONTACT'}
  ]

  componentDidMount = () => {
    this.props.dispatch(setPage(this.state.activeItem));
  }

  changeActive = ( activeItem ) => {
    this.setState({ activeItem });
  }

  handleClick = (pageName) => {

    this.changeActive(pageName);
    this.props.dispatch(setPage(pageName));
    return true;
  }

// <a href={`#${item.name}`} onClick={() => this.handleClick(item.name)} style={{ textDecoration: 'none'}} key={item.key}>



  render() {
    let { activeItem } = this.state;
    let { page, dispatch } = this.props;
    // console.log(window.scrollY)
    return(
       <div className='nav-bar' className='navMenu'>
         <Menu className='navMenu' size='large' fixed='top'>
           <Menu.Menu position='right' className='navMenu' >
             { this.items.map( item => {
                 return (
                   <Scroll.Link
                      key={item.key}
                      activeClass="active"
                      to={item.name} spy={true} smooth={true} duration={500} delay={200}
                      onSetActive={ () => dispatch(setPage(item.name))}
                   >
                     <Menu.Item
                       key={item.key}
                       className='navItem'
                       name={item.name}
                       active={page === item.name}
                       style={page === item.name? {backgroundColor: 'rgba(73, 73, 73, 0.5)' } : null}
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

const mapStateToProps = (state) => {
  return { page: state.page}
}

export default connect(mapStateToProps)(NavBar);
