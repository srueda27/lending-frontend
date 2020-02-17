import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import '../prefixers/form.css';

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

        this.handleSubmitOwnerInfo = this.handleSubmitOwnerInfo.bind(this);
        this.myChangeHandler = this.myChangeHandler.bind(this);
    }


    /**
     * Method in charge of changing the state
     */
    myChangeHandler(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    /**
     * Method in charge of performing the call to the external API, sending the state
     */
    handleSubmitOwnerInfo(event) {
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

        event.preventDefault();
    }

    render() {
        return (
            <div className="form-container">
                <Router>
                    <div>
                        <Route exact path="/"
                            render={(props) => <BusinessInfo setParentState={this.myChangeHandler} isAuthed={true} onSubmit={this.handleSubmitBusinessInfo} />}
                        />
                        <Route path="/business"
                            render={(props) => <BusinessInfo setParentState={this.myChangeHandler} isAuthed={true} onSubmit={this.handleSubmitBusinessInfo} />}
                        />
                        <Route path="/owner"
                            render={(props) => <OwnerInfo setParentState={this.myChangeHandler} onSubmit={this.handleSubmitOwnerInfo} isAuthed={true} />}
                        />
                    </div>
                </Router>
            </div>
        );
    }
}
export default FormContainer;