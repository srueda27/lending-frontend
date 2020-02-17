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
        };
    }

    myChangeHandler = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit = (event) => {
        const axios = require('axios');
        console.log('Hola');

        axios.post('/validate_loan', JSON.stringify(this.state))
            .then(function (response) {
                console.log('hey SUCCESS POST');
                console.log(response);
            })
            .catch(function (error) {
                console.log('hey ERROR POST');
                console.log(error);
            });
    }

    render() {
        return (
            <div className="form-container">
                <form>
                    <fieldset>
                        <legend>Business Information:</legend>
                        <label htmlFor="tax-id">
                            Tax Id:
                                <input
                                id="tax-id"
                                type="text"
                                name="tax-id"
                                onChange={this.myChangeHandler}
                                required
                            />
                        </label>

                        <label htmlFor="business-name">
                            Business Name:
                                <input id="business-name"
                                type="text"
                                name="business-name"
                                onChange={this.myChangeHandler}
                                required
                            />
                        </label>

                        <label htmlFor="business-address">
                            Business Address:
                                <input id="business-address"
                                type="text"
                                name="business-address"
                                onChange={this.myChangeHandler}
                                required
                            />
                        </label>

                        <label htmlFor="business-city">
                            City:
                                <input id="business-city"
                                type="text"
                                name="business-city"
                                onChange={this.myChangeHandler}
                                required
                            />
                        </label>

                        <label htmlFor="business-state">
                            State:
                                <input id="business-state"
                                type="text"
                                name="business-state"
                                onChange={this.myChangeHandler}
                                required
                            />
                        </label>

                        <label htmlFor="business-postal-code">
                            Postal Code:
                                <input id="business-postal-code"
                                type="text"
                                name="business-postal-code"
                                onChange={this.myChangeHandler}
                                required
                            />
                        </label>

                        <label htmlFor="requested-amount">
                            Requested Amount:
                                <input id="requested-amount"
                                type="number"
                                min="0"
                                name="requested-amount"
                                onChange={this.myChangeHandler}
                                required
                            />
                        </label>
                    </fieldset>

                    <fieldset>
                        <legend>Owner Information:</legend>
                        <label htmlFor="social-security-number">
                            Social Security Number:
                            <input
                                id="social-security-number"
                                type="text"
                                name="social-security-number"
                                onChange={this.myChangeHandler}
                                required
                            />
                        </label>

                        <label htmlFor="owner-name">
                            Name:
                            <input
                                id="owner-name"
                                type="text"
                                name="owner-name"
                                onChange={this.myChangeHandler}
                                required
                            />
                        </label>

                        <label htmlFor="owner-email">
                            Email:
                            <input
                                id="owner-email"
                                type="email"
                                name="owner-email"
                                onChange={this.myChangeHandler}
                                required
                            />
                        </label>

                        <label htmlFor="owner-address">
                            Owner Address:
                            <input
                                id="owner-address"
                                type="text"
                                name="owner-address"
                                onChange={this.myChangeHandler}
                                required
                            />
                        </label>

                        <label htmlFor="owner-city">
                            City:
                            <input
                                id="owner-city"
                                type="text"
                                name="owner-city"
                                onChange={this.myChangeHandler}
                                required
                            />
                        </label>

                        <label htmlFor="owner-state">
                            State:
                            <input
                                id="owner-state"
                                type="text"
                                name="owner-state"
                                onChange={this.myChangeHandler}
                                required
                            />
                        </label>

                        <label htmlFor="owner-postal-code">
                            Postal Code:
                            <input
                                id="owner-postal-code"
                                type="text"
                                name="owner-postal-code"
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