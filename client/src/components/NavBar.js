import React from 'react';
import Link from './Link';
import "../css/style.css";

const NavBar = (props) => {
    return (
        <nav className="nav">
            <Link text="home" href="/"/>
            <Link text="50s" href="/50s"/>
            <Link text="60s" href="/60s"/>
            <Link text="70s" href="/70s"/>
            <Link text="80s" href="/80s"/>
        </nav>
    )
}
 
export default NavBar;