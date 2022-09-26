import React, { useState } from "react";
import "./AddUser.css";

const AddUser = () => {
  const [enteredUserName, updateUserName] = useState('');
  const [enteredAge, updateAge] = useState('');


  const addUserHandler = (event) => {
    event.preventDefault();
    console.log(enteredUserName, enteredAge);
  };

  const userNameHandler = (event) => {
    updateUserName(event.target.value)
    
  };

  const ageHandler = (event) => {
    updateAge(event.target.value)
  };

  return (
    <div className="area">
      <form onSubmit={addUserHandler}>
        <div>
          <label htmlFor="user_name">UserName : </label>
          <input  id="user_name" type="text" onChange={userNameHandler}/>
        </div>

        <div className="age">
          <label htmlFor="age">Age (Years): </label>
          <input  id="age" type="number" onChange = {ageHandler}></input>
        </div>
        <div>
       
          <button  type="submit" > ADD USER</button>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
