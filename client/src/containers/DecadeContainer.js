import React, { Component } from 'react';
import Card from "../components/Card";

class DecadeContainer extends Component {
    constructor(props) {
        super(props);
    this.handleOptionClick = this.handleOptionClick.bind(this);
    }

    handleOptionClick(evt) {
        alert("this works");
    }

    render() { 

        const cards = this.props.items.map((item) => {
            return <Card 
                        item={item}     
                        key={item.id}                 
                        displayFunction={this.props.displayFunction}
                    />
        })

        const options = this.props.items.map((item) => {
            return <option key={item.id}>{item.type}</option>
        })

        return ( 
            <div>
                <div className="user-input-div">
                    <button className="user-input-button" onClick={this.props.itemForm}>post an ad</button>
                    <select className="user-input-select" onSelect={this.handleOptionClick}>
                        <option defaultValue>filter by type</option>
                        {options}
                    </select>
                    <input type="search" id="search" placeholder="search..."></input>
                    <button className="user-input-button" htmlFor="search">search</button>
                </div>
                <h1 className="card-decade-h1">{this.props.decade}</h1>
                <div className="card-div">
                    {cards}
                    {cards}
                    {cards}
                    {cards}
                </div>
            </div>
         );
    }
}
 
export default DecadeContainer;