import React from "react";
import Navbar from "./Navbar";
import { Outlet } from 'react-router-dom';
import myPhoto from '../assets/myPhoto.jpg'
import { skills } from "../data/skillsData";
import github from "../assets/github.svg"
import linkedin from "../assets/linkedin.svg"
import downloadResume from "../assets/download.svg"
import mail from "../assets/gmailLogo.jpg"

const Homepage = (props) => {
    return (
        <>
            <div className="mainContent">
                <div className="clsMyNameSummaryOuterDiv">
                    <div className="clsMyName">
                        Hi, I'm Mayank <span className="clsWavingHand">👋</span>
                    </div>
                    <div className="clsMySummary">
                        Full-Stack Developer | Expertise in React JS & .NET | Building Scalable, Responsive, and High-Performance Web Applications with ADA compliance
                    </div>
                    <div className="clsMyLinks">
                        <a href="https://www.linkedin.com/in/mayankkumargarg/" target="_blank"><img src={linkedin} className="clsLinkedIn" title="LinkedIn" alt="LinkedIn"/></a>
                        <a href="https://github.com/mayankkrgarg" target="_blank"><img src={github} className="clsGitHub" title="GitHub" alt="GitHub"/></a>
                        <a href="mailto:mayankkumargarg11@gmail.com" target="_blank"><img src={mail} className="clsMail" title="Mail" alt="Mail"/></a>
                        <a href="https://tinyurl.com/yswfwmmx" target="_blank"><div className="clsDownloadResumeDiv" title="Download Resume">Download Resume <img src={downloadResume} className="clsDownloadImg" alt="Download"/></div></a>
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