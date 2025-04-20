import React from "react";
import Navbar from "./Navbar";
import {  Outlet } from 'react-router-dom';

const Layout = (props) =>{
    return (
        <>
        <Navbar />
        <Outlet />
        </>
    )
}
export default Layout;