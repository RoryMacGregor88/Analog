import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import DecadeContainer from "./DecadeContainer";
import HomeContainer from "./HomeContainer";
import BigCard from "../components/BigCard";
import ItemForm from "../components/ItemForm";

class ContentContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            bigCard: false,
            sold: false,
            itemForm: false,
            selectedItem: null,
            items: []
         }
    this.bigCard = this.bigCard.bind(this);
    this.itemForm = this.itemForm.bind(this);
    this.sellItem = this.sellItem.bind(this);
    this.postNewItem = this.postNewItem.bind(this);
    this.splitDecades = this.splitDecades.bind(this);
    this.createItemObject = this.createItemObject.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleFormBackClick = this.handleFormBackClick.bind(this);
    this.handleBigCardBackClick = this.handleBigCardBackClick.bind(this);
    }

    componentDidMount() {
        const url = "http://localhost:8080/items";

        fetch(url)
            .then(res => res.json())
            .then((data) => {
                
                this.setState({
                    items: data._embedded.items
                })
            })
            .catch(err => console.log(err));
    }

    splitDecades(decade) {
        let result = [];
        const items = this.state.items;

        for (let i = 0; i < items.length; i++) {
            if (items[i].decade === decade) {
                result.push(items[i]);
            }
        }
        return result;
    }

    bigCard(item) {
        this.setState({
            selectedItem: item,
            bigCard: !this.state.bigCard
        })
    }

    itemForm() {
        this.setState({
            itemForm: !this.state.itemForm
        })
    }

    sellItem() {
        this.setState({
            sold: !this.state.sold
        })
    }

    handleFormSubmit(formData) {
        this.setState({
            items: [...this.state.items, formData],
            itemForm: !this.state.itemForm
        }, 
        () => {
            this.postNewItem(formData);
        })
    }

    createItemObject(data) {
        const itemObject = {
            "type": data.type,
            "brand": data.brand,
            "model": data.model,
            "serialNumber": data.serialNumber,
            "year": data.year,
            "decade": data.decade,
            "price": data.price,
            "description": data.description 
        }
        return itemObject;
    }

    postNewItem(formData) {
        const url = "http://localhost:8080/items";

        const payload = this.createItemObject(formData);
        console.log(payload);

        fetch(url, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        })
            .then(response => {
                console.log(response);
            })
            .catch(err => console.log(err));
    }


    handleBigCardBackClick() {
        this.setState({ 
            bigCard: !this.state.bigCard
        })
    }

    handleFormBackClick() {
        this.setState({
            itemForm: !this.state.itemForm
        })
    }

    render() { 
        if (this.state.bigCard) {

            const item = this.state.selectedItem;
            const sold = this.state.sold;

            return (
                <BigCard
                    key={item.id}
                    item={item}
                    sold={sold}
                    sellItem={this.sellItem}
                    goBack={this.handleBigCardBackClick}
                />
            )
        } else if (this.state.itemForm) {
            return (
                <ItemForm 
                    goBack={this.handleFormBackClick}
                    handleFormSubmit={this.handleFormSubmit}
                />
            )
        }
        return (
            <Switch>
                <Route exact path="/"
                    render={
                        () => <HomeContainer
                            word="Home"
                        />}
                />
                <Route exact path="/50s"
                    render={
                        () => <DecadeContainer
                            decade="1950s"
                            items={this.splitDecades("FIFTIES")}
                            displayFunction={this.bigCard}
                            itemForm={this.itemForm}
                        />}
                />
                <Route exact path="/60s"
                    render={
                        () => <DecadeContainer
                            decade="1960s"
                            items={this.splitDecades("SIXTIES")}
                            displayFunction={this.bigCard}
                            itemForm={this.itemForm}
                        />}
                />
                <Route exact path="/70s"
                    render={
                        () => <DecadeContainer
                            decade="1970s"
                            items={this.splitDecades("SEVENTIES")}
                            displayFunction={this.bigCard}
                            itemForm={this.itemForm}
                        />}
                />
                <Route exact path="/80s"
                    render={
                        () => <DecadeContainer
                            decade="1980s"
                            items={this.splitDecades("EIGHTIES")}
                            displayFunction={this.bigCard}
                            itemForm={this.itemForm}
                        />}
                />
            </Switch>
        );
    }
}
 
export default ContentContainer;