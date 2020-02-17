import React from 'react';

class BusinessInfo extends React.Component {
    render() {
        return (
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
        );
    }
}
export default BusinessInfo