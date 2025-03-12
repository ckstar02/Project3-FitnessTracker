import React from 'react';
import {useNavigate} from 'react-router-dom';

export const homePageTab = () => {
    const navigate = useNavigate();
    navigate('/home');
}

export const personalGoalTab = () => {
    const navigate = useNavigate();
    navigate ('/personalGoal');
}

export const recipieSearchTab = () => {
    const navigate = useNavigate();
    navigate ('/recipeSearch');
}