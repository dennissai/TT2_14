import React from "react";
import Project from "./Project"


const data =
[
  {
    "id": 1,
    "user_id": 4,
    "name": "RTF",
    "budget": 12000,
    "description": "Realtime Face Recogniton"
  },
  {
    "id": 2,
    "user_id": 1,
    "name": "SWT",
    "budget": 80000,
    "description": "Smart Watch Tracker"
  },
  {
    "id": 3,
    "user_id": 2,
    "name": "ULS",
    "budget": 11000,
    "description": "Upgrade Legacy System"
  }
]


const ProjectList = () => {
  //Replace this after getting the API
  const projects = data.map(json => <Project result={json} />)
  return <div>
    {projects}
  </div>;
};

export default ProjectList;
