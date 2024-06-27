import React, {FC, useState} from 'react';
import {IButton} from "../../models/IButton";


const Button:FC<IButton> = ({message,className, children}) => {

    const [counter, setCounter] = useState<number>(0)

    const counterHandler = () => {
        setCounter(counter+1)
    }

    return (
        <div>
            <span>{message}</span>
            <button className={className}
                    onClick={counterHandler}
            >{children} {counter}</button>
        </div>
    );
};

export default Button;