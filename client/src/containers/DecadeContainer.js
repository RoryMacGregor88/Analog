import React, { Component } from 'react';
import Card from "../components/Card";

class DecadeContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 

        const cards = this.props.items.map((item) => {
            
            return <Card 
                        key={item.serialNumber}
                        item={item}
                        displayFunction={this.props.displayFunction}
                    />
        })

        return ( 
            <div>
                <h1>{this.props.decade}</h1>
                {cards}
            </div>
         );
    }
}
 
export default DecadeContainer;