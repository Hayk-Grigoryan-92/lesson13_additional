import { useState } from "react";
import "./style.scss";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const UsersList = () => {
  const [userName, setUserName] = useState("");
  const dispatch = useDispatch();

  const navigate = useNavigate()

  const handleChange = (e) => {
    setUserName(e.target.value);
  };

  const handleNavigate = () => {
    navigate('/user_details')
  }

  const handleClick = () => {
    if (userName.length) {
      dispatch({ type: "ADD_USSER", payload: userName });
      postUsers();
      setUserName('')
      
    }
  };

   const postUsers = async () => {
    let result = await axios.post(
      "https://crudcrud.com/api/f1d5666fc2774fc6a58683383513438c/users/",
      { userName }   // piti tanq body 2-rd parametrov 
    );
  };


  return (
    <div className="addUserContainer">
      <div className="user">
        <input
          type="text"
          value={userName}
          name="userName"
          onChange={handleChange}
        />
        <button className="addButton" onClick={handleClick}>Add User</button>
        <button className="details" onClick={handleNavigate}>Details</button>
      </div>
    </div>
  );
};
