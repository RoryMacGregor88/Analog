import React from 'react';
import Link from './Link';
import "../css/style.css";

const NavBar = (props) => {
    return (
        <nav className="nav">

            <div>
                <h1 className="vectro">
                    {/* must make logo "home" clickable */}
                    <span className="vectro-body">ANALOG</span>
                    <span className="vectro-red">I</span>
                    <span className="vectro-green">I</span>
                    <span className="vectro-blue">I</span>
                </h1>
                <h4 className="vectro vectro-h4">VINTAGE GEAR MARKETPLACE</h4>
            </div>

            <div className="nav-links-div">
                <Link text="50s" href="/50s" />
                <Link text="60s" href="/60s" />
                <Link text="70s" href="/70s" />
                <Link text="80s" href="/80s" />
            </div>
        </nav>
    )
}
 
export default NavBar;