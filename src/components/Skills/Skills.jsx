import React from 'react';

const Tile = function ({ name }) {
    const buttonStyles = {
        padding: '8px 16px',
        fontSize: '0.9rem',
        borderRadius: '5px',
        border: '0px solid',
        backgroundColor: '#eaeaea',
        color: '#000',
        cursor: 'pointer',
        transition: 'background-color 0.3s, color 0.3s',
    };

    return (
        <div style={{ marginBottom: '8px' }}>
            <button
                style={buttonStyles}
                onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = '#ff0000';
                    e.currentTarget.style.color = '#fff';
                }}
                onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = '#eaeaea';
                    e.currentTarget.style.color = '#000';
                }}
            >
                {name}
            </button>
        </div>
    );
};

export default function Skills() {
    return (
        <div style={styles.container}>
            <div style={styles.category}>
                <div style={styles.categoryTitle}>Programming Languages</div>
                <div style={styles.tiles}>
                    <Tile name={"C++"} />
                    <Tile name={"Java"} />
                    <Tile name={"JavaScript"} />
                    <Tile name={"C"} />
                </div>
            </div>

            <div style={styles.category}>
                <div style={styles.categoryTitle}>Backend Technologies</div>
                <div style={styles.tiles}>
                    <Tile name={"Node.js"} />
                    <Tile name={"Express.js"} />
                    <Tile name={"Spring Boot"} />
                </div>
            </div>

            <div style={styles.category}>
                <div style={styles.categoryTitle}>Frontend Frameworks</div>
                <div style={styles.tiles}>
                    <Tile name={"React"} />
                    <Tile name={"Bootstrap"} />
                    <Tile name={"HTML"} />
                    <Tile name={"CSS"} />
                </div>
            </div>

            <div style={styles.category}>
                <div style={styles.categoryTitle}>Databases</div>
                <div style={styles.tiles}>
                    <Tile name={"MongoDB"} />
                    <Tile name={"MySQL"} />
                    <Tile name={"SQL"} />
                </div>
            </div>

            <div style={styles.category}>
                <div style={styles.categoryTitle}>Other Libraries and Frameworks</div>
                <div style={styles.tiles}>
                    <Tile name={"Git"} />
                    <Tile name={"GitHub"} />
                </div>
            </div>

           
        </div>
    );
}

const styles = {
    container: {
        fontFamily: 'monospace, Courier New, Arial, sans-serif',
        color: '#000',
        padding: '20px',
        maxWidth: '1000px',
        margin: '0 auto',
        backgroundColor: '#fff',
    },
    category: {
        marginBottom: '20px',
    },
    categoryTitle: {
        fontSize: '1.2rem',
        fontWeight: 'bold',
        marginBottom: '10px',
        color: '#000',
    },
    tiles: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '10px',
    },
};
