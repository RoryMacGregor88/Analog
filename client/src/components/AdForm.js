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

        const options = [
            <option key="0" defaultValue>type</option>,
            <option key="1">GUITAR</option>,
            <option key="2">BASS</option>,
            <option key="3">AMPLIFIER</option>,
            <option key="4">PEDAL</option>,
            <option key="5">SYNTHESIZER</option>,
            <option key="6">MICROPHONE</option>,
            <option key="7">STUDIO</option>
        ]

        return ( 
            <div>
                <h1>item details</h1>
                <form>
                    <select required>
                        {options}
                    </select>
                    <input type="text" placeholder="brand" required></input>
                    <input type="text" placeholder="model" required></input>
                    <select required>
                        <option defaultValue>year</option>
                        {this.yearSelect()}
                    </select>
                    <input type="text" placeholder="serial number" maxLength="4" pattern="\d{4}" required/>
                    <input type="text" placeholder="price" required></input>
                    <textarea placeholder="description..." maxLength="250" required></textarea>
                    <input type="submit" value="post ad"></input>
                </form>
                <button onClick={goBack}>go back</button>
            </div>
         );
    }
}
 
export default AdForm;