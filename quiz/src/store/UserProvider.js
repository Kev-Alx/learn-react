import { useState } from "react";
import UserContext from "./user-context";

const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([
    { isAdmin: false, name: "Leo", password: "123" },
    { isAdmin: true, name: "Bebek", password: "456" },
  ]);

  const [activeUser, setActiveUser] = useState({
    isAdmin: false,
    name: "",
    password: "",
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const addUser = (user) => {
    if (user.name.trim().length === 0) return;
    if (user.password.trim().length === 0) return;
    // console.log(user);
    setUsers((prevUsers) => [...prevUsers, user]);
  };

  const loginHandler = (name, pass) => {
    if (validateUser(name, pass)) {
      const [user] = users.filter((user) => user.name === name);
      setActiveUser(user);
      setIsLoggedIn(true);
      // console.log(activeUser);
      return true;
    } else {
      // console.log("fail");
      return false;
    }
  };

  const validateUser = (name, pass) => {
    const [user] = users.filter((user) => user.name === name);
    return user?.password === pass;
  };

  const userContext = {
    name: activeUser.name,
    isAdmin: activeUser.isAdmin,
    addUser,
    loginHandler,
    users,
    isLoggedIn,
  };

  return (
    <UserContext.Provider value={userContext}>{children}</UserContext.Provider>
  );
};

export default UserProvider;
