import React, { Component } from 'react';

class Card extends Component {

    render() { 

        const item = this.props.item;
        const displayFunction = this.props.displayFunction;

        return (
            <div className="card">
                <div className="card-top-div">
                    <h1 className="card-top-div-h1">{item.year}</h1>
                    <h2 className="card-top-div-h2">{item.brand} {item.model}</h2>
                </div>
                <img className="card-img" src={"/images/" + item.id + ".jpg"} alt={item.model} />
                <div className="card-bottom-div">
                    <h3 className="card-bottom-div-h3">£{item.price}</h3>
                    <button className="card-btn" 
                            onClick={displayFunction.bind(this, item)
                            }>more details
                    </button>
                </div>
            </div>
           
        );
    }
}
 
export default Card;