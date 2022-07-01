import { useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

const MainNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <div className='main-navbar'>
      <Navbar expand='md' className='navbar'>
        <NavbarBrand href='/' className='nav-brand'>
          {!isOpen ? <img src='../../images/logo.svg' alt='logo' /> : ''}
        </NavbarBrand>
        <NavbarToggler className='nav-toggler' onClick={toggleNavbar}>
          {isOpen ? (
            <img src='../../images/icon-close.svg' alt='close toggler' />
          ) : (
            <img src='../../images/icon-menu.svg' alt='open toggler' />
          )}
        </NavbarToggler>
        <Collapse navbar className='nav-collapse' isOpen={isOpen}>
          <Nav navbar className='nav'>
            <NavItem className='nav-item'>
              <NavLink href='/'>Collections</NavLink>
            </NavItem>
            <NavItem className='nav-item'>
              <NavLink href='/'>Men</NavLink>
            </NavItem>
            <NavItem className='nav-item'>
              <NavLink href='/women'>Women</NavLink>
            </NavItem>
            <NavItem className='nav-item'>
              <NavLink href='/'>About</NavLink>
            </NavItem>
            <NavItem className='nav-item'>
              <NavLink href='/'>Contact</NavLink>
            </NavItem>
          </Nav>
        </Collapse>

        <div>
          {!isOpen ? (
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
          ) : (
            ''
          )}
        </div>
      </Navbar>
      <div className='line'></div>
    </div>
  );
};
export default MainNavbar;
