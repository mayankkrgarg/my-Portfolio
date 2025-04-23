import React from "react";
import Navbar from "./Navbar";
import { Outlet } from 'react-router-dom';
import {projectsJson} from '../data/ProjectsData'

const Projects = (props) => {
    console.log(projectsJson)
    const [selectedItem, setSelectedItem] = React.useState({})
    const handleClick = (item) => {
        console.log(id)
        console.log(selectedIDs.includes(id))
        if (selectedIDs.includes(id)) {
            console.log("inside if")
            const newArr = selectedIDs.filter((x) => x !== id)
            console.log(newArr)
            setSelectedIDs(newArr)
        }
        else {
            console.log("inside else")

            const newArr = [...selectedIDs, id]
            console.log(newArr)
            setSelectedIDs(newArr)
        }
    }
    return (
        <>
            <div className="clsProjectsPageOuterDiv">
                <div className="clsProfessionalProjects">
                    <div className="clsProjectsHeading">Projects</div>
                    <div className="clsProjectsData">
                        {projectsJson.map((item) => {
                            return (
                                <div key={item.id} className="clsProjectsItemOuterDiv">
                                    <div className="clsProjectsItemImgDiv">
                                        <img src={item.image} alt={item.projectName} title={item.projectName} className="clsProjectItemImg"/>
                                    </div>
                                    <div className="clsProjectsItemNameDiv">
                                        {item.projectName}
                                    </div>
                                    <div className="clsProjectsItemDescriptionDiv">
                                        {item.description}
                                    </div>
                                    <div className="clsProjectsItemDescriptionReadMore" onClick={(e)=>setSelectedItem(item)}>
                                        {"Read more..."}
                                    </div>
                                    
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}
export default Projects;