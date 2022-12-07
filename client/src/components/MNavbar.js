import React from 'react';
import '../Navbar.css'
import { Link } from 'react-router-dom';

function MNavbar() {
    return (
        <div className='navbar'>
            <div className='left'>
                <Link to='/'>Home</Link>
            </div>
            <div className='right'>
                <Link to='/forms'>Forms</Link>
                <Link to='/getall'>Data</Link>
            </div>
        </div>
    )
}

export default MNavbar