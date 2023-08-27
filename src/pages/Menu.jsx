import React from "react";
import Layout from "../components/Laout/Layout";
import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";

import {MenuList} from "../data/data"
const Menu = () => {
  return (
    <>
      <Layout />

      <Box sx={{height:"100px", display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", padding: 0 }}>
        {MenuList && MenuList.length > 0 && MenuList.map((item) => (
          <Card key={item.id} sx={{ display: "flex", flexDirection: "column", margin: 2, width: "300px", boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.1)", transition: "transform 0.2s", "&:hover": { transform: "scale(1.05)" } }}>
            <CardActionArea>
              <CardMedia sx={{ width: "500px", height: "200px" }} component="img" src={item.image} alt={item.name} />
            </CardActionArea>
            <CardContent>
              <Typography variant="h5" gutterBottom>{item.name}</Typography>
              
             
              <Button variant="outlined" color="primary" sx={{ marginTop: 2 }}>Order Now</Button>
            </CardContent>
          </Card>
        ))}

      </Box>


<br /><br />

<br /><br />
<br /><br />
<br /><br />




     
    </>
  );
};

export default Menu;
