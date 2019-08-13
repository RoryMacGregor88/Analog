import React, { Component } from 'react';

class HomeContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <h1>{this.props.word}</h1>
         );
    }
}
 
export default HomeContainer;