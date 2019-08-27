import React, { Component } from 'react';

class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="home">
                <h1 className="vectro">
                    <span className="vectro-body big">ANALOG</span>
                    <span className="vectro-red big">I</span>
                    <span className="vectro-green big">I</span>
                    <span className="vectro-blue big">I</span>
                </h1>
            </div>
         );
    }
}
 
export default LandingPage;