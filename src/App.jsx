import './App.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faBootstrap, faCss3Alt, faFacebook, faGithub, faHtml5, faJs, faReact, faSquareInstagram, faSquareWhatsapp, faTwitter } from '@fortawesome/free-brands-svg-icons';
import ListGroup from 'react-bootstrap/ListGroup';
import logo from './images/img1.png';
import Card from 'react-bootstrap/Card';
import img from './images/img2.png';





function App() {
 

  return (
    <>
     <div className='container'>
        <div className="nav">
          <Navbar expand="lg" className="bg-body-light fs-5">
            <Container>
             <Navbar.Brand href="#home" >Portfolio</Navbar.Brand>
             <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
               <Nav className="me-auto">
                 <Nav.Link href="#home">Home</Nav.Link>
                 <Nav.Link href="#about">About</Nav.Link>
                 <Nav.Link href="#skills">Skills</Nav.Link>
                 <Nav.Link href="#contact">Contact</Nav.Link>
            
               </Nav>
             </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
        <section id='home'>
          <div className='row'>
              <div className="col-md-6 d-flex justify-content-center align-items-center">
              <div>
                <h2 className="display-4 text-center">Hi, I'm Nikhil</h2>
                <h3 className='text-center'>I'm a <span className='changecontent'></span></h3>
                <p className="lead text-center">"Seasoned Full Stack Developer proficient in front-end and back-end technologies. Expertise in complete software development lifecycle, from design to deployment. Strong problem-solving skills and commitment to staying current with emerging technologies."</p>
               <div className='d-flex justify-content-center align-items-center p-2'> 
               <button className='btn btn-outline-dark rounded ' type='dowload' src=''  >Download CV  <FontAwesomeIcon icon={faDownload} /></button></div>
              </div>
              
            </div>
            <div className='col-md-6 d-flex justify-content-center align-items-center image mt-4'>
               <img src="https://i.pinimg.com/originals/81/17/8b/81178b47a8598f0c81c4799f2cdd4057.gif" alt=""  className='w-100'/>
            </div>
          </div>
        </section>
        <section id='about'>
           <h1 className='text-center'>About Me</h1>
           <div className='row'>
              <div className="col-md-6 mt-4">
                <img src={logo} alt="" className='w-75' />
              </div>
              <div className="col-md-6">
                <div className='mt-5'>
                  <p>Hello, I'm Nikhil, a Full Stack Developer with a passion for crafting innovative web solutions. With expertise in both front-end and back-end technologies, I thrive in the dynamic world of software development. My journey in coding has equipped me with the skills to tackle challenges across the entire development lifecycle, from conceptualization to deployment. I'm dedicated to staying ahead of the curve, constantly learning and adapting to emerging technologies to deliver cutting-edge solutions. Let's build something amazing together! </p>
                  <div className='mt-4'>
                  <ListGroup className='border border-white'>
                    <ListGroup.Item className='border border-white'><FontAwesomeIcon icon={faUser} />  Nikhil P</ListGroup.Item>
                    <ListGroup.Item className='border border-white'><FontAwesomeIcon icon={faPhone} />  7907882955</ListGroup.Item>
                    <ListGroup.Item className='border border-white'><FontAwesomeIcon icon={faEnvelope} />  nikhilnikhi444@gmail.com</ListGroup.Item>
                    <ListGroup.Item className='border border-white'><FontAwesomeIcon icon={faGithub} />  nikhilnikhi444</ListGroup.Item>
      
                  </ListGroup>
                </div>
                </div>
               
         
              </div>
           </div>
        </section>

        <section id='skills'>
          <h1 className='text-center mt-5'>Skills</h1>
          <div className="row">
             <div className="col-md-6 mt-4">
               <div className="row">
                <div className="col-md-6 d-flex justify-content-center align-items-center mt-5 ">
                <div>
                <Card style={{ width: '12rem' }} className='mt-4 rounded text-center border-transparent shadow card'>
                  <Card.Body style={{background:'orange'}}>
                   <FontAwesomeIcon icon={faHtml5} size='xl' />
                    <Card.Title>HTML</Card.Title>
                  </Card.Body>
                </Card>
                
                <Card style={{ width: '12rem' }} className='mt-4 rounded text-center border-transparent shadow card'>
                  <Card.Body  style={{background:'rgb(17, 158, 246)'}}>
                  <FontAwesomeIcon icon={faCss3Alt} size="xl" />
                    <Card.Title>CSS</Card.Title>
                  </Card.Body>
                </Card>
                </div>
                </div>
                <div className="col-md-6 d-flex justify-content-center align-items-center mt-5">
                <div>
                <Card style={{ width: '12rem' }} className='mt-4 rounded text-center border-transparent shadow card'>
                  <Card.Body style={{background:'rgb(120, 17, 246)'}}> 
                   <FontAwesomeIcon icon={faBootstrap} size="xl" />
                    <Card.Title>BOOTSTRAP</Card.Title>
                  </Card.Body>
                </Card>
                <Card style={{ width: '12rem' }} className='mt-4 rounded text-center border-transparent shadow card'>
                  <Card.Body style={{background:'yellow'}}>
                  <FontAwesomeIcon icon={faJs} size="xl" />
                    <Card.Title>JAVASCRIPT</Card.Title>
                  </Card.Body>
                </Card>
                <Card style={{ width: '12rem' }} className='mt-4 rounded text-center border-transparent shadow card'>
                  <Card.Body style={{background:'lightblue'}}>
                   <FontAwesomeIcon icon={faReact} size="xl" />
                    <Card.Title>REACT</Card.Title>
                  </Card.Body>
                </Card>
                </div>
                </div>
               </div>
             </div>
             <div className="col-md-6 d-flex justify-content-center align-items-center mt-4">
              <img src={img} alt="" className='w-100' />
             </div>
          </div>
        </section>
        <section id='contact'>
         <h1 className='text-center mt-5'>Contact Me</h1>
         <div className='cmain d-flex justify-content-center align-items-center mt-3 '>
            <div><FontAwesomeIcon icon={faFacebook} size="xl" className='me-3' /></div>
            <div><FontAwesomeIcon icon={faGithub} size="xl" className='me-3' /></div>
            <div><FontAwesomeIcon icon={faSquareInstagram} size="xl" className='me-3' /></div>
            <div><FontAwesomeIcon icon={faSquareWhatsapp} size="xl" className='me-3' /></div>
            <div><FontAwesomeIcon icon={faTwitter} size="xl" className='me-3' /></div>
         </div>
         <p className='text-center my-4'>
             © My Portfolio Design 2024, All Rights Reserved ® Nikhil</p>
        </section>
     </div>
    </>
  )
}

export default App
