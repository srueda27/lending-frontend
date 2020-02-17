import React from 'react';
import '../styles/form_container.css';

class FormContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tax_id: '',
            business_name: '',
            business_address: '',
            business_city: '',
            business_state: '',
            business_postal_code: '',
            requested_amount: '',
            social_security_number: '',
            owner_name: '',
            owner_email: '',
            owner_address: '',
            owner_city: '',
            owner_state: '',
            owner_postal_code: '',
            response: '',
            previous_requested_amount: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.myChangeHandler = this.myChangeHandler.bind(this);
    }

    myChangeHandler(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        const axios = require('axios');
        let data = JSON.stringify(this.state);
        let self = this;

        axios.post('/validate_loan', data)
            .then(function (response) {
                console.log(response);

                self.setState({
                    response: response['data']['decision'],
                    previous_requested_amount: response['data']['requested_amount']
                });
            })
            .catch(function (error) {
                console.log(error);
            });

        event.preventDefault()
    }

    render() {
        return (
            <div className="form-container">
                <h3>{this.state.response}</h3>
                <form onSubmit={this.handleSubmit}>
                    <fieldset>
                        <h3>Business's Information</h3>
                        <label htmlFor="tax_id">
                            Tax Id:
                                <input
                                id="tax_id"
                                type="text"
                                name="tax_id"
                                onChange={this.myChangeHandler}
                                required
                            />
                        </label>

                        <label htmlFor="business_name">
                            Business Name:
                                <input id="business_name"
                                type="text"
                                name="business_name"
                                onChange={this.myChangeHandler}
                                required
                            />
                        </label>

                        <label htmlFor="business_address">
                            Business Address:
                                <input id="business_address"
                                type="text"
                                name="business_address"
                                onChange={this.myChangeHandler}
                                required
                            />
                        </label>

                        <label htmlFor="business_city">
                            City:
                                <input id="business_city"
                                type="text"
                                name="business_city"
                                onChange={this.myChangeHandler}
                                required
                            />
                        </label>

                        <label htmlFor="business_state">
                            State:
                                <input id="business_state"
                                type="text"
                                name="business_state"
                                onChange={this.myChangeHandler}
                                required
                            />
                        </label>

                        <label htmlFor="business_postal_code">
                            Postal Code:
                                <input id="business_postal_code"
                                type="text"
                                name="business_postal_code"
                                onChange={this.myChangeHandler}
                                required
                            />
                        </label>

                        <label htmlFor="requested_amount">
                            Requested Amount:
                                <input id="requested_amount"
                                type="number"
                                min="0"
                                name="requested_amount"
                                onChange={this.myChangeHandler}
                                required
                            />
                        </label>
                    </fieldset>

                    <fieldset>
                        <h3>Owner's Information</h3>
                        <label htmlFor="social_security_number">
                            Social Security Number:
                            <input
                                id="social_security_number"
                                type="text"
                                name="social_security_number"
                                onChange={this.myChangeHandler}
                                required
                            />
                        </label>

                        <label htmlFor="owner_name">
                            Name:
                            <input
                                id="owner_name"
                                type="text"
                                name="owner_name"
                                onChange={this.myChangeHandler}
                                required
                            />
                        </label>

                        <label htmlFor="owner_email">
                            Email:
                            <input
                                id="owner_email"
                                type="email"
                                name="owner_email"
                                onChange={this.myChangeHandler}
                                required
                            />
                        </label>

                        <label htmlFor="owner_address">
                            Owner Address:
                            <input
                                id="owner_address"
                                type="text"
                                name="owner_address"
                                onChange={this.myChangeHandler}
                                required
                            />
                        </label>

                        <label htmlFor="owner_city">
                            City:
                            <input
                                id="owner_city"
                                type="text"
                                name="owner_city"
                                onChange={this.myChangeHandler}
                                required
                            />
                        </label>

                        <label htmlFor="owner_state">
                            State:
                            <input
                                id="owner_state"
                                type="text"
                                name="owner_state"
                                onChange={this.myChangeHandler}
                                required
                            />
                        </label>

                        <label htmlFor="owner_postal_code">
                            Postal Code:
                            <input
                                id="owner_postal_code"
                                type="text"
                                name="owner_postal_code"
                                onChange={this.myChangeHandler}
                                required
                            />
                        </label>

                    </fieldset>

                    <input
                        className="submit-btn"
                        type="submit"
                        name="submit"
                        value="Submit Form"
                        onClick={this.handleSubmit}
                    />
                </form>
            </div>
        );
    }
}
export default FormContainer;