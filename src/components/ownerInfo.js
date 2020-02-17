import React from 'react';

class OwnerInfo extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.onSubmit}>
                <fieldset>

                    <h3>Owner's Information</h3>
                    <label htmlFor="social_security_number">
                        Social Security Number:
                            <input
                            id="social_security_number"
                            type="text"
                            name="social_security_number"
                            onChange={this.props.setParentState}
                            required
                        />
                    </label>

                    <label htmlFor="owner_name">
                        Name:
                            <input
                            id="owner_name"
                            type="text"
                            name="owner_name"
                            onChange={this.props.setParentState}
                            required
                        />
                    </label>

                    <label htmlFor="owner_email">
                        Email:
                            <input
                            id="owner_email"
                            type="email"
                            name="owner_email"
                            onChange={this.props.setParentState}
                            required
                        />
                    </label>

                    <label htmlFor="owner_address">
                        Owner Address:
                            <input
                            id="owner_address"
                            type="text"
                            name="owner_address"
                            onChange={this.props.setParentState}
                            required
                        />
                    </label>

                    <label htmlFor="owner_city">
                        City:
                            <input
                            id="owner_city"
                            type="text"
                            name="owner_city"
                            onChange={this.props.setParentState}
                            required
                        />
                    </label>

                    <label htmlFor="owner_state">
                        State:
                            <input
                            id="owner_state"
                            type="text"
                            name="owner_state"
                            onChange={this.props.setParentState}
                            required
                        />
                    </label>

                    <label htmlFor="owner_postal_code">
                        Postal Code:
                            <input
                            id="owner_postal_code"
                            type="text"
                            name="owner_postal_code"
                            onChange={this.props.setParentState}
                            required
                        />
                    </label>

                </fieldset>

                <input
                    className="submit-btn"
                    type="submit"
                    name="submit"
                    value="Submit Form"
                />
            </form>
        );
    }
}
export default OwnerInfo