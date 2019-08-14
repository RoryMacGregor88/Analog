import React, { Component } from 'react';

class BigCard extends Component {
    render() {

        const item = this.props.item;
        const backFunction = this.props.backFunction;

        return (
            <div>
                <h1>{item.brand}</h1>
                <img src={"/images/"+item.serialNumber+".jpg"} alt={item.model}/>
                <p>{item.description}</p>
                <button onClick={backFunction.bind(this)}>Back</button>
            </div>

        );
    }
}

export default BigCard;