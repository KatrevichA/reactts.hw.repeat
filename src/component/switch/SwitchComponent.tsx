import React from 'react';
import useToggle from "../../hooks/useToggle/useToggle";
import './SwitchComponent.module.css'

const SwitchComponent = () => {

    let {toggle, handleToggle} = useToggle(false);

    return (
        <div>
            <div>
                <input type="checkbox" id="switch"/>
                <label htmlFor="switch" onClick={() => {
                    console.log(toggle)
                    handleToggle()
                }}>Toggle</label>
                <h3>Actions {toggle ? "On" : "Off"}</h3>
            </div>
        </div>
    );
};

export default SwitchComponent;