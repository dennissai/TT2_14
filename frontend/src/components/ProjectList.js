import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const data = [
  {
    id: 1,
    user_id: 4,
    name: "RTF",
    budget: 12000,
    description: "Realtime Face Recogniton",
  },
  // {
  //   "id": 2,
  //   "user_id": 1,
  //   "name": "SWT",
  //   "budget": 80000,
  //   "description": "Smart Watch Tracker"
  // },
  // {
  //   "id": 3,
  //   "user_id": 2,
  //   "name": "ULS",
  //   "budget": 11000,
  //   "description": "Upgrade Legacy System"
  // }
];

const ProjectList = () => {
  //Replace this after getting the API
  //const projects = result.map(json => <Project result={json} />)
  const navigate = useNavigate();

  const handleList = (e) => {
    e.preventDefault();
    console.log("success");
    navigate("/Project");
  };

  return (
    <div>
      <h1>All Projects</h1>
      {data.map((item) => {
        const { id, user_id, name, budget, description } = item;
        return (
          <section>
            <h1>
              {id}, {name}, {budget}
            </h1>
            <p>{description}</p>
            <button onClick={handleList}>Details</button>
          </section>
        );
      })}
    </div>
  );
};

export default ProjectList;
