import React from "react";
import {
  AppBar,
  Box,
  Button,
  CssBaseline,
  Toolbar,
  Typography,
} from "@mui/material";
import App from "../App";

function Header() {
  return (
    <>
      <Box sx={{}}>
        <AppBar position="">
          <Toolbar>
            <Typography variant="h5" sx={{ flexGrow: 1 }}>
              CONSTRUCTOR
            </Typography>
            <Button
              variant="contained"
              style={{ backgroundColor: "#00b3b3" }}
              onClick={() => {}}
            >
              Login
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

export default Header;
