import React from 'react'
import { StateProvider } from "./ToursContext";
import Task2 from "./Task2";

const AppContext = () => {
    return (
        <>
            <StateProvider>
                <Task2 />
            </StateProvider>
        </>
    )
}

export default AppContext
