import { HashRouter as Router, Route, Link, useHistory } from 'react-router-dom';
import React from 'react';
import { useState } from 'react'; //for setting feelingsValue
import { useDispatch } from 'react-redux'; //only useDispatch is used.
import Button from '@material-ui/core/Button';
import Signature from '../Signature/Signature';




function Final(){
const history = useHistory();
const dispatch = useDispatch();

const restartSurvey = () => {
    const action = { type: 'CLEAR' };
    dispatch(action);
    history.push('/');
};

    return (
        <>
        <h1>Thank you!</h1>
        <Button variant="outlined" size="medium" onClick={restartSurvey}>Retake Survey</Button>
        <Signature />
        </>
    );
}

export default Final;