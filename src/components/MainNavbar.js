import { useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';

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
              <NavLink
                to='/collections'
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
              >
                Collections
              </NavLink>
            </NavItem>
            <NavItem className='nav-item'>
              <NavLink
                to='/men'
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
              >
                Men
              </NavLink>
            </NavItem>
            <NavItem className='nav-item'>
              <NavLink
                to='/women'
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
              >
                Women
              </NavLink>
            </NavItem>
            <NavItem className='nav-item'>
              <NavLink
                to='/about'
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
              >
                About
              </NavLink>
            </NavItem>
            <NavItem className='nav-item'>
              <NavLink
                to='/contact'
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
              >
                Contact
              </NavLink>
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
