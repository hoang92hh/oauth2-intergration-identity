import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getToken } from "../services/localStorageService";
import Header from "./header/Header";
import {
  Alert,
  Box,
  Button,
  Card,
  CircularProgress,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
export default function Home() {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({});

  const [password, setPassword] = useState("");
  const [snackBarOpen, setSnackBarOpen] = useState(false);
  const [snackBarMessage, setSnackBarMessage] = useState("");
  const [snackType, setSnackType] = useState("error");

  //Create SnackBar component
  const handleCloseSnackBar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackBarOpen(false);
  };

  const showError = (message) => {
    setSnackType("error");
    setSnackBarMessage(message);
    setSnackBarOpen(true);
  };

  const showSuccess = (message) => {
    setSnackType("success");
    setSnackBarMessage(message);
    setSnackBarOpen(true);
  };

  const getUserDetails = async (accessToken) => {
    // const response = await fetch(
    //   `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${accessToken}`
    // );

    const response = await fetch(
      "http://localhost:8080/identity/users/my-info",
      {
        method: "GET",
        header: {
          Authorization: `Bear ${accessToken}`
        },
      }
    );

    const data = await response.json();

    console.log(data.result);    
    setUserDetails(data.result);
  };

  // add password event
  const addPassword = (event) => {
    event.preventDefault();

    getUserDetails(getToken());
    showSuccess("Your password has been created, you can use your password to login")
  };

  // Phan chay kiem tra khi load page
  useEffect(() => {
    const accessToken = getToken();

    if (!accessToken) {
      navigate("/login");
    }

    getUserDetails(accessToken);
  }, [navigate]);

  return (
    <>
      <Header></Header>
      {userDetails ? (
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          height="100vh"
          bgcolor={"#f0f2f5"}
        >
          <Card
            sx={{
              minWidth: 400,
              maxWidth: 500,
              boxShadow: 4,
              borderRadius: 2,
              padding: 4,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100%", // Ensure content takes full width
              }}
            >
       
              <p>Welcome back to Hoang Application,{userDetails.username}</p>
              <h1 className="name">{userDetails.name}</h1>
              <p className="email">{userDetails.email}</p>{" "}

              <ul>
                User's roles:
                {userDetails.roles?.map((item, index) => (
                  <li className="email" key={index}>
                    {item.name}
                  </li>
                ))}
              </ul>
              {!userDetails.noPassword && (
                <Box
                  component="form"
                  onSubmit={addPassword}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    width: "100%",
                  }}
                >
                  <Typography>Do you want to create password?</Typography>
                  <TextField
                    label="Password"
                    type="password"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    fullWidth
                  >
                    Create password
                  </Button>
                </Box>
              )}

            </Box>
          </Card>
        </Box>
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "30px",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <CircularProgress></CircularProgress>
          <Typography>Loading ...</Typography>
        </Box>
      )}
    </>
  );
}
