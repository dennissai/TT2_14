import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Home from "./Home";

const Loginpage = () => {
  const [firstName, setFirstName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("success");
    navigate("/home");

    // if (firstName && password) {

    // }

    //TODO: Need to link to Home
  };

  return (
    <>
      <article>
        <form className='form' onSubmit={handleSubmit}>
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
          <button className='btn' type='submit'>
            Submit
          </button>
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
        {/* {isLogin && <Link to='/home'>Home</Link>} */}
      </article>
    </>
  );
};

export default Loginpage;
