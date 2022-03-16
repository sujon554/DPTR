import React from 'react';
import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const activeStyle = {
        fontWeight: "bold",
        fontSize: '1.2rem',
        textAlign: 'center',
        color: 'red'
      };
    return (
        <Container className='Navbar'>
           
                <NavLink className="navItem ml-3" activeStyle={ activeStyle} to="/home">Home</NavLink>
                <NavLink className="navItem" activeStyle={ activeStyle} to="/department">Department</NavLink>
                <NavLink className="navItem" activeStyle={ activeStyle} to="/dptr">DPTR Committee</NavLink>
                <NavLink className="navItem" activeStyle={ activeStyle} to="/ippolicy">IP Policy</NavLink>
                <input className="navItem mx-auto search" type="text" placeholder="Search Your Content" />
                <NavLink className="navItem" activeStyle={ activeStyle} to="/login">Login</NavLink>
        </Container>
    );
};

export default Navbar;