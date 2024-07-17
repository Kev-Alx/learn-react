import React, { useState } from "react";
import AddUser from "./components/users/AddUser";
import List from "./components/users/List";
import Card from "./components/UI/Card";
import Modal from "./components/UI/Modal";
import "./index.css";

const DUMMY_LIST = [
  { name: "Eric", age: 17 },
  { name: "Harve", age: 19 },
];

function App() {
  const [list, setList] = useState(DUMMY_LIST);
  const [isValid, setIsValid] = useState(false);
  const [message, setMessage] = useState("");

  const addUserHandler = (name, age) => {
    if (verifyInput(name, age)) {
      setList((prevList) => {
        return [...prevList, { name: name, age: age }];
      });
    } else {
      setIsValid(!isValid);
    }
  };

  const modalCloseHandler = () => {
    setIsValid(!isValid);
  };

  const verifyInput = (name, age) => {
    if (age < 0) {
      setMessage("Age must at least be 0 or above");
      return false;
    }
    if (name.trim().length <= 0 || age === null) {
      setMessage("Name and Age inputs must at least contain a value");
      return false;
    }

    return true;
  };

  return (
    <>
      {isValid && <Modal onClick={modalCloseHandler} message={message} />}
      <div className="mid">
        <Card>
          <AddUser onAddUser={addUserHandler} />
        </Card>
        {list.length <= 0 && (
          <p className="not-found">No User Found, Try adding one?</p>
        )}
        {list.length > 0 && (
          <Card>
            <List listData={list} />
          </Card>
        )}
      </div>
    </>
  );
}

export default App;
