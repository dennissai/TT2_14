import React from "react";
import ProjectList from "../components/ProjectList";

//TODO: this is the List of projects
const Home = () => {
  return (
    <div>
      <div>This is home component (Redirect to project list)</div>
      <ProjectList />
    </div>
    // <main>
    //   <ProjectList />
    // </main>
  );
};

export default Home;
