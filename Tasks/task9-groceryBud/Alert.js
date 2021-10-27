import React, { useEffect, memo } from 'react'

const Alert = ({ msg, showAlert, list }) => {
    console.log('Alert')
    useEffect(() => {
        const timeout = setTimeout(() => {
            showAlert();
        }, 3000);
        return () => clearTimeout(timeout);
    }, [list]);

    return <p>{msg}</p>;
};

export default memo(Alert);