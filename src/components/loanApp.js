import React from 'react';
import { Route, BrowserRouter as Router, Redirect } from 'react-router-dom'

import FormContainer from './formContainer';

class LoanApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            response: '',
            requested_amount: ''
        }

        this.myChangeHandler = this.myChangeHandler.bind(this);
    }

    /**
     * Method in charge of changing the state
     */
    myChangeHandler(event) {
        console.log(event);

        this.setState({
            response: event['data']['decision'],
            requested_amount: event['data']['requested_amount']
        });
    }

    /**
     * If a decision has been made Redirect to the response page
     * If not, renders the form aplication
     */
    render() {
        if (this.state.response === "") {
            return (<FormContainer setParentState={this.myChangeHandler} />);
        } else {
            return (
                <Router>
                    <div>
                        <Redirect to='/response' />
                        <Route path="/response"
                            render={(props) => <h2>Your Loan Aplication of {this.state.requested_amount} has been {this.state.response}</h2>}
                        />
                    </div>
                </Router>
            );
        }
    }
}

export default LoanApp;