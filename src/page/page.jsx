import React, { useState } from 'react';
import { Container, Row, Col, Nav , Button} from 'react-bootstrap';
import Skills from '../components/Skills/Skills';
import Experience from '../components/Experience/experience';
import Education from '../components/Education/Education';
import Projects from '../components/Projects/projects';
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from 'react-icons/fa'; // Import icons from react-icons
import resume from '../assets/Pranav_Mhargude.pdf';
//import profileImage from '../assets/pranav_very_nice.jpeg';
import "./page.css";

export default function Homepage() {
    const [hoveredIcon, setHoveredIcon] = useState(null);

    const handleMouseEnter = (icon) => setHoveredIcon(icon);
    const handleMouseLeave = () => setHoveredIcon(null);

    const iconStyles = (icon) => ({
        color: hoveredIcon === icon ? '#ff0000' : '#000', // Blue color on hover, black otherwise
        transition: 'color 0.3s ease', // Smooth transition for hover effect
    });

    return (
        <Container fluid>
            <Row>
                {/* Fixed Sidebar */}
                <Col md={2} className="bg-light vh-100 d-flex flex-column sidebar">
                    <Nav className="flex-column">
                        <Nav.Link href="#profile" className="nav-link-custom">Profile</Nav.Link>
                        <Nav.Link href="#experience" className="nav-link-custom">Experience</Nav.Link>
                        <Nav.Link href="#education" className="nav-link-custom">Education</Nav.Link>
                        <Nav.Link href="#projects" className="nav-link-custom">Projects</Nav.Link>
                        <Nav.Link href="#skills" className="nav-link-custom">Skills</Nav.Link>
                        <Nav.Link href="#contact" className="nav-link-custom">Contact</Nav.Link>
                        {/* <Nav.Link href="#" target="_blank" className="nav-link-custom">See Resume</Nav.Link> */}
                        {/* <Nav.Link href="#" target="_blank" className="nav-link-custom">Update</Nav.Link> */}
                    </Nav>
                </Col>

                {/* Main Content Centered */}
                <div className="main-content-wrapper">
                    <Col md={9} className="main-content p-4">
                        <div id="profile" className="mb-5">
                            <Row>
                                <Col md={8}>
                                    <h3>Pranav Mhargude</h3>
                                    <p>Student and Developer</p>
                                    <p>
                                        Greetings! I'm Pranav Mhargude, a BE graduate in computer engineering from Savitribai Phule Pune University at Marathwada Mitra Mandals Institute Of Technology, passionate about algorithm development and problem-solving. I aim to become a skilled software engineer, crafting impactful solutions with proficiency in languages like C++, Java, C and JavaScript. My background in algorithm design, data structures, and software engineering drives me to tackle complex challenges and innovate in the tech landscape.
                                    </p>
                                    <div className="d-flex justify-content-start mt-3">
                                        <a href="mailto:p18an1v@gmail.com" onMouseEnter={() => handleMouseEnter('email')} onMouseLeave={handleMouseLeave}>
                                            <FaEnvelope size={30} style={iconStyles('email')} className="mr-3 icon" />
                                        </a>
                                        <a href="https://github.com/p18an1v" onMouseEnter={() => handleMouseEnter('github')} onMouseLeave={handleMouseLeave}>
                                            <FaGithub size={30} style={iconStyles('github')} className="mr-3 icon" />
                                        </a>
                                        <a href="https://www.linkedin.com/in/pranav-mhargude-58b366234" onMouseEnter={() => handleMouseEnter('linkedin')} onMouseLeave={handleMouseLeave}>
                                            <FaLinkedin size={30} style={iconStyles('linkedin')} className="mr-3 icon" />
                                        </a>
                                        {/* <a href="https://www.instagram.com/rushil______/" onMouseEnter={() => handleMouseEnter('instagram')} onMouseLeave={handleMouseLeave}>
                                            <FaInstagram size={30} style={iconStyles('instagram')} className="mr-3 icon" />
                                        </a> */}
                                    </div>
                                    {/* Download Resume Button */}
                                    <div className="mt-4">
                                        <a href={resume} download="Pranav_Mhargude.pdf">
                                            <Button variant="outline-dark" className="download-btn">
                                             Download Resume
                                           </Button>
                                        </a>
                                    </div>
                                </Col>

                                {/* {Profile Image} */}
                                {/* <Col md={4}>
                                    <img  src={profileImage} roundedCircle width={300} height={400} alt="Profile" />
                                </Col> */}
                            </Row>
                        </div>

                        {/* Experience Section */}
                        <div id="experience" className="mb-5">
                            <h3>EXPERIENCE</h3>
                            <Experience />
                        </div>

                        {/* Education Section */}
                        <div id="education" className="mb-5">
                            <h3>EDUCATION</h3>
                            <Education />
                        </div>

                        {/* Projects Section */}
                        <div id="projects" className="mb-5">
                            <h3>PROJECTS</h3>
                            <Projects />
                        </div>

                        {/* Skills Section */}
                        <div id="skills" className="mb-5">
                            <h3>SKILLS</h3>
                            <Skills />
                        </div>

                        {/* Contact Section */}
                        <div id="contact" className="mb-5">
                            <h3>CONTACT ME</h3>
                            <p>If you want to know more about me, or just talk in general, get in touch <strong>p18an1v@gmail.com</strong>! 😉</p>
                            <div className="d-flex justify-content-start mt-3">
                                <a href="mailto:p18an1v@gmail.com" onMouseEnter={() => handleMouseEnter('email')} onMouseLeave={handleMouseLeave}>
                                    <FaEnvelope size={24} style={iconStyles('email')} className="mr-3 icon" />
                                </a>
                                <a href="https://github.com/p18an1v" onMouseEnter={() => handleMouseEnter('github')} onMouseLeave={handleMouseLeave}>
                                    <FaGithub size={24} style={iconStyles('github')} className="mr-3 icon" />
                                </a>
                                <a href="https://www.linkedin.com/in/pranav-mhargude-58b366234" onMouseEnter={() => handleMouseEnter('linkedin')} onMouseLeave={handleMouseLeave}>
                                    <FaLinkedin size={24} style={iconStyles('linkedin')} className="mr-3 icon" />
                                </a>
                                {/* <a href="https://www.instagram.com/rushil______/" onMouseEnter={() => handleMouseEnter('instagram')} onMouseLeave={handleMouseLeave}>
                                    <FaInstagram size={24} style={iconStyles('instagram')} className="mr-3 icon" />
                                </a> */}
                            </div>
                        </div>
                    </Col>
                </div>
            </Row>
        </Container>
    );
}

