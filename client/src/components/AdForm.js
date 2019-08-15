import React, { Component } from 'react';

class AdForm extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 

        const goBack = this.props.goBack

        return ( 
            <div>
                <h1>I am an ad form.</h1>
                <button onClick={goBack}>go back</button>
            </div>
         );
    }
}
 
export default AdForm;