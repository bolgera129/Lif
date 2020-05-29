import React from "react"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import css from "../css/NavBar.module.css"


export default function NavBar() {

    return(
            <Navbar bg="light" expand="lg">
              <Navbar.Brand href="/"> <img src = "/assets/icon.svg" alt = "lif logo" id = {css.navlogo}/> </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className = "justify-content-end">
                    <Nav>
                      <Nav.Link href="/about">About</Nav.Link>
                      <Nav.Link href = "/contact"> Contact Us </Nav.Link>
                      <Nav.Link href="/cart">Cart</Nav.Link>
                    </Nav>
              </Navbar.Collapse>
            </Navbar>
    )
}