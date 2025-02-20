import axios from "axios";
import React, { useState } from "react";

function Login({props}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");


  const handleLogin = async (e) => {
    e.preventDefault();
    

    const loginData = { username, password };

    try {
      const response = await axios.get("http://localhost:5000/users",{params: {username, password},});

      //check if user exists and password matches
    //   const user = response.data.find(
    //     (user) =>
    //       user.username === loginData.username &&
    //       user.password === loginData.password
    //   );

      if (response.data.length > 0) {
        localStorage.setItem("loggedIn", "true");
        props.setIsLoggedIn(true);
        props.toggle();
        console.log('Login Successful');
      } else {
        setError("Invalid username or password");
      }
    } catch (err) {
      setError("Failed to connect to the API");
    }
  };


  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default Login;
