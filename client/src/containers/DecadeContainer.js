import React, { Component } from 'react';
import Card from "../components/Card";

class DecadeContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            text: null
         }
    }
    render() { 

        const cards = this.props.items.map((item) => {
            
            return <Card 
                        item={item}     
                        key={item.serialNumber}                 
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