import React, { Component } from 'react';
import Card from "../components/Card";

class DecadeContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: false,
            filteredCards: [],
            search: false,
            searchTerm: "",
            searchedCards: []
        }
    this.search = this.search.bind(this);
    this.resetFilter = this.resetFilter.bind(this);
    this.resetSearch = this.resetSearch.bind(this);
    this.filterItems = this.filterItems.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.createOptions = this.createOptions.bind(this);
    this.handleOptionClick = this.handleOptionClick.bind(this);
    }

    handleOptionClick(evt) {
        this.filterItems(evt.target.value);

        this.setState({
            filter: !this.state.filter
        })
    }

    handleSearch(evt) {
        this.setState({
            searchTerm: evt.target.value
        })
    }

    search() {
        const items = this.props.items;
        const term = this.state.searchTerm;
        let searchedItems = [];

        for (let i = 0; i < items.length; i++) {
            if (
                items[i].year.toString().includes(term)
                ||
                items[i].brand.toLowerCase().includes(term)
                ||
                items[i].model.toLowerCase().includes(term)
                ||
                items[i].description.toLowerCase().includes(term)
            ) {
                searchedItems.push(items[i])
            }
        }

        let searchedCards = searchedItems.map((item) => {
            return <Card
                item={item}
                key={item.id}
                displayFunction={this.props.displayFunction}
            />
        })

        this.setState({
            searchedCards: searchedCards,
            search: true
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

    createOptions(items) {
        let itemTypes = [];

        for (let i = 0; i < items.length; i++) {
            if (!itemTypes.includes(items[i].type)) {
                itemTypes.push(items[i].type)
            }
        }

        const options = itemTypes.map((type) => {
            return <option key={type}>{type}</option>
        })

        return options; 
    }

    resetSearch() {
        this.setState({
            search: false
        })
    }

    resetFilter() {
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

        const options = this.createOptions(this.props.items);

        return ( 
            <div>

                <div className="user-input-div">
        
                    <button className="user-input-btn post" onClick={this.props.itemForm}>post an ad</button>

                    <div className="user-input-search-div">
                        <input onChange={this.handleSearch} className="user-input-search" type="search" id="search" placeholder="search..."></input>
                        <button className="user-input-btn" onClick={this.search} htmlFor="search">search</button>
                        <button className="user-input-btn" onClick={this.resetSearch} htmlFor="search">clear search</button>
                    </div>

                    <div className="user-input-filter">
                        <select onChange={this.handleOptionClick} className="user-input-select">
                            <option defaultValue>filter by type</option>
                            {options}
                        </select>
                        <button className="user-input-btn" onClick={this.resetFilter}>reset filter</button>
                    </div>

                </div>

                <h1 className="card-decade-h1">{this.props.decade}</h1>

                <div className="card-div">
                    {
                        this.state.filter ? this.state.filteredCards 
                        :
                        this.state.search ? this.state.searchedCards
                        :
                        cards
                    } 
                </div>
            </div>
         );
    }
}
 
export default DecadeContainer;