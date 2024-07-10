import React from 'react';
import LayoutComponent from "../component/layout/LayoutComponent";
import {Outlet} from "react-router-dom";

const MainLayout = () => {
    return (
        <div>
            <h2>LAYOUT</h2>
            <LayoutComponent/>
            <Outlet/>

        </div>
    );
};

export default MainLayout;