import React from "react";
import { Link } from 'react-router-dom';

const Navbar = (props) =>{
    const navigationItems = [{title:"Home",path:"/"},{title:"Experience",path:"/experience"},{title:"Projects",path:"/projects"}]

    return (
        <>
        <header className="navbarHeader">
        <nav className="navbarTag">
            <ul className="navbarList">
                <li key={0} className="navbarTitle">Portfolio</li>
                {navigationItems.map((item, index)=>{
                    return (
                    <li key={index+1} className="navbarListItem">
                        <Link to ={item.path}>{item.title}</Link>
                    </li>
                    )
                })}
            </ul>
        </nav>
        </header>
        </>
    )
}

export default Navbar;