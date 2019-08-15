import React, { Component } from 'react';

class Card extends Component {
    render() { 

        const item = this.props.item;
        const displayFunction = this.props.displayFunction;

        return (
            <div className="card" onClick={displayFunction.bind(this, item)}>
                <h1>{item.model}</h1>
                <h2>{item.brand}</h2>
                <img src={"/images/8935.jpg"} alt={item.model} />
                <h3>{item.year}</h3>
                <h3>{item.decade}</h3>
                <h3>£{item.price}</h3>
            </div>
           
        );
    }
}
 
export default Card;