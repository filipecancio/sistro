import React from 'react';
import { Navbar} from 'rbx';
import logo from '../../assets/png/logos/logo_01.png';

const Header = () => (
    <Navbar document={document} fixed="top" color="light" >
        <Navbar.Brand>
          <Navbar.Item href="#">
            <img
              src= {logo}
              alt=""
              role="presentation"
              width="112"
              height="28"
            />
          </Navbar.Item>
          <Navbar.Burger />
        </Navbar.Brand>
        <Navbar.Menu>
          <Navbar.Segment align="end">
            <Navbar.Item href="#">Painel</Navbar.Item>
            <Navbar.Item href="#">Mensagem</Navbar.Item>
          </Navbar.Segment>
        </Navbar.Menu>
      </Navbar>
);

export default Header;