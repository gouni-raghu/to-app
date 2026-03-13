import React from 'react';

const AboutPage = () => {
    return (
        <div className="container">
            <div className="glass" style={{ padding: '3rem', marginTop: '2rem' }}>
                <h1>About TaskMaster Pro</h1>
                <p style={{ color: '#94a3b8', fontSize: '1.2rem' }}>
                    This app was built to demonstrate professional React patterns
                    including Routing, Page Architecture, and Modern CSS.
                </p>
            </div>
        </div>
    );
};

export default AboutPage;
