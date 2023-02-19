import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signIn } from "../../services/firebase/auth";
import NavBar from "../../shared/components/NavBar";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

const initialError = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [error, setError] = useState(initialError);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    setError(initialError);

    const emailRegex = /^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/;

    let isValid = true;

    if (!emailRegex.test(emailValue)) {
      setError((prevState) => {
        return { ...prevState, email: "Email is invalid" };
      });

      isValid = false;
    }

    if (passwordValue.length < 6) {
      setError((prevState) => {
        return {
          ...prevState,
          password: "Password must be at least 6 characters",
        };
      });

      isValid = false;
    }

    if (!isValid) {
      return;
    }

    await signIn(emailValue, passwordValue);

    navigate("/");
  };

  return (
    <>
      <NavBar />
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="sm">
          <CssBaseline />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: 12,
              padding: 8,
              borderRadius: 3,
              backgroundColor: "#E1DA24",
              boxShadow:
                "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOpenIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Log in
            </Typography>
            <Box
              noValidate
              sx={{ mt: 3 }}
            >
              <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      margin="normal"
                      required
                      label="email"
                      fullWidth
                      error={error.email !== ""}
                      helperText={error.email}
                      value={emailValue}
                      onChange={(event) => setEmailValue(event.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="password"
                      type="password"
                      margin="normal"
                      required
                      fullWidth
                      error={error.password !== ""}
                      helperText={error.password}
                      value={passwordValue}
                      onChange={(event) => setPasswordValue(event.target.value)}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Button variant="contained" fullWidth type="submit" sx={{ mt: 3, mb: 2 }}>
                      Sign in
                    </Button>
                  </Grid>
                </Grid>
              </form>
              <Typography variant="subtitle1" paragraph={true} sx={{ mt: 2 }}>
                Don't have an account? <Link to="/sign-up">Sign up</Link>
              </Typography>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default SignIn;

