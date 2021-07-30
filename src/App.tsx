import React from 'react';
import Logo from './logo.png';
import Portrait from './Portrait.png';
import OpenJApp_1 from './OpenJApp_1.png';
import OpenJApp_2 from './OpenJApp_2.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Carousel, Col, Container, Nav, Navbar, Row } from 'react-bootstrap';

//Core application component - holds all other UI components
const App: React.FC = () => {
  return (
    <div className="App">
      <TitleBar></TitleBar>
      <Container>
        <About className="jumbo-section sec-bg"></About>
        <br></br>
        <h2 className="text-center" id="skills">Skills</h2>
        <Skills className="section sec-bg"></Skills>
        <br></br>
        <h2 className="text-center" id="education">Education</h2>
        <Education className="section sec-bg"></Education>
        <br></br>
        <h2 className="text-center" id="experience">Experience</h2>
        <Experience className="section sec-bg"></Experience>
        <br></br>
        <h2 className="text-center" id="work">Work</h2>
        <OpenJAppWork className="section sec-bg"></OpenJAppWork>
        <br></br>
        <h2 className="text-center" id="contact">Contact</h2>
        <Contact className="section sec-bg"></Contact>
        <br></br>
      </Container>
      <FooterBar></FooterBar>
    </div>
  );
}

//Provides a navigation bar for users
const TitleBar: React.FC = () => {
  return (
    <Navbar className="sticky-top" bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand>
          <img src={Logo} className="logo" alt="Logo" width="32" height="32"></img>
          Jake Foiles
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav>
          <Nav.Link href="#skills">Skills</Nav.Link>
          <Nav.Link href="#education">Education</Nav.Link>
          <Nav.Link href="#experience">Experience</Nav.Link>
          <Nav.Link href="#work">Work</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
          <Nav.Link href="./JakeFoiles.pdf" target="_blank" rel="noopener noreferrer">Resume&#10515;</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

//Large introductory section for site, providing basic info and a portrait
const About: React.FC<React.HTMLProps<HTMLDivElement>> = (props) => {
  return (
    <Row className={props.className}>
      <Col className="my-auto" lg="8" xs="auto">
        <p>Nice to meet you! My name is</p>
        <h1 className="sec-text">Jake Foiles.</h1>
        <p>I'm a software engineer based in Illinois who's passionate about web technologies and how they can be used to build excellent applications.</p>
      </Col>
      <Col className="mx-auto" lg="4" xs="auto">
        <img src={Portrait} className="portrait" alt="portrait" width="256" height="256" />
      </Col>
    </Row>
  );
}

//List of core tech skills - blank <Col> is for formatting (ensures list is to the right of "I am:")
const Skills: React.FC<React.HTMLProps<HTMLDivElement>> = (props) => {
  return (
    <Row className={props.className}>
      <p>I am:</p>
      <Col md="2" xs="1">
      </Col>
      <Col md="10" xs="auto">
        <ul className="">
          <li>Highly proficient at frontend web development using HTML, CSS, and JavaScript</li>
          <li>Proficient with Node.js/NPM development (particularly with the ReactJS framework)</li>
          <li>Proficient with SQL and Relational Database Management Systems</li>
          <li>Able to make use of Git for version control in projects</li>
          <li>Able to configure and use Linux for both development and production environments</li>
          <li>Generally familiar with C-like object-oriented languages, including Java, C#, and C++</li>
          <li>Generally familiar with PHP and Python scripting</li>
        </ul>
      </Col>
    </Row>
  );
}

//Education section - school/degree info
const Education: React.FC<React.HTMLProps<HTMLDivElement>> = (props) => {
  return (
    <Row className={props.className}>
      <h3 className="sec-text">Bachelor of Science in Computer Science at University of Illinois Springfield (2018-2021)</h3>
      <hr></hr>
      <p>I received my B.S. in Computer Science with a minor in Management Information Systems at UIS, where I was a Lincoln Merit Scholar and regular Dean’s List entrant, graduating <em>summa cum laude</em> in just three years with a GPA of 4.0.</p>
    </Row>
  );
}

//Experience section - former employer info
const Experience: React.FC<React.HTMLProps<HTMLDivElement>> = (props) => {
  return (
    <Row className={props.className}>
      <h3 className="sec-text">Computer Technician at Hyperion Computers (2018-2021)</h3>
      <hr></hr>
      <p>As a technician at Hyperion, I was responsible for building, repairing, and refurbishing a wide variety of computer systems, ranging from Windows desktop PCs to MacBooks, as well as executing key business processes such as customer data backups and shop hardware imaging. In this capacity I was also involved with the revision and overhaul of several business processes, including our Mac data backup and game console repair policies and procedures.</p>
    </Row>
  );
}

//Portfolio section - provides pictures of and info regarding OpenJApp project
const OpenJAppWork: React.FC<React.HTMLProps<HTMLDivElement>> = (props) => {
  return (
    <Row className={props.className}>
      <Carousel className="work-carousel mx-auto" controls={false} interval={8000}>
        <Carousel.Item>
          <img src={OpenJApp_1} className="d-block w-100 carousel-img" alt="OpenJApp Flashcard Mode" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={OpenJApp_2} className="d-block w-100 carousel-img" alt="OpenJApp Quiz Mode" />
        </Carousel.Item>
      </Carousel>
      <h3 className="sec-text text-center">OpenJApp (2021)</h3>
      <hr></hr>
      <p>During my final year at UIS I decided to build and deploy an open-source Japanese language learning utility using the ReactJS and React Bootstrap frameworks to aid myself and others in learning Kanji characters and vocabulary terms. The web app itself can be accessed on its subdomain at <a href="https://OpenJApp.jakefoiles.xyz">https://OpenJApp.jakefoiles.xyz</a>, and its source code is freely available on GitHub at <a href="https://github.com/Froyo101/OpenJApp">https://github.com/Froyo101/OpenJApp</a>.</p>
    </Row>
  );
}

//Contact section - info on how to reach me via GitHub, LinkedIn, and email
const Contact: React.FC<React.HTMLProps<HTMLDivElement>> = (props) => {
  return (
    <Row className={props.className}>
      <h3 className="sec-text">Get in touch!</h3>
      <hr></hr>
      <Col md="8">
        <p>If you're interested in working with me, reach out and let me know! Feel free to connect with me on LinkedIn, take a look at my work on GitHub, or shoot me an email.</p>
      </Col>
      <Col md="4">
        <p><a href="https://github.com/Froyo101">GitHub</a></p>
        <p><a href="https://www.linkedin.com/in/jake-foiles-0819b3215/">LinkedIn</a></p>
        <p><a href="mailto:jakehasmail@yahoo.com">Email</a></p>
      </Col>
    </Row>
  );
}

//Footer section - provides misc. site construction and licensing info
const FooterBar: React.FC = () => {
  return (
    <footer className="text-center text-light bg-dark">
      <p className="footer-info">Site designed and built by Jake Foiles using React, React-Bootstrap, and TypeScript.</p>
      <p>All code available under GNU GPL v3 License on <a href="https://Github.com/Froyo101/jakefoiles-xyz-portfolio">GitHub</a></p>
    </footer>
  );
}

export default App;