import React from "react";

const UserContext = React.createContext({
  isAdmin: false,
  name: "",
  addUser: () => {},
  validateUser: () => {},
  isLoggedIn: false,
});

export default UserContext;
