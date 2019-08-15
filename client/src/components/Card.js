import React, { Component } from 'react';

class Card extends Component {

    render() { 

        const item = this.props.item;
        const displayFunction = this.props.displayFunction;

        return (
            <div className="card">
                <div className="top-card-div">
                    <h1>{item.year}</h1>
                    <h2>{item.brand} {item.model}</h2>
                </div>
                <img src={
                    item.type === "AMPLIFIER" ? "/images/8935.jpg" : "/images/sd1.jpg" } alt={item.model} />
                <div className="bottom-card-div">
                    <h3>£{item.price}</h3>
                    <button onClick={displayFunction.bind(this, item)}>more details</button>
                </div>
            </div>
           
        );
    }
}
 
export default Card;