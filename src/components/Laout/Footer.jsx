import React from "react";
import { Box } from "@mui/material";
import { Height, Instagram, Twitter, WhatsApp, YouTube } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        bgcolor: "black",
        color: "white",
        p: 3,
        bottom: 0,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "40px",
      }}
    >
      <Box sx={{ fontSize: "50px", "& > *": { mx: 2 }, "& > *:hover": { transform: "scale(1.2)", color: "#cd9c1e" } }}>
        <Instagram />
        <WhatsApp />
        <YouTube />
        <Twitter />
      </Box>

      <h3>Dhudhu Restaurant</h3>
    </Box>
  );
};

export default Footer;
