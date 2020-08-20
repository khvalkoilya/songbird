import React, {useContext} from 'react';
import {
  Navbar, Nav, Container,
} from 'react-bootstrap';
import {Context} from '../context/Context';
import Level from '../level/Level';
import logo from '../../assets/images/logo.png'

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
            <span> {score}</span>
          </Nav.Item>
        </Nav>
      </Navbar>
      <Level />
    </Container>
  )
}

export default Header;
