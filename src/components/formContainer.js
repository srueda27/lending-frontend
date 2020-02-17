import React from 'react';
import '../styles/form_container.css';

import BusinessInfo from './businessInfo';
import OwnerInfo from './ownerInfo';

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
            owner_postal_code: ''
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
        let self = this;

        axios.post('/validate_loan', JSON.stringify(self.state))
            .then(function (response) {
                console.log(response);

                self.props.setParentState(response);
            })
            .catch(function (error) {
                console.log(error);
            });

        event.preventDefault()
    }

    render() {
        return (
            <div className="form-container">
                <form onSubmit={this.handleSubmit}>
                    <BusinessInfo setParentState={this.myChangeHandler} />

                    <OwnerInfo setParentState={this.myChangeHandler} />

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