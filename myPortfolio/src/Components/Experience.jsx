import React from "react";
import Navbar from "./Navbar";
import { Outlet } from 'react-router-dom';
import { educationJson, experienceJson } from "../data/experienceData";
import rightArrow from "../assets/rightarrow.png"


const Experience = (props) => {
    const [selectedIDs, setSelectedIDs] = React.useState([])
    const handleClick =(id)=>{
        console.log(id)
        console.log(selectedIDs.includes(id))
        if(selectedIDs.includes(id)){
            console.log("inside if")
            const newArr = selectedIDs.filter((x)=> x !== id)
            console.log(newArr)
            setSelectedIDs(newArr)
        }
        else{
            console.log("inside else")
            
            const newArr = [...selectedIDs, id]
            console.log(newArr)
            setSelectedIDs(newArr)
        }
    }
    return (
        <div className="clsExperiencePageOuterDiv">
            <div className="clsProfessionalExperience">
                <div className="clsExperienceHeading">Work Experience</div>
                <div className="clsExperienceData">
                    {experienceJson.map((item) => {
                        return (
                            <div key={item.id} className="clsExperienceItemOuterDiv">
                                <div className="clsExperienceItemImgDiv">
                                    <img src={item.image} className="clsExperienceItemImg" />
                                </div>
                                <div className="clsExperienceItemContent">
                                    <div className="clsExperienceItemHeadersOuterDiv">
                                        <div className="clsExperienceNameAndDesignationOuterDiv" onClick={(e)=>handleClick(item.id)}>
                                            <div className="clsExperienceCompanyName">{item.companyName}<img src={rightArrow} className={`clsExperienceArrowImg ${selectedIDs.includes(item.id)?"clsExperienceOpen":""}`} /></div>
                                            <div className="clsExperienceDesignation">{item.designation}</div>
                                        </div>
                                        <div className="clsExperienceItemDuration">{`${item.startDate} - ${item.endDate}`}</div>
                                    </div>
                                    <div className={`clsExperienceItemDescription ${selectedIDs.includes(item.id)?"clsExperienceItemDescriptionOpen":""}`}><ul className="clsExperienceDescriptionList">
                                    {item.description.split("\n").map((element,index)=>{
                                        return <li key={index}>{element}</li>
                                    })}</ul></div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="clsEducation">
                <div className="clsEducationHeading">Education</div>
                <div className="clsEducationData">
                {educationJson.map((item) => {
                        return (
                            <div key={item.id} className="clsEducationItemOuterDiv">
                                <div className="clsEducationItemImgDiv">
                                    <img src={item.image} className="clsEducationItemImg" />
                                </div>
                                <div className="clsEducationItemContent">
                                    <div className="clsEducationItemHeadersOuterDiv">
                                        <div className="clsEducationNameAndDesignationOuterDiv">
                                            <div className="clsEducationCompanyName">{item.University}</div>
                                            {item.collegeName !== item.University && (<div className="clsEducationCollegeName">{item.collegeName}</div>)}
                                            <div className="clsEducationDesignation">{item.degree}{item.collegeName !== item.University && (<span className="clsEducationDesignation">{` (${item.stream})`}</span>)}</div>
                                            
                                        </div>
                                        <div className="clsEducationItemDuration">{`${item.startYear} - ${item.endYear}`}</div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
export default Experience;