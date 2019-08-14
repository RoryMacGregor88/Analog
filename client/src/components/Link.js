import React from 'react';

const Link = (props) => {
    return (
        <a className={props.class} href={props.href}>{props.text}</a>
    )
}

export default Link;