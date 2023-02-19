import { AppBar, Box, Toolbar, Typography, Container, Button, } from "@mui/material";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import { signOut } from "../../services/firebase/auth";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import HowToRegIcon from '@mui/icons-material/HowToReg';

function NavBar() {
  const navigate = useNavigate();

  const auth = useSelector((state) => state.auth);

  const onLogOutButtonClick = () => {
    signOut();
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <TextsmsOutlinedIcon
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Reddit Clone
          </Typography>

          <Box sx={{ flexGrow: 1 }}></Box>
          <TextsmsOutlinedIcon
            sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Reddit Clone
          </Typography>

          {auth.userId ? (
            <Box sx={{ flexGrow: 0 }}>
              <Button
                size="small"
                color="warning"
                variant="contained"
                onClick={onLogOutButtonClick}
              >
                Log out
              </Button>
            </Box>
          ) : (
            <Box sx={{ flexGrow: 0 }}>
              <Button
                variant="contained"
                color="warning"
                onClick={() => navigate("/sign-in")}
                sx={{ mr: 2 }}
                size={"small"}
              >
                <Typography
                  component={"span"}
                  sx={{ display: { xs: "none", md: "block" } }}
                >
                  Log In
                </Typography>

                <LoginOutlinedIcon
                  sx={{ display: { xs: "block", md: "none" } }}
                />
              </Button>
              <Button
                variant="contained"
                color= "secondary"
                onClick={() => navigate("/sign-up")}
                size={"small"}
              >
                <Typography
                  component={"span"}
                  sx={{ display: { xs: "none", md: "block" } }}
                >
                  Sign Up
                </Typography>
                <HowToRegIcon
                  sx={{ display: { xs: "block", md: "none" } }}
                />
              </Button>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;

