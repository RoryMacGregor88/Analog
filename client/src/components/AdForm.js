import React, { Component } from 'react';

class AdForm extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    this.yearSelect = this.yearSelect.bind(this);
    }

    yearSelect() {
        let years = [];
        
        for (let i = 1950; i < 1990; i++) {
            years.push(i)
        }

        const optionYears = years.map((year) => {
            return <option key={year} value={year}>{year}</option>
        })
        
        return optionYears;
    }

    render() { 

        const goBack = this.props.goBack

        return ( 
            <div>
                <h1>item details</h1>
                <form>
                    <input type="text" placeholder="brand"></input>
                    <input type="text" placeholder="model"></input>
                    <select>
                        {this.yearSelect()}
                    </select>
                </form>
                <button onClick={goBack}>go back</button>
            </div>
         );
    }
}
 
export default AdForm;