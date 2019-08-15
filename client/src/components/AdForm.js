import React, { Component } from 'react';

class AdForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            type: "",
            brand: "",
            model: "",
            year: "",
            serialNumber: "",
            price: "",
            description: ""
         }
    this.yearSelect = this.yearSelect.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.change = this.change.bind(this);
    }

    handleSubmit(evt) {
        evt.preventDefault();
        this.props.handleFormSubmit(this.state);
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

    change(evt) {
        this.setState(
            { [evt.target.name]: evt.target.value }
        );
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
            <div className="form-content-div">
                <h1 className="form-h1">item details</h1>

                <div className="form-div">
                    <form onSubmit={this.handleSubmit}>
                        <select 
                            name="type" 
                            required
                            onChange={evt => this.change(evt)}
                        >
                            {options}
                        </select>

                        <input 
                            name="brand" 
                            type="text" 
                            placeholder="brand" 
                            required
                            onChange={evt => this.change(evt)}
                        />

                        <input 
                            name="model" 
                            type="text" 
                            placeholder="model" 
                            required
                            onChange={evt => this.change(evt)}
                        />

                        <select 
                            name="year" 
                            required
                            onChange={evt => this.change(evt)}
                        >
                            <option defaultValue>year</option>
                            {this.yearSelect()}
                        </select>

                        <input 
                            name="serialNumber" 
                            type="text" 
                            placeholder="serial number" 
                            maxLength="4" 
                            pattern="\d{4}" 
                            required
                            onChange={evt => this.change(evt)} 
                        />
                        
                        <input 
                            name="price"
                            type="text" 
                            placeholder="price" 
                            required
                            onChange={evt => this.change(evt)}
                        />
                        
                        <textarea 
                            name="description"
                            placeholder="description..." 
                            maxLength="250" 
                            required
                            onChange={evt => this.change(evt)}
                        />
                        
                        <input 
                            type="submit" 
                            value="post ad"
                        />
                    </form>
                </div>

                <button onClick={goBack}>go back</button>
            </div>
         );
    }
}
 
export default AdForm;