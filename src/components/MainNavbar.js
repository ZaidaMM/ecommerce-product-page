import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
// import { NavLink } from 'react-router-dom';

const MainNavbar = () => {
  return (
    <div>
      <Navbar expand='md' className='bar'>
        <NavbarBrand href='/' className='logo'>
          <img src='../../images/logo.svg' alt='Logo' />
        </NavbarBrand>
        <NavbarToggler className='nav-toggler'>
          <img src='../../images/icon-menu.svg' alt='toggler' />
        </NavbarToggler>
        <Collapse navbar className='nav-collapse'>
          <Nav navbar>
            <NavItem className='nav-item'>
              <NavLink href='/'>Collections</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/'>Men</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/women'>Women</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/'>About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/'>Contact</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
        <div className='nav-icons'>
          <img
            src='../../images/icon-cart.svg'
            alt='cart'
            className='nav-cart'
          />
          <img
            src='../../images/image-avatar.png'
            alt='avatar'
            className='nav-avatar'
          />
        </div>
      </Navbar>
      <div className='line'></div>
    </div>
  );
};
export default MainNavbar;
