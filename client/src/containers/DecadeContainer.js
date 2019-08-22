import React, { Component } from 'react';
import Card from "../components/Card";

class DecadeContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: false,
            filteredCards: []
        }
    this.reset = this.reset.bind(this);
    this.filterItems = this.filterItems.bind(this);
    this.handleOptionClick = this.handleOptionClick.bind(this);
    }

    handleOptionClick(evt) {
        this.filterItems(evt.target.value);

        this.setState({
            filter: !this.state.filter
        })
    }

    filterItems(filteredType) {

        const filteredItems = this.props.items.filter((item) => {
            return item.type === filteredType;
        })

        const filteredItemsCards = filteredItems.map((item) => {
            return <Card
                        item={item}
                        key={item.id}
                        displayFunction={this.props.displayFunction}
                    />
        })
        
        this.setState({
            filteredCards: filteredItemsCards
        })
    }

    reset() {
        this.setState({
            filter: false
        })
    }

    render() { 

        const cards = this.props.items.map((item) => {
            return <Card 
                        item={item}     
                        key={item.id}                 
                        displayFunction={this.props.displayFunction}
                    />
        })

        const options = [...new Set(
            this.props.items.map((item) => {
                return <option key={item.id}>{item.type}</option>;
            })
        )];

        return ( 
            <div>

                <div className="user-input-div">
        
                    <button className="user-input-btn post" onClick={this.props.itemForm}>post an ad</button>

                    <div className="user-input-search-div">
                        <input className="user-input-search" type="search" id="search" placeholder="search..."></input>
                        <button className="user-input-btn" htmlFor="search">search</button>
                    </div>

                    <div className="user-input-filter">
                        <select onChange={this.handleOptionClick} className="user-input-select">
                            <option defaultValue>filter by type</option>
                            {options}
                        </select>
                        <button className="user-input-btn" onClick={this.reset}>reset filter</button>
                    </div>

                </div>

                <h1 className="card-decade-h1">{this.props.decade}</h1>

                <div className="card-div">
                    {this.state.filter ? this.state.filteredCards : cards} 
                </div>
            </div>
         );
    }
}
 
export default DecadeContainer;