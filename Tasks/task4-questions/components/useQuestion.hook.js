import React, { useState } from 'react'



const useToggler = () => {
    const [toggle, setToggle] = useState(false);
    const toggler = () => {
        setToggle(!toggle)
    };

    return { toggle, toggler }
}

export default useToggler