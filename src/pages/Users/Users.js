import React from "react";
import { Link } from "react-router-dom";

const Users = () => {
  return (
    <div>
      <h2>Users</h2>
      <Link to="/dashboard">Go To Dashboard</Link>
    </div>
  );
};

export default Users;
