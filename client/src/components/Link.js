import React from 'react';

const Link = (props) => {
    return (
        <a className="nav-link" href={props.href}>{props.text}</a>
    )
}

export default Link;