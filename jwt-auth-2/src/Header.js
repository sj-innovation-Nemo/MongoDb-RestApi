import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import "./header.css";

const Header = ({ logoutUser, setLogoutUser }) => {
  const [login, setLogin] = useState("");

  useEffect(() => {
    hydrateStateWithLocalStorage();
  }, [logoutUser]);

  const logout = () => {
    localStorage.removeItem("login");
    setLogoutUser(true);
  };

  const hydrateStateWithLocalStorage = () => {
    if (localStorage.hasOwnProperty("login")) {
      let value = localStorage.getItem("login");
      try {
        value = JSON.parse(value);
        setLogin(value);
      } catch (e) {
        setLogin("");
      }
    }
  };
  return (
    <div className="header">
      <div className="text">
        <h2>JWT Authentication using MONGODB </h2>
      </div>
      <header style={{ marginTop: "0px" }}>
        {!logoutUser && login && login.userLogin ? (
          <Button
            className="button-2"
            style={{ width: "100px", marginRight: "20px" }}
            variant="contained"
            color="secondary"
            onClick={logout}
          >
            Logout
          </Button>
        ) : (
          <div className="test2">
            <Link to="/login">
              <Button
                className="button"
                style={{ width: "100px", marginRight: "20px" }}
                variant="contained"
                color="secondary"
              >
                Login
              </Button>
            </Link>
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;
