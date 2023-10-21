import "./style.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const UserDetails = () => {
  // const usersList = useSelector((state)=>state.users)
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getUsersList = async () => {
    const result = await axios.get(
      "https://crudcrud.com/api/f1d5666fc2774fc6a58683383513438c/users"
    );
    if (result.status === 200) {
      setUsers(result.data);
    }
    setIsLoading(false);
  };

  const deleteUsersList = async (id) => {
    const result = await axios.delete(
      `https://crudcrud.com/api/f1d5666fc2774fc6a58683383513438c/users/${id}`
    );
    if (result.status === 200) {
      getUsersList();
    }
  };

  useEffect(() => {
    getUsersList();
  }, []);

  return (
    <div className="userContainer">
      {isLoading ? <div className="loading"></div> : null}
      {!isLoading && users.length ? (
        <div className="usersList">
          {users.map((item) => {
            return (
              <div className="user" key={item._id}>
                {item.userName}
                <button
                  className="delete"
                  onClick={() => deleteUsersList(item._id)}
                >
                  X
                </button>
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};
