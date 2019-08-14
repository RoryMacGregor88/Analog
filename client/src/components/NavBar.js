import React from 'react';
import Link from './Link';
import "../App.css";

const NavBar = (props) => {
    return (
        <nav>
            <Link class="link" text="home" href="/"/>
            <Link class="link" text="50s" href="/50s"/>
            <Link class="link" text="60s" href="/60s"/>
            <Link class="link" text="70s" href="/70s"/>
            <Link class="link" text="80s" href="/80s"/>
        </nav>
    )
}
 
export default NavBar;