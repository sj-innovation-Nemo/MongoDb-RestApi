import React from "react";
import { Link } from "react-router-dom";


const Home = () => {
  const isLoginTrue = JSON.parse(localStorage.getItem("login"));

  const userNotLogin = () => (
    <>
      <div className="test">
        <h2>It seem's like you are not login</h2>
        <h3>
          If you have an account, then please <Link to="/login">Login</Link>
        </h3>
        <h3>
          Don't have an account, then please do{" "}
          <Link to="/register">Register</Link>
        </h3>
      </div>
    </>
  );
  return (
    <div style={{ marginTop: "470px" }}>
      {isLoginTrue && isLoginTrue.userLogin ? (
        <div className="home">
          <h1>Welcome Back User</h1>
        </div>
      ) : (
        <>{userNotLogin()}</>
      )}
    </div>
  );
};

export default Home;
