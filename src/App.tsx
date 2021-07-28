import React from 'react';
import portrait from './Portrait.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Col, Container, Image, Nav, Navbar, Row, RowProps } from 'react-bootstrap';

interface SectionProps {
  className: string,
}

const App: React.FC = () => {
  return (
    <div className="App">
      <TitleBar></TitleBar>
      <Container className="content">
        <About className="jumbo-section sec-bg"></About>
        <br></br>
        <h2 className="text-center">Skills</h2>
        <Skills className="section sec-bg" id="skills"></Skills>
        <br></br>
        <h2 className="text-center">Education</h2>
        <Education className="section sec-bg" id="education"></Education>
        <br></br>
        <h2 className="text-center">Experience</h2>
        <Experience className="section sec-bg" id="experience"></Experience>
      </Container>
      
    </div>
  );
}

const TitleBar: React.FC = () => {
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

const About: React.FC<React.HTMLProps<HTMLDivElement>> = (props) => {
  return (
    <Row className={props.className}>
      <Col className="my-auto" md="8" xs="auto">
        <p>Nice to meet you! My name is</p>
        <h1 className="sec-text">Jake Foiles.</h1>
        <p>I'm a software engineer based in Illinois who's passionate about web technologies and solutions.</p>
      </Col>
      <Col className="mx-auto" md="4" xs="auto">
        <img src={portrait} className="portrait" alt="portrait" width="256" height="256" />
      </Col>
    </Row>
  );
}

const Skills: React.FC<React.HTMLProps<HTMLDivElement>> = (props) => {
  return (
    <Row className={props.className}>
      {/*<h2 className="text-center">Skills</h2>*/}
      <p>I am:</p>
      <ul className="text-center">
        <li>Highly proficient at frontend web development using HTML, CSS, and JavaScript</li>
        <li>Proficient with Node.js/NPM development (particularly with the ReactJS framework)</li>
        <li>Proficient with SQL and Relational Database Management Systems</li>
        <li>Able to make use of Git for version control in projects</li>
        <li>Able to configure and use Linux for both development and production environments</li>
        <li>Generally familiar with C-like object-oriented languages, including Java, C#, and C++</li>
        <li>Generally familiar with PHP and Python scripting</li>
      </ul>
    </Row>
  );
}

const Education: React.FC<React.HTMLProps<HTMLDivElement>> = (props) => {
  return (
    <Row className={props.className}>
      <h3 className="sec-text">Bachelor of Science in Computer Science at University of Illinois Springfield (2018-2021)</h3>
      <p>I received my B.S. in Computer Science with a minor in Management Information Systems at UIS, where I was a Lincoln Merit Scholar and regular Dean’s List entrant, graduating <em>summa cum laude</em> in just three years with a GPA of 4.0.</p>
    </Row>
  )
}

const Experience: React.FC<React.HTMLProps<HTMLDivElement>> = (props) => {
  return (
    <Row className={props.className}>
      <h3 className="sec-text">Computer Technician at Hyperion Computers (2018-2021)</h3>
      <p>As a technician at Hyperion, I was responsible for building, repairing, and refurbishing a wide variety of computer systems, ranging from Windows desktop PCs to MacBooks, as well as executing key business processes such as customer data backups and shop hardware imaging. In this capacity I was also involved with the revision and overhaul of several business processes, including our Mac data backup and game console repair policies and procedures.</p>
    </Row>
  )
}

export default App;
