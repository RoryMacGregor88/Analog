import React, { Component } from 'react';

class BigCard extends Component {
    render(props) { 

        const item = this.props.item;
        const goBack = this.props.goBack;
        const sellItem = this.props.sellItem;

        return (
            <div className="big-card-div">
                <img className="big-card-img" src={"/images/" + item.id + ".jpg"} alt={item.model} />
                <div className="big-card-layout">
                    <h1 className="big-card-h1">{item.year}</h1>
                    <h3 className="big-card-h3">{item.brand} {item.model}</h3>

                    <p className="big-card-p">
                        {item.description}
                    </p>

                    <button className="big-card-btn" onClick={sellItem.bind(this)}>buy now</button>
                    <button className="big-card-btn" onClick={goBack.bind(this)}>Back</button>
                    {this.props.sold && <span className="stamp sold">sold</span>}
                </div>
            </div>
        );
    }
}

export default BigCard;