import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import DecadeContainer from "./DecadeContainer";
import HomeContainer from "./HomeContainer";
import NavBar from "../components/NavBar";

class ContentContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            items: []
         }
    this.splitDecades = this.splitDecades.bind(this);
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

    render() { 

        return (
            <div>
                <NavBar />
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
                                decade={"'50s"}

                                items={this.splitDecades("FIFTIES")}
                            />}
                    />
                    <Route exact path="/60s"
                        render={
                            () => <DecadeContainer
                                decade={"'60s"}

                                items={this.splitDecades("SIXTIES")}
                            />}
                    />
                    <Route exact path="/70s"
                        render={
                            () => <DecadeContainer
                                decade={"'70s"}
                                items={this.splitDecades("SEVENTIES")}
                            />}
                    />
                    <Route exact path="/80s"
                        render={
                            () => <DecadeContainer
                                decade={"'80s"}
                                items={this.splitDecades("EIGHTIES")}
                            />}
                    />
                </Switch>
            </div>
        );
    }
}
 
export default ContentContainer;