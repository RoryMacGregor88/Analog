import React, { Component } from 'react';

class BigCard extends Component {
    render(props) {

        const item = this.props.item;
        const backFunction = this.props.backFunction;

        return (
            <div className="big-card-div">
                <img src={"/images/8935.jpg"} alt={item.model} />
                <div className="big-card">
                    <h1>{item.year}</h1>
                    <h3>{item.brand} {item.model}</h3>

                    <p>
                        {item.description} {item.description} {item.description} {item.description} {item.description} {item.description} {item.description} {item.description} {item.description} {item.description} {item.description} {item.description}
                    </p>

                    <button onClick={this.props.soldFunction.bind(this)}>buy now</button>
                    <br></br>
                    <button onClick={backFunction.bind(this)}>Back</button>
                    {this.props.sold && <h1>SOLD</h1>}
                </div>
            </div>
        );
    }
}

export default BigCard;