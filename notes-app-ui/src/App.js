import React, { useState } from "react";
import Login from "./Login";

const App = () => {
  const [seen, setSeen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function togglePop() {
    setSeen(!seen);
  }

  function handleLogout() {
    localStorage.setItem("loggedIn", "false");
    console.log('Logged out');
  }

  return (
    <>
      {isLoggedIn ? (
        <>
          <p>Welcome, user!</p>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <button onClick={togglePop}>Login</button>
      )}
     {seen && <Login toggle={togglePop} setIsLoggedIn={setIsLoggedIn} />}
    </>

  );
};

export default App;
