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
                        key={item.serialNumber}                 
                        displayFunction={this.props.displayFunction}
                    />
        })

        const options = this.props.items.map((item) => {
            return <option key={item.serialNumber}>{item.type}</option>
        })

        return ( 
            <div>
                <div className="search-filter-div">
                    <button onClick={this.props.postAd}>post an ad</button>
                    <select onSelect={this.handleOptionClick}>
                        <option>filter by type</option>
                        {options}
                    </select>
                    <input type="search" id="search" placeholder="search..."></input>
                    <button htmlFor="search">search</button>
                </div>
                <h1 className="decade-h1">{this.props.decade}</h1>
                <div className="cards-div">
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