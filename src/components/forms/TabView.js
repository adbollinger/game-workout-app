import React, { Component } from 'react';
import Results from './Results';

class TabView extends Component {
    results = {
        pushups: 0,
        situps: 0,
        squats: 0
    };

    constructor(props) {
        super(props);

        this.state = { showForm: true };
    }

    handleFormSubmit(results) {
        this.setState({ showForm: false });

        this.results = results;
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
                            <Results values={this.results} onReset={this.handleResetForm.bind(this)}></Results>
                    }
                </div>
            </div>
        )
    }
}

export default TabView;