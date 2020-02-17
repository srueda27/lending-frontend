import React from 'react';
import FormContainer from './components/formContainer';

class LoanApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            response: '',
            requested_amount: ''
        }

        this.myChangeHandler = this.myChangeHandler.bind(this);
    }

    myChangeHandler(event) {
        console.log(event);

        this.setState({
            response: event['data']['decision'],
            requested_amount: event['data']['requested_amount']
        });
    }

    render() {
        return (
            <div >
                {this.state.response === "" ? <FormContainer setParentState={this.myChangeHandler} /> : null}
                {this.state.response !== "" ? <h2>Your Loan Aplication of {this.state.requested_amount} has been {this.state.response}</h2> : null}
            </div>
        );
    }
}

export default LoanApp;