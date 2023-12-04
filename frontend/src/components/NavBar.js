import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useContext } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import AuthContext from "../context/AuthContext";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const { user, Logout } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <>
      <Navbar expand="lg" id="minhabarra">
        <Container>
          <Navbar.Brand href="/home">
            <span style={{ fontWeight: 600, color: "#124265" }}>Agend.AI</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          {user.email && (
            <Navbar.Collapse className="justify-content-center">
              <Nav>
                <Nav.Link href="/frontend/">Início</Nav.Link>
                <Nav.Link href="/frontend/mapa/upload">Upload</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          )}
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              {user.email ? (
                <Nav.Link onClick={Logout}>{user.email}</Nav.Link>
              ) : (
                <Nav.Link href="/frontend/login">login</Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
};

export default NavBar;
