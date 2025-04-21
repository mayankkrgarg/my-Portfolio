import React from "react";
import Navbar from "./Navbar";
import { Outlet } from 'react-router-dom';
import myPhoto from '../assets/myPhoto.jpg'
import { skills } from "../data/skillsData";

const Homepage = (props) => {
    return (
        <>
            <div className="mainContent">
                <div className="clsMyNameSummaryOuterDiv">
                    <div className="clsMyName">
                        Hi, I'm Mayank <span className="clsWavingHand">👋</span>
                    </div>
                    <div className="clsMySummary">
                        Full-Stack Developer | Expertise in React JS & .NET | Building Scalable, Responsive, and High-Performance Web Applications
                    </div>
                </div>
                <img src={myPhoto} className="clsMyImage" />
            </div>
            <div className="clsAboutSection">
                <div className="aboutHeader">About</div>
                <div className="clsAboutContent">
                    I'm a Full-Stack Developer passionate about building robust, scalable, and user-centric web applications. With solid expertise in .NET Core, React, SQL Server, MVC, and Entity Framework Core, I bring a balanced blend of front-end creativity and back-end efficiency to every project I work on.

                    <div className="clsAboutInnerHeader">💼 What I Bring to the Table</div>
                    End-to-end development of web applications using React and .NET Core

                    Performance tuning and optimization of SQL queries and stored procedures

                    Development and integration of RESTful APIs and third-party services

                    Consistent focus on code quality, debugging, and performance enhancements

                    Pixel-perfect UI implementation from Figma designs with responsive layouts

                    Application performance improvements through caching and smart optimization techniques

                    <div className="clsAboutInnerHeader">🛠️ Skills</div>
                    {skills.map((element,index)=>{return <div key={index} className="clsSkillsName">{`${element}`}</div>})}
                </div>
            </div>
        </>
    )
}
export default Homepage;