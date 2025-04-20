import React from "react";
import { Link } from 'react-router-dom';

const Navbar = (props) =>{
    const navigationItems = [{title:"Home",path:"/"},{title:"Experience",path:"/experience"},{title:"Projects",path:"/projects"}]

    return (
        <>
        <header className="navbarHeader">
        <nav className="navbarTag">
            <ul className="navbarList">
                <li className="navbarTitle">Portfolio</li>
                {navigationItems.map((item)=>{
                    return (<>
                    <li className="navbarListItem">
                        <Link to ={item.path}>{item.title}</Link>
                    </li>
                    </>)
                })}
            </ul>
        </nav>
        </header>
        </>
    )
}

export default Navbar;