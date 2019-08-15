import React, { Component } from 'react';

class BigCard extends Component {
    render() {

        const item = this.props.item;
        const backFunction = this.props.backFunction;

        return (
            <div className="big-card-div">
                <img src={"/images/8935.jpg"} alt={item.model} />
                <div className="big-card">
                    <h1>{item.brand}</h1>
                    <p>{item.description} {item.description} {item.description} {item.description} {item.description} {item.description} {item.description} {item.description} {item.description} {item.description} {item.description} {item.description}</p>
                    <button onClick={backFunction.bind(this)}>Back</button>
                </div>
            </div>
        );
    }
}

export default BigCard;