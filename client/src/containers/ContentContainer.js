import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import DecadeContainer from "./DecadeContainer";
import HomeContainer from "./HomeContainer";
import BigCard from "../components/BigCard";
import AdForm from "../components/AdForm";

class ContentContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            showCard: false,
            sold: false,
            postAd: false,
            selectedItem: null,
            items: []
         }
    this.newAd = this.newAd.bind(this);
    this.showCard = this.showCard.bind(this);
    this.sellItem = this.sellItem.bind(this);
    this.postNewAd = this.postNewAd.bind(this);
    this.splitDecades = this.splitDecades.bind(this);
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

    showCard(item) {
        this.setState({
            selectedItem: item,
            showCard: !this.state.showCard
        })
    }

    newAd() {
        this.setState({
            postAd: !this.state.postAd
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
            postAd: !this.state.postAd
        }, 
        () => {
            this.postNewAd();
        })
    }

    postNewAd() {
        const url = "http://localhost:8080/items";

        const payload = this.createAdObject(this.state);
        // console.log(payload);

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
            showCard: !this.state.showCard
        })
    }

    handleFormBackClick() {
        this.setState({
            postAd: !this.state.postAd
        })
    }

    render() { 
        if (this.state.showCard) {

            const item = this.state.selectedItem;
            const sold = this.state.sold;

            return (
                <BigCard
                    key={item.serialNumber}
                    item={item}
                    sold={sold}
                    sellItem={this.sellItem}
                    goBack={this.handleBigCardBackClick}
                />
            )
        } else if (this.state.postAd) {
            return (
                <AdForm 
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
                            displayFunction={this.showCard}
                            newAd={this.newAd}
                        />}
                />
                <Route exact path="/60s"
                    render={
                        () => <DecadeContainer
                            decade="1960s"
                            items={this.splitDecades("SIXTIES")}
                            displayFunction={this.showCard}
                            newAd={this.newAd}
                        />}
                />
                <Route exact path="/70s"
                    render={
                        () => <DecadeContainer
                            decade="1970s"
                            items={this.splitDecades("SEVENTIES")}
                            displayFunction={this.showCard}
                            newAd={this.newAd}
                        />}
                />
                <Route exact path="/80s"
                    render={
                        () => <DecadeContainer
                            decade="1980s"
                            items={this.splitDecades("EIGHTIES")}
                            displayFunction={this.showCard}
                            newAd={this.newAd}
                        />}
                />
            </Switch>
        );
    }
}
 
export default ContentContainer;