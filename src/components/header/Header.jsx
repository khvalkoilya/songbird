import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import {
  Navbar, Nav, Container,
} from 'react-bootstrap';
import {Context} from '../context/Context';
import Level from '../level/Level';
import logo from './logo.png';

const Header = () => {
  const {score} = useContext(Context);

  return (
    <Container>
      <Navbar expand="true">
        <Navbar.Brand href="#">
          <img
            src={logo}
            className="d-inline-block align-top logo"
            alt="logo"
          />
        </Navbar.Brand>
        <Nav>
          <Nav.Item className="nav__score">
            Score:
            <span>{score}</span>
          </Nav.Item>
        </Nav>
      </Navbar>
      <Level />
    </Container>
  )
}


Header.propTypes = {
  num: PropTypes.arrayOf(PropTypes.number),
  currentLevel: PropTypes.number.isRequired,
};

Header.defaultProps = {
  num: [0],
};

export default Header;
