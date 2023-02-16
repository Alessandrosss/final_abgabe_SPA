import React from "react";
import { QueryCache, useQuery } from "react-query";
import { getAllUsers } from "../api/userApi";

const WebApp = () => {
  const { data, status, error } = useQuery("getAllUsers", getAllUsers);

  return (
    <>
      <h1>WebApp</h1>

      {status === "loading" ? <div>Loading...</div> : null}
      {status === "error" ? console.log("error: " + error) : null}
      {status === "success" ? (
        <ul>
          {data.data.map((user) => (
            <li>{user.email}</li>
          ))}
        </ul>
      ) : null}
    </>
  );
};

export default WebApp;
