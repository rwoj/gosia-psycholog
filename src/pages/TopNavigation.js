import React from 'react';
import { Navbar, NavbarBrand , Nav, NavItem, NavLink } from 'reactstrap';

const TopNavigation =()=>
(
  <Navbar expand="md">
    <NavbarBrand  href='/'>Terapia indywidualna - Małgorzata Hałucha-Wojdowska</NavbarBrand>
    <Nav className="ml-auto" navbar>
      {/* <NavItem>
        <NavLink href='#omnie'>O mnie</NavLink>
      </NavItem> */}
      <NavItem>
        <NavLink href='#oferta'>Oferta</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href='#kontakt'>Kontakt</NavLink>
      </NavItem>
    </Nav>
  </Navbar>  
)

export default TopNavigation