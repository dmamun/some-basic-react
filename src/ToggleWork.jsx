import React, { useState } from "react";

const ToggleWork = () => {
  const [toggle, setToggle] = useState(false);

  const handleLogIn = () => {
    setToggle(true);
  };

  const handleLogOut = () => {
    setToggle(false);
  };

  return (
    <div>
      {!toggle ? (
        <div>
          <p onClick={handleLogIn}>Please Login</p>
          <p>Enter your information here....</p>
        </div>
      ) : (
        <div>
          <p onClick={handleLogOut}>You can LogOut </p>
          <p>Please come soon...</p>
        </div>
      )}
    </div>
  );
};

export default ToggleWork;
