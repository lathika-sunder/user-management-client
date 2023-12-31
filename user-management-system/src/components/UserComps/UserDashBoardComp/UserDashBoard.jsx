import React from "react";
import { CssVarsProvider } from "@mui/joy/styles";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import UserNavbar from "../UserNavbarComp/UserNavbar";
import "./UserDashBoard.css";
import { Image } from "@mui/icons-material";
import LoginImage from "../../../assets/images/LoginImage.png";
import AdminNavbar from "../../AdminComps/AdminNavbar/AdminNavbar";
const UserDashboard = () => {
  return (
    <CssVarsProvider>
      <main className="dashboard-container">
        <div className="welcome-container">
          <div className="msg-container">
            <div className="message">
              <Typography
                variant="h1"
                className="welcome-msg"
                align="start"
                sx={{ mb: 2, pl: 2 }}
              >
                <h1>
                  <span>Hello,</span> User!
                </h1>
                <p className="sm-msg">We Welcome You</p>
              </Typography>
            </div>
            <div className="nav-bar">
              <UserNavbar />
            </div>
          </div>
          <div className="dashboard-img">
            <img src={LoginImage} alt="Working-girl-image"></img>
          </div>
        </div>
      </main>
    </CssVarsProvider>
  );
};

export default UserDashboard;
