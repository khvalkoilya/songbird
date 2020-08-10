import React from 'react';
import PropTypes from 'prop-types';
import {
  Navbar, Nav, Container,
} from 'react-bootstrap';
import Level from '../level/Level';
import logo from './logo.png'

const Header = ({ num }) => (
  <Container>
    <Navbar expand="true">
      <Navbar.Brand href="#">
        <img
          src={logo}
          className="d-inline-block align-top logo"
        />
      </Navbar.Brand>
      <Nav>
        <Nav.Item className="nav__score">
          Score:
          <span>{num[0]}</span>
        </Nav.Item>
      </Nav>
    </Navbar>
    <Level />
  </Container>
  // </>
);

Header.propTypes = {
  num: PropTypes.arrayOf(PropTypes.number),
};

Header.defaultProps = {
  num: [0],
};

export default Header;
