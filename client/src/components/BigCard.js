import React, { Component } from 'react';

class BigCard extends Component {
    render(props) {

        const item = this.props.item;
        const goBack = this.props.goBack;
        const sellItem = this.props.sellItem;

        return (
            <div className="big-card-div">
                <img src={"/images/8935.jpg"} alt={item.model} />
                <div className="big-card">
                    <h1>{item.year}</h1>
                    <h3>{item.brand} {item.model}</h3>

                    <p>
                        {item.description} {item.description} {item.description} {item.description} {item.description} {item.description} {item.description} {item.description} {item.description} {item.description} {item.description} {item.description}
                    </p>

                    <button onClick={sellItem.bind(this)}>buy now</button>
                    <button onClick={goBack.bind(this)}>Back</button>
                    {this.props.sold && <span class="stamp sold">sold</span>}
                </div>
            </div>
        );
    }
}

export default BigCard;