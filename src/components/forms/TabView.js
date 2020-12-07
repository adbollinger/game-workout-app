import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userActions } from '../../_actions';
import Results from './Results';

class TabView extends Component {

    constructor(props) {
        super(props);

        this.state = { 
            showForm: true,
            results: {
                pushups: 0,
                situps: 0,
                squats: 0
            },
            totalValues: {
                pushups: 0,
                situps: 0,
                squats: 0
            }
        };
    }

    handleFormSubmit(results) {
        this.setState({ showForm: false });
        const { user } = this.props;

        const values = {
            ...results,
            name: user
        };

        this.props.updateWorkout(values);

        this.setState({
            results: results,
            totalValues: this.props.users.user
        });
    }

    addWorkoutToDatabase() {
        // Send query and then show results with total results
    }

    handleResetForm() {
        this.setState({ showForm: true });
    }

    render() {
        const showForm = this.state.showForm;

        const form = React.Children.map(this.props.form, form => {
            const props = { onFormSubmit: this.handleFormSubmit.bind(this) };

            if (React.isValidElement(form)) {
                return React.cloneElement(form, props);
            }
            return form;

        });

        return (
            <div>
                <div>
                    {showForm ? form : null}
                </div>
                <div>
                    {
                        showForm ? null :
                            <Results values={this.state.results} totalValues={this.state.totalValues} onReset={this.handleResetForm.bind(this)}></Results>
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const { users, auth } = state;
    const { user } = auth;
    return { users, user }
};

const actions = {
    updateWorkout: userActions.updateWorkout
}

export default connect(mapStateToProps, actions)(TabView);