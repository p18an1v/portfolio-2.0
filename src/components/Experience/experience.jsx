import React from 'react';
//import './Experience.css'; // Import a CSS file if you have custom styles

export default function Experience() {
    return (
        <div style={styles.container}>
            <div style={styles.experienceTile}>
                <div style={styles.leftColumn}>
                    <img src="data:image/jpeg;base64,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" alt="PTC Logo" style={styles.logo} />
                </div>
                <div style={styles.rightColumn}>
                    <div style={styles.companyName}> Numetry Technologies</div>
                    <div style={styles.jobTitle}>Software Developer Intern</div>
                    <div style={styles.duration}>March 2024 - Sep 2024</div>
                    <ul style={styles.responsibilities}>
                        <li>Worked in the Backend Development team focusing on Spring Boot, Hibernate, MySQL, Nodejs and MongoDB technology.Developed a Login Registration Authentication API with full functionality for user and admin access</li>
                        <li>Implemented a single login portal where admins access the admin dashboard using their office-provided email, while users access their dashboard using their respective user emails.</li>
                        <li>Collaborated with team members to ensure seamless integration of the API with existing systems.</li>
                        <li> Participated in code reviews and debugging sessions to maintain code quality and resolve issues promptly.</li>
                    </ul>
                </div>
            </div>
            <br />
        </div>
    );
}

const styles = {
    container: {
        fontFamily: 'monospace, Courier New, Arial, sans-serif',
        color: '#333',
        margin: '0 auto',
        maxWidth: '1000px', 
        padding: '20px',
    },
    experienceTile: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '0px',
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
        maxHeight: '100%',
        borderRadius: '5px',
    },
    companyName: {
        fontSize: '1.2rem',
        fontWeight: 'bold',
        marginBottom: '5px',
    },
    jobTitle: {
        fontSize: '1rem',
        fontStyle: 'italic',
        marginBottom: '5px',
    },
    duration: {
        fontSize: '0.9rem',
        color: '#777',
        marginBottom: '10px',
    },
    responsibilities: {
        paddingLeft: '25px', 
        listStyleType: 'circle', 
        lineHeight: '1.6',
        fontSize: '0.95rem',
        color: '#555',
    },
};
