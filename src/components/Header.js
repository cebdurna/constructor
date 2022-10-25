import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";

function Header() {
  return (
    <>
      <Box sx={{}}>
        <AppBar position="">
          <Toolbar>
            <Typography variant="h5" sx={{ flexGrow: 1 }}>
              CONSTRUCTOR
            </Typography>

            <Button variant="contained" style={{ backgroundColor: "#00b3b3" }}>
              Login
              {/* <Link to={"/login"}>Login</Link> */}
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

export default Header;
