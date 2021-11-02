import { React, useEffect, useCallback, useState } from 'react'
import { useStateContext } from '../ReviewContext'


const useReviewLogic = () => {
    const { state, setter } = useStateContext();
    let { person, actualIndex, peopleArr } = state;
    console.log(state)

    useEffect(() => {
        person = peopleArr[0]

        setter({ ...state, person });
    }, []);

    const nextPerson = useCallback((ev) => {
        const isLastPerson = actualIndex === peopleArr.length - 1
        const firstPerson = peopleArr[0]
        const nextPerson = peopleArr[actualIndex + 1]
        const updatedIndex = peopleArr.indexOf(nextPerson)


        setter({ ...state, person: isLastPerson ? firstPerson : nextPerson, actualIndex: updatedIndex });
    }, [state]);

    const prevPerson = useCallback((ev) => {
        const isFirstPerson = actualIndex === 0
        const lastPerson = peopleArr[peopleArr.length - 1]
        const prevPerson = peopleArr[actualIndex - 1]
        const updatedIndex = peopleArr.indexOf(prevPerson)

        setter({ ...state, person: isFirstPerson ? lastPerson : prevPerson, actualIndex: updatedIndex })
    }, [state])

    const getRandomPerson = () => {
        const getRandomIndex = () => Math.floor(Math.random() * (peopleArr.length - 1));
        const randomIndex = getRandomIndex();
        const randomPerson = peopleArr[randomIndex];
        const isRandomIndexSameAsCurrent = actualIndex === randomIndex

        isRandomIndexSameAsCurrent ? getRandomPerson() : setter({ person: randomPerson, actualIndex: randomIndex });
    };

    return { nextPerson, prevPerson, getRandomPerson, person };
};

export default useReviewLogic