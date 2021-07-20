import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authActions, userActions } from '../../../_actions';
import Results from './Results';

const TabView = (props) => {
    const dispatch = useDispatch();

    const authUser = useSelector(state => state.authReducer.user);
    const user = useSelector(state => state.userReducer.user);

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

    const [initialized, setInitialized] = useState(false)

    useEffect(() => {
        if (!initialized) {
            dispatch(authActions.getUser());
        }

        if (user) {
            setInputs(inputs => ({
                ...inputs,
                totalValues: {
                    pushups: user.pushups,
                    situps: user.situps,
                    squats: user.squats
                }
            }));
        }

        setInitialized(true);
    }, [user]);

    const handleFormSubmit = (results) => {
        const values = {
            ...results,
            name: authUser.name
        };

        dispatch(userActions.updateWorkout(values));

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