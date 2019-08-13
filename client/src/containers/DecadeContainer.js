import React, { Component } from 'react';

class DecadeContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 

        const items = this.props.items.map((item) => {
            return <h2 key={item.serialNumber}>{item.year} {item.brand} {item.model}</h2>
        })

        return ( 
            <div>
                <h1>Test</h1>
                {items}
            </div>
         );
    }
}
 
export default DecadeContainer;