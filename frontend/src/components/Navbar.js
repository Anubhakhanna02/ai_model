import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <h2 className="logo">ForgetAI</h2>

            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/chat">Chat</Link>
                <Link to="/dashboard">Memory</Link>
                <Link to="/about">About</Link>
            </div>
        </nav>
    );
};

export default Navbar;