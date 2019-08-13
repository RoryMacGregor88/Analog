import React, { Component } from 'react';

class ContentContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            items: []
         }
    }

    componentDidMount() {
        const url = "http://localhost:8080/items";

        fetch(url)
            .then(res => res.json())
            .then((data) => {
                console.log(data._embedded.items);
                
                this.setState({
                    items: data._embedded.items
                })
            })
            .catch(err => console.log(err));
    }

    render() { 

        let names = this.state.items.map((item) => {
            return <h3 key={item.id}>{item.brand} {item.model}</h3>
        });

        return (
            <div>{names}</div>
        );
    }
}
 
export default ContentContainer;