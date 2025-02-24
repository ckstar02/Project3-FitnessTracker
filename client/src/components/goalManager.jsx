import React, { useState } from 'react';

export const GoalManager = () => {
    const [goals, setGoals] = useState([[],[]]);
    const [subject, setSubject] = useState('');
    const [description, setDescription] = useState('');
    const [isPopupVisible, setPopupVisible] = useState(false);

    const addGoal = () => {
        setPopupVisible(true);
    };

    const submitGoal = () => {
        const newGoals = [...goals];
        newGoals[0].push(subject);
        newGoals[1].push(description);
        setGoals(newGoals);

        setSubject('');
        setDescription('');
        setPopupVisible(false);
    }
}