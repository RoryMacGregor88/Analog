import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import DecadeContainer from "./DecadeContainer";
import HomeContainer from "./HomeContainer";
import BigCard from "../components/BigCard";

class ContentContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            showCard: false,
            sold: false,
            selectedItem: null,
            items: []
         }
    this.showCard = this.showCard.bind(this);
    this.sellItem = this.sellItem.bind(this);
    this.splitDecades = this.splitDecades.bind(this);
    this.handleBackClick = this.handleBackClick.bind(this);
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

    sellItem() {
        this.setState({
            sold: !this.state.sold
        })
    }

    handleBackClick() {
        this.setState({ showCard: !this.state.showCard})
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
                    soldFunction={this.sellItem}
                    backFunction={this.handleBackClick}
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
                        />}
                />
                <Route exact path="/60s"
                    render={
                        () => <DecadeContainer
                            decade="1960s"
                            items={this.splitDecades("SIXTIES")}
                            displayFunction={this.showCard}
                        />}
                />
                <Route exact path="/70s"
                    render={
                        () => <DecadeContainer
                            decade="1970s"
                            items={this.splitDecades("SEVENTIES")}
                            displayFunction={this.showCard}
                        />}
                />
                <Route exact path="/80s"
                    render={
                        () => <DecadeContainer
                            decade="1980s"
                            items={this.splitDecades("EIGHTIES")}
                            displayFunction={this.showCard}
                        />}
                />
            </Switch>
        );
    }
}
 
export default ContentContainer;