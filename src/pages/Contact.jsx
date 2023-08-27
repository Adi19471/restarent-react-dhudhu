import React from "react";
import Layout from "../components/Laout/Layout"; // Assuming you have a custom Layout component
import {
  Box,
  TableContainer,
  Typography,
  Table,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Container,
} from "@mui/material";

import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import DirectionsBikeIcon from "@mui/icons-material/DirectionsBike";

const Contact = () => {
  return (
    <>
      <Layout /> {/* Assuming this is your custom Layout component */}
      <Box sx={{ textAlign: "center", my: [2, 4] }}>
        <Typography variant="h3">Contact Us</Typography>
        <img
          src="https://d4t7t8y8xqo0t.cloudfront.net/resized/1080X400/pages%2F3%2Fimage20170306083306.jpg"
          alt=""
          sx={{ maxWidth: "100%", height: "auto" }}
        />
      </Box>

      <Container>
        <Box sx={{ fontSize: "25px", textAlign: "center", alignItems: "center" }}>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "cursive",
              textDecoration: "dashed",
              textShadow: "0px 5px cyan",
            }}
          >
            You can reach us at contact@dhudhurestaurant.com
          </Typography>
          <Typography variant="body1">
            For booking-related queries/issues, kindly call our 24-hour concierge at{" "}
            <strong>6300087909</strong> or email us at{" "}
            <strong>booking@dhudhurestaurant.com</strong>.
          </Typography>
        </Box>
      </Container>

      <Box
        sx={{
          color: "black",
          textAlign: "center",
          alignItems: "center",
          my: [5, 10],
        }}
      >
        <TableContainer
          component={Paper}
          sx={{
            maxWidth: "460px",
            mx: "auto",
            backgroundColor: "black",
            color: "white",
          }}
        >
          <Table aria-label="Contact Details">
            <TableBody>
              <TableRow>
                <TableCell
                  sx={{
                    color: "white",
                    verticalAlign: "middle",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <CallIcon sx={{ color: "red", mr: 1 }} />
                  6300087909
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  sx={{
                    color: "white",
                    verticalAlign: "middle",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <EmailIcon sx={{ color: "green", mr: 1 }} />
                  dhudhu@gmail.com
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  sx={{
                    color: "white",
                    verticalAlign: "middle",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <DirectionsBikeIcon sx={{ color: "cyan", mr: 1 }} />
                  dhudhudelivery@gmail.com
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default Contact;
