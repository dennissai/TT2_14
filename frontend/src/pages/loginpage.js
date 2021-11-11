<<<<<<< Updated upstream
import React from "react";

const Loginpage = () => {
  return <div></div>;
=======
import React, { useState } from "react";
import { Link } from "react-router-dom";
import App from "../App";
import Home from "./Home";

const Loginpage = (props) => {
  const [firstName, setFirstName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    <a href='./page'></a>;
    console.log("hello world");

    // if (firstName && password) {

    // }
  };

  return (
    <>
      <article>
        <form onSubmit={handleSubmit}>
          <div className='form-control'>
            <label htmlFor='firstName'>Username:</label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='password'>Password:</label>
            <input
              type='text'
              id='password'
              name='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type='submit'>Submit</button>
        </form>
        {/* {people.map((person) => {
          const { id, firstName, Email } = person;
          return (
            <div key={id} className='item'>
              <h4>{firstName}</h4>
              <p>{email}</p>
            </div>
          );
        })} */}
      </article>
    </>
  );
>>>>>>> Stashed changes
};

export default Loginpage;
