import React, { Component } from 'react';

class Card extends Component {
    render() { 

        const item = this.props.item;
        const displayFunction = this.props.displayFunction;

        return (
            <div onClick={displayFunction.bind(this, item)}>
                <h1>{item.model}</h1>
            </div>
           
        );
    }
}
 
export default Card;