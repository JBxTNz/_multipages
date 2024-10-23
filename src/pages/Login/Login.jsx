import { useRef } from "react";
import Form from "react-bootstrap/Form";

import { verifyUser } from '../../data/user';

import "./Login.css";

function Login({ setToken, setRole }) {
  const userRef = useRef();
  const passRef = useRef();

  addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      const user = userRef.current.value.trim();
      const pass = passRef.current.value.trim();
      userRef.current.value = "";
      passRef.current.value = "";
      const userInfo = verifyUser(user, pass);
      if (userInfo) {
        setToken(userInfo.token);
        setRole(userInfo.role);
      }
    }
  });



  return (
    <div className="login-container">
      <h2>Login</h2>
      {/* <Form.Label htmlFor="username">Username</Form.Label> */}
      <div>
        <Form.Control
          type="text"
          id="username"
          placeholder="Username"
          style={{ textAlign: "center" }}
          ref={userRef}
        />
        {/* <span className="User-placeholder">
          User
        </span> */}
      </div>
      <br />

      {/* <Form.Label htmlFor="password">Password</Form.Label> */}
      <Form.Control
        type="password"
        id="password"
        placeholder="Password"
        style={{ textAlign: "center" }}
        ref={passRef}
      />
      {/* <span className="Pass-placeholder">password</span> */}
      <div className="login-btn">
        <button
          className="btn btn-success mt-3"
          onClick={() => {
            const user = userRef.current.value.trim();
            const pass = passRef.current.value.trim();
            userRef.current.value = "";
            passRef.current.value = "";
            const userInfo = verifyUser(user, pass);
            if (userInfo === null) {
              alert("Wrong username or password");
              userRef.current.focus();
            } else {
              setToken(userInfo.token);
              setRole(userInfo.role);
              navigate("./src/pages/Home"); // Redirect to Home after successful login
            }
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
