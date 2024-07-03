import React, {useState} from 'react';

const useToggle = (initValue: boolean) => {

    const [toggle, setToggle] = useState<boolean>(initValue)

    const handleToggle = () => setToggle((prevState) => !prevState);

    return {toggle, handleToggle};

}

export default useToggle;