import React from 'react';
import { Navbar} from 'rbx';
import logo from '../../assets/png/logos/logo_01.png';
import {Link} from 'react-router-dom';
import "rbx/index.css";


const Header = () => (
    <Navbar document={document} fixed="top" color="light" >
        <Navbar.Brand>
        <Link to="/">
          <Navbar.Item>
            <img
              src= {logo}
              alt=""
              role="presentation"
              width="112"
              height="28"
            />
          </Navbar.Item>
          </Link>
          <Navbar.Burger />
        </Navbar.Brand>
        <Navbar.Menu>
          <Navbar.Segment align="end">
            
          <Link to="/painel"><Navbar.Item>Painel</Navbar.Item></Link>
          <Link to="/mensagem"><Navbar.Item>Mensagem</Navbar.Item></Link>
          </Navbar.Segment>
        </Navbar.Menu>
      </Navbar>
);

export default Header;