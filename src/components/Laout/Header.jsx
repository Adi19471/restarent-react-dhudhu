import React, { useState } from "react";
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";

import FastfoodIcon from "@mui/icons-material/Fastfood";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import "../../styles/Header.css"; // Import your custom CSS for additional styling

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handlerDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawerContent = (
    <Box
      sx={{
        width: 380,
        bgcolor: "black",
        color: "white",
        height: "50px",
        display: "inline-flex",
        flexDirection: "row-reverse",
      }}
    >
      <Box sx={{ flexGrow: 1 }}>
        <ul className="navigation-menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/menu"}>Restaurants</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>
      </Box>
    </Box>
  );

  return (
    <Box>
      <AppBar component={"nav"} sx={{ bgcolor: "black" }}>
        <Toolbar>
          <IconButton
            color="white"
            aria-label="open drawer"
            edge="start"
            sx={{ mr: 2, display: { sm: "none" } }}
            onClick={handlerDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            color="goldenrod"
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            <FastfoodIcon />
            Dhudhu Restaurant
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "inline-block" } }}>
            <ul className="navigation-menu">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to={"/about"}>About</Link>
              </li>
              <li>
                <Link to={"/menu"}>Restaurants</Link>
              </li>
              <li>
                <Link to={"/contact"}>Contact</Link>
              </li>
            </ul>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handlerDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{ display: { xs: "inline-block", sm: "none" } }}
        >
          {drawerContent}
        </Drawer>
      </Box>
    </Box>
  );
};

export default Header;
