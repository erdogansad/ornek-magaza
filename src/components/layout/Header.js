import React, {useState} from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem
} from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const checkActive = (value) => {
    let rtnVal = "nav-link fw-bold";
    return value ? rtnVal : rtnVal+" unselected";
  }

  return (
    <header>
      <Navbar color="info" expand={"md"}>
        <Link className='navbar-brand fw-bolder' to="/" >Örnek Mağaza</Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto p-3" navbar>
            <NavItem>
            <NavLink exact className={isActive => checkActive(isActive)} to="/" >Ana Sayfa</NavLink>
            </NavItem>
            <NavItem>
            <NavLink className={isActive => checkActive(isActive)} to="/iletisim" >İletişim</NavLink>
            </NavItem>
            <NavItem>
            <NavLink className={isActive => checkActive(isActive)}  to="/sepet" >Sepet - 0</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </header>
  );
}

export default Header