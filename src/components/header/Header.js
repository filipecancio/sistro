import React from 'react';
import { Navbar,Button } from 'rbx';
import logo from '../../assets/png/logos/logo_01.png';

const Header = () => (
    <Navbar document={document} fixed="top" color="light" >
        <Navbar.Brand>
          <Navbar.Item href="#">
            <img
              src= {log0o}
              alt=""
              role="presentation"
              width="112"
              height="28"
            />
          </Navbar.Item>
          <Navbar.Burger />
        </Navbar.Brand>
        <Navbar.Menu>
          <Navbar.Segment align="start">
            <Navbar.Item>Home</Navbar.Item>
            <Navbar.Item>Documentation</Navbar.Item>

            <Navbar.Item dropdown>
              <Navbar.Link>More</Navbar.Link>
              <Navbar.Dropdown>
                <Navbar.Item>About</Navbar.Item>
                <Navbar.Item>Jobs</Navbar.Item>
                <Navbar.Item>Contact</Navbar.Item>
                <Navbar.Divider />
                <Navbar.Item>Report an issue</Navbar.Item>
              </Navbar.Dropdown>
            </Navbar.Item>
          </Navbar.Segment>

          <Navbar.Segment align="end">
            <Navbar.Item>
              <Button.Group>
                <Button color="primary">
                  <strong>Sign up</strong>
                </Button>
                <Button color="light">Log in</Button>
              </Button.Group>
            </Navbar.Item>
          </Navbar.Segment>
        </Navbar.Menu>
      </Navbar>
);

export default Header;