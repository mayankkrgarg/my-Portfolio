import React from "react";
import Navbar from "./Navbar";
import { Outlet } from 'react-router-dom';
import {projectsJson} from '../data/ProjectsData'

const Projects = (props) => {
    console.log(projectsJson)
    const [selectedIDs, setSelectedIDs] = React.useState([])
    const handleClick = (id) => {
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
                                        {item.projectName}
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