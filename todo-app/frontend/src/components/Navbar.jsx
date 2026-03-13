import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav style={{ padding: '10px 20px', background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(10px)', borderRadius: '12px', marginBottom: '40px', display: 'flex', gap: '20px' }}>
            <Link to="/" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Home</Link>
            <Link to="/tasks" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Tasks</Link>
            <Link to="/about" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>About</Link>
        </nav>
    );
};

export default Navbar;
