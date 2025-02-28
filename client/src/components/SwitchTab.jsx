import React from 'react';
import {useNavigate} from 'react-router-dom';

export const homePageTab = () => {
    const navigate = useNavigate();
    navigate('/Home');
}

export const personalGoalTab = () => {
    const navigate = useNavigate();
    navigate ('/personalGoal');
}