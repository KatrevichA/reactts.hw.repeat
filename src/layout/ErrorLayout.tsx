import React from 'react';
import LayoutComponent from "../component/layout/LayoutComponent";
import {Outlet} from "react-router-dom";

const ErrorLayout = () => {
    return (
        <div>
            <h1>ERROR ERROR ERROR</h1>
            <LayoutComponent/>
            <Outlet/>
            
        </div>
    );
};

export default ErrorLayout;