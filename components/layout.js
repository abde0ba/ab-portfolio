import React, {useEffect, useState} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {FaFacebook} from "react-icons/fa"
import {BsTwitter} from "react-icons/bs"
import {GrInstagram, GrMail} from "react-icons/gr"

import $ from "jquery";
import "animate.css/animate.min.css";

const Layout = ({children}) => {
  const [navColor, setNavColor] = useState(false);

  useEffect(() => {
    window.scroll(() => {
      if(window.scrollY >= 50){
        setNavColor(true)
      } else {
        setNavColor(false)
      }
    })
  }, [])
  
  return (
    <div>
      <div className='navbar-section'>
        <Navbar collapseOnSelect expand="lg" bg='dark' variant='dark' style={{zIndex: 999, position:'fixed', width:"100%"}}>
        
      <Container>
        <Navbar.Brand href="/"><h4>Abdelhakim Baraka</h4></Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-md`}
              aria-labelledby={`offcanvasNavbarLabel-expand-md`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <span></span>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="#about">About</Nav.Link>
                  <Nav.Link href="#services">Services</Nav.Link>
                  <Nav.Link href="#projects">Projects</Nav.Link>
                  <Nav.Link href="#contact" id='hire-link'>Hire Me</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
      </Container>
      
        </Navbar>
        </div>
        <main>{children}</main>
      <footer className='footer-section'>
        <Container>
          <h1>My Social Media</h1>
        <div className='footer-links'>
          <a href='https://www.facebook.com/abde.baraka.7'><FaFacebook/></a>
          <a href='https://twitter.com/AbdelhakimBara2'><BsTwitter /></a>
          <a href='https://www.instagram.com/abde0ba'><GrInstagram /></a>
          <a href="mailto:abdesoft1@gmail.com"><GrMail /></a>
        </div>
        </Container>
        <div className='footer-copyright'>
          <p>© {new Date().getFullYear()} Copyright Abdelhakim Baraka, All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default Layout