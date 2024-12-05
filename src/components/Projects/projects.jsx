import React, { useState } from 'react';
//import './Projects.css'; // Create a CSS file for styles

export default function Projects() {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const projects = [
        {
            name: "Book Store Web Application",
            description: "A user-friendly e-commerce store for books web application leveraging react for frontend and Spring boot for backend technologies for seamless book online book purchasing. Applying user authentication and authorization with the admin panel.",
            stack: ["React", "Spring Boot", "MYSQL"],
            link: "https://github.com/p18an1v/EBook_BE",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoNOrBX0dFl_0lW0ooDnvyhrjJD91XUeIAqQ&s",
           // image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlGig5hPC-t5SR7F7sM_K2qhEBkheDQHR8rQ&s",
        },
        {
            name: "Recharge Web Application",
            description: "A user-friendly recharge web application leveraging HTML/CSS, Servlet, and JSP technologies for seamless online mobile number recharges with integrated payment processing.",
            stack: ["HTML", "CSS", "Servlet", "JSP"],
            link: "https://github.com/p18an1v/Recharge-Application",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFMsqdnAuRqlSS4DHnQnav9RZVIUuqeL8Xmg&s",
        },
        {
            name: "EHR System For Smart Ambulance",
            description: "An Electronic Health Record (EHR) system tailored for smart ambulances, employing HTML/CSS, JavaScript, Servlets, JSP, and Google Maps API for efficient patient data management and real-time navigation..",
            stack: ["HTML", "CSS", "JS", "Servlet", "JSP", "Google Map API"],
            link: "https://github.com/p18an1v/EHR-System-For-Smart-Ambulance-",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMyTGJA7JW3gWrXsI4RbGV6qM6whIVubCEyg&s",
        },
        {
            name: "Weather Web App",
            description: "A webpage allows users to search for weather information anywhere in the world or current location and for any past date.",
            stack: ["ReactJS"],
            link: "https://github.com/p18an1v/WeatherForecast-App",
            image: "data:image/png;base64,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",
        },
        {
            name: "Note IT / Notes Taking Web App",
            description: "A Note IT web application for taking and managing notes, developed using React for the frontend and Spring Boot for the backend, offering a seamless user experience.",
            stack: ["React", "Spring-BootI"],
            link: "https://github.com/p18an1v/Note-IT",
            image: "data:image/png;base64,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",
        },
        {
            name: "Honey Word Detection",
            description: "Honey word Detection: An advanced security application utilizing React for the frontend, Spring Boot for the backend, and MySQL for data storage, designed to detect unauthorized access attempts through the implementation of honey words.",
            stack: ["HTML", "CSS", "JS", "Servlet", "JSP"],
            link: "https://github.com/p18an1v/Honey-word-detection",
            image: "data:image/png;base64,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",
        },
    ];

    return (
        <div style={styles.container}>
            {projects.map((project, index) => (
                <div
                    key={index}
                    style={styles.projectTile}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <div style={styles.leftColumn}>
                        <img
                            src={project.image}
                            alt={`${project.name} Image`}
                            style={styles.logo}
                        />
                    </div>
                    <div style={styles.rightColumn}>
                        <div style={styles.projectName}>
                            <a href={project.link} target="_blank" rel="noopener noreferrer" style={styles.projectLink}>
                                {project.name}
                            </a>
                        </div>
                        <div style={styles.techStack}>
                            {project.stack.map((tech, idx) => (
                                <span key={idx} style={styles.techBadge}>{tech}</span>
                            ))}
                        </div>
                        <p style={styles.description}>{project.description}</p>
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={hoveredIndex === index ? { ...styles.githubLink, ...styles.githubLinkHover } : styles.githubLink}
                        >
                            GitHub Repo
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
}

const styles = {
    container: {
        fontFamily: 'monospace, Arial, sans-serif',
        color: '#000',
        margin: '0 auto',
        maxWidth: '1000px',
        padding: '20px',
        backgroundColor: '#fff',
    },
    projectTile: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '20px',
        padding: '15px',
        borderRadius: '10px',
        boxShadow: 'none',
        width: '100%',
        boxSizing: 'border-box',
    },
    leftColumn: {
        flex: '1 1 20%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    rightColumn: {
        flex: '1 1 80%',
        paddingLeft: '15px',
    },
    logo: {
        maxWidth: '100%',
        borderRadius: '5px',
    },
    projectName: {
        fontSize: '1.2rem',
        fontWeight: 'bold',
        marginBottom: '5px',
        color: '#000',
    },
    projectLink: {
        color: '#000',
        textDecoration: 'none',
    },
    techStack: {
        marginBottom: '10px',
    },
    techBadge: {
        display: 'inline-block',
        padding: '4px 8px',
        margin: '4px',
        backgroundColor: '#eaeaea',
        borderRadius: '4px',
        fontSize: '0.85rem',
    },
    description: {
        fontSize: '0.95rem',
        color: '#555',
        marginBottom: '10px',
    },
    githubLink: {
        display: 'inline-block',
        marginTop: '8px',
        padding: '8px 16px',
        backgroundColor: '#ff0000',
        color: '#fff',
        border: '1px solid #ff0000',
        borderRadius: '4px',
        textDecoration: 'none',
        fontSize: '0.85rem',
        lineHeight: '1',
        transition: 'background-color 0.3s ease, color 0.3s ease',
    },
    githubLinkHover: {
        backgroundColor: '#fff',
        color: '#ff0000',
    },
};
