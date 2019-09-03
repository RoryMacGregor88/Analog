import React, { Component } from 'react';

class ItemForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            type: "",
            brand: "",
            model: "",
            year: "",
            serialNumber: "",
            price: "",
            description: "",
            decade: ""
         }
    this.change = this.change.bind(this);     
    this.yearSelect = this.yearSelect.bind(this);
    this.assignDecade = this.assignDecade.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
        this.setState({ 
            [evt.target.name]: evt.target.value 
        },() => 
            {this.assignDecade(this.state.year)}
        );
    }

    assignDecade(year) {
        return (year < 1960) ? 
            this.setState({ decade: "FIFTIES" }) 
        : (year >= 1960 && year < 1970) ? 
            this.setState({decade: "SIXTIES"}) 
        : (year >= 1970 && year < 1980) ? 
            this.setState({ decade: "SEVENTIES" }) 
        : (year > 1980) ? 
            this.setState({ decade: "EIGHTIES" }) 
        : "Invalid Year"
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
            <div className="form-component">            
                <h1 className="form-h1">POST ITEM</h1>

                <div className="form-content-div">
                    <form className="form-div" onSubmit={this.handleSubmit}>

                       <div className="form-item-div">
                            <select
                                name="type"
                                required
                                onChange={(evt) => this.change(evt)}
                            >
                                {options}
                            </select>
                       </div>

                        <div className="form-item-div">
                            <input
                                name="brand"
                                type="text"
                                placeholder="brand"
                                required
                                onChange={(evt) => this.change(evt)}
                            />
                        </div>

                        <div className="form-item-div">
                            <input
                                name="model"
                                type="text"
                                placeholder="model"
                                required
                                onChange={(evt) => this.change(evt)}
                            />
                        </div>

                       <div className="form-item-div">
                            <select
                                name="year"
                                required
                                onChange={(evt) => this.change(evt)}
                            >
                                <option defaultValue>year</option>
                                {this.yearSelect()}
                            </select>
                       </div>

                        <div className="form-item-div">
                            <input
                                name="serialNumber"
                                type="text"
                                placeholder="serial number"
                                maxLength="4"
                                pattern="\d{4}"
                                required
                                onChange={(evt) => this.change(evt)}
                            />
                        </div>
                        
                        <div className="form-item-div">
                            <input
                                name="price"
                                type="text"
                                placeholder="price"
                                required
                                onChange={(evt) => this.change(evt)}
                            />
                        </div>
                        
                        <div className="form-item-div">
                            <textarea
                                name="description"
                                placeholder="description..."
                                maxLength="250"
                                required
                                onChange={(evt) => this.change(evt)}
                            />
                        </div>
                        
                       <div className="form-item-div">
                            <input
                                type="submit"
                                value="post"
                            />
                       </div>
                    </form>
                </div>

                <div className="form-btn-div">
                    <button name="itemForm" className="form-btn" onClick={goBack}>back</button>
                </div>

            </div>
         );
    }
}
 
export default ItemForm;