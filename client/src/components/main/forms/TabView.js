import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { workoutActions } from '../../../_actions';
import Results from './Results';

const TabView = (props) => {
    const dispatch = useDispatch();

    const workout = useSelector(state => state.workoutReducer.workout);

    const [inputs, setInputs] = useState({
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
    });

    useEffect(() => {
        if (workout) {
            setInputs(inputs => ({
                ...inputs,
                totalValues: {
                    pushups: workout.pushups,
                    situps: workout.situps,
                    squats: workout.squats
                }
            }));
        }
    }, [workout]);

    const handleFormSubmit = (results) => {
        dispatch(workoutActions.updateWorkout(results));

        setInputs(inputs => ({
            ...inputs,
            showForm: false,
            results
        }));
    }

    const handleResetForm = () => {
        setInputs(inputs => ({
            ...inputs,
            showForm: true
        }));
    }

    const form = React.Children.map(props.form, form => {
        const props = { onFormSubmit: handleFormSubmit };

        if (React.isValidElement(form)) {
            return React.cloneElement(form, props);
        }
        return form;
    });
    
    return (
        <div>
            {
                inputs.showForm ? form :
                    <Results values={inputs.results} totalValues={inputs.totalValues} onReset={handleResetForm}></Results>
            }
        </div>
    )
    
}

export default TabView;