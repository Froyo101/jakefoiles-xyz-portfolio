import React from 'react';
import logo from './logo.svg';
import portrait from './Portrait.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Col, Container, Image, Nav, Navbar, Row } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <TitleBar></TitleBar>
      <Container className="content" fluid>
        <About></About>
      </Container>
      <header className="App-header">
        <img src={portrait} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

function TitleBar() {
  return (
    <Navbar className="sticky-top" bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand>Jake Foiles</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav>
          <Nav.Link href="#skills">Skills</Nav.Link>
          <Nav.Link href="#experience">Experience</Nav.Link>
          <Nav.Link href="#education">Education</Nav.Link>
          <Nav.Link href="#work">Work</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
          <Nav.Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume&#10515;</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

function About() {
  return (
    <Row>
      <Col className="my-auto">
        <p>Nice to meet you! My name is</p>
        <h1 className="sec-text">Jake Foiles.</h1>
        <p>I'm a software engineer based in the U.S. who's passionate about web technologies and solutions.</p>
      </Col>
      <Col>
        <img src={portrait} className="portrait" alt="portrait" width="256" height="256" />
      </Col>
    </Row>
  );
}

export default App;
