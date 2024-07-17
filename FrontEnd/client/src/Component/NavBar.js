import React, { Component } from 'react'
import { LinkContainer } from "react-router-bootstrap"
import { Navbar, Nav, Container } from "react-bootstrap"

export default class NavBar extends Component {
  render() {
       
    return(
      <div>
      <header>
          <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
              <Container>
                  <LinkContainer to="/">
                      <Navbar.Brand>REMEDI</Navbar.Brand>
                  </LinkContainer>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                      <Nav className="ms-auto">
                          <LinkContainer to="/">
                              <Nav.Link><i class="fas fa-store"></i> Store</Nav.Link>
                          </LinkContainer>
                          <LinkContainer to="/mycart">
                              <Nav.Link><i className="fas fa-shopping-cart"></i> Cart{' '}
                                  </Nav.Link>
                          </LinkContainer>
                          <LinkContainer to="/login">
                              <Nav.Link><i className="fas fa-user"></i> Sign In</Nav.Link>
                          </LinkContainer>
                      </Nav>
                  </Navbar.Collapse>
              </Container>
          </Navbar>
      </header>

  </div>
     
    )
  }
}