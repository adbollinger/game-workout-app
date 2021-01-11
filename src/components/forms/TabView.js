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
            currentTotalValues: {
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
            name: user.name
        };

        this.props.updateWorkout(values);

        this.setState({
            results: results
        });
    }

    static getDerivedStateFromProps(nextProps, state) {
        const totalValues = state.currentTotalValues;
        const newTotalValues = nextProps.userReducer.user;

        if (newTotalValues !== totalValues && typeof newTotalValues !== 'undefined') {
            const newValues = {
                pushups: newTotalValues.pushups,
                situps: newTotalValues.situps,
                squats: newTotalValues.squats
            }
            return {
                ...state,
                totalValues: newValues,
                currentTotalValues: newValues,
            };
        }
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
    const { userReducer, authReducer } = state;
    const { user } = authReducer;
    return { userReducer, user }
};

const actions = {
    updateWorkout: userActions.updateWorkout
}

export default connect(mapStateToProps, actions)(TabView);