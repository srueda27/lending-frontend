import React from 'react';
import { Redirect } from 'react-router-dom'

class BusinessInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
        };

        this.handleSubmitBusinessInfo = this.handleSubmitBusinessInfo.bind(this);
    }

    /**
     * Method in charge of change the state
     */
    handleSubmitBusinessInfo(event) {
        this.setState({
            redirect: true
        });
        event.preventDefault();
    }

    /**
     * If the form was already submit Redirects to the Owner's page
     * If not, Renders the business information form
     */
    render() {
        if (this.state.redirect) {
            return <Redirect to='/owner' />
        }
        return (
            <form onSubmit={this.handleSubmitBusinessInfo}>
                <fieldset>
                    <h3>Business's Information</h3>
                    <label htmlFor="tax_id">
                        Tax Id:
                        <input
                            id="tax_id"
                            type="text"
                            name="tax_id"
                            onChange={this.props.setParentState}
                            required
                        />
                    </label>

                    <label htmlFor="business_name">
                        Business Name:
                        <input id="business_name"
                            type="text"
                            name="business_name"
                            onChange={this.props.setParentState}
                            required
                        />
                    </label>

                    <label htmlFor="business_address">
                        Business Address:
                        <input id="business_address"
                            type="text"
                            name="business_address"
                            onChange={this.props.setParentState}
                            required
                        />
                    </label>

                    <label htmlFor="business_city">
                        City:
                        <input id="business_city"
                            type="text"
                            name="business_city"
                            onChange={this.props.setParentState}
                            required
                        />
                    </label>

                    <label htmlFor="business_state">
                        State:
                        <input id="business_state"
                            type="text"
                            name="business_state"
                            onChange={this.props.setParentState}
                            required
                        />
                    </label>

                    <label htmlFor="business_postal_code">
                        Postal Code:
                        <input id="business_postal_code"
                            type="text"
                            name="business_postal_code"
                            onChange={this.props.setParentState}
                            required
                        />
                    </label>

                    <label htmlFor="requested_amount">
                        Requested Amount:
                        <input id="requested_amount"
                            type="number"
                            min="0"
                            name="requested_amount"
                            onChange={this.props.setParentState}
                            required
                        />
                    </label>
                </fieldset>

                <input
                    className="submit-btn"
                    type="submit"
                    name="submit"
                    value="Next"
                />

            </form>
        );
    }
}
export default BusinessInfo