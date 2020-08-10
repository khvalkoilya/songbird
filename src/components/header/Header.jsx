import React from 'react';
import PropTypes from 'prop-types';
import {
  Navbar, Nav, Container,
} from 'react-bootstrap';
import CurrentQuestion from '../currentQuestion/CurrentQuestion';
// import logo from 'android-chrome-512x512'

const Header = ({ num }) => (
  <Container>
    <Navbar expand="true">
      <Navbar.Brand href="#">
        <img
          src="android-chrome-512x512.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />
      </Navbar.Brand>
      <Nav>
        <Nav.Item className="nav__score">
          Score:
          <span>{num[0]}</span>
        </Nav.Item>
      </Nav>
    </Navbar>
    <CurrentQuestion />
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
