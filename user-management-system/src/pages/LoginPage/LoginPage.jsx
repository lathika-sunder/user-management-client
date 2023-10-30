import React, { useState } from "react";
import { CssVarsProvider, useColorScheme } from "@mui/joy/styles";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import Link from "@mui/joy/Link";
import { green } from "@mui/material/colors";
import landingImage from "../../assets/images/login-image.png";
import "./LoginPage.css";
import logo from "../../assets/images/logo.png";
import axios from "axios";

export default function LoginPage() {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleMailChange = (event) => {
    const inputEmail = event.target.value;
    setMail(inputEmail);
    setEmailError(!isValidEmail(inputEmail));
  };
  
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async () => {};


  return (
    <CssVarsProvider>
      <main className="login-container">
        <div className="image-container">
          <img src={landingImage} alt="Login Image" />
        </div>
        <div className="form-container">
          <Sheet
            sx={{
              width: 250,
              mx: "auto", // margin left & right
              border: "10px ",
              py: 8, // padding top & bottom
              px: 3, // padding left & right
              display: "flex",
              flexDirection: "column",
              borderRadius: "sm",
              boxShadow: "md",
            }}
            variant="outlined"
          >
            <div className="logo-img">
              <img src={logo} alt="logo"></img>
            </div>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                style={{ fontSize: 10,color:"black" }}
                name="email"
                type="email"
                placeholder="name@email.com"
                onChange={handleMailChange}
                error={emailError}
              />
              {emailError && (
               <Typography variant="caption" color="error" fontSize={10} fontStyle={"italic"}>
              
                Enter a valid mail id
               
             </Typography>
             
              )}
            </FormControl>

            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input
                // html input attribute

                style={{ fontSize: 10 }}
                name="password"
                type="password"
                onChange={handlePasswordChange}
                placeholder="password"
              />
            </FormControl>

            <Button sx={{ mt: 1 /* margin top */ }} onClick={handleSubmit}>
              Login
            </Button>
          </Sheet>
        </div>
      </main>
    </CssVarsProvider>
  );
}