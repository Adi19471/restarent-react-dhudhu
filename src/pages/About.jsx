import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React from "react";
import Layout from "../components/Laout/Layout";
import { Box, Typography } from "@mui/material";

const About = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 100,
  };

  return (
    <>
      <Layout />
      <Box
        sx={{
          my: "5",
          textAlign: "center",
        }}
      >
        <Typography variant="h4" sx={{ color: "green", fontWeight: "bold", margin: "auto", marginBottom: "10px" }}>
          Welcome to My Restaurant..
        </Typography>
        <Typography variant="h6" sx={{ color: "cyan", marginBottom: "20px" }}>
          EXPLORE ALL RESTAURANTS
        </Typography>
        <Typography variant="body1" sx={{ color: "red", textAlign: "center" }}>
          Food is an essential element in Silparam..., and the wide variety of
          restaurants offers plenty of indulgences. With the best of the
          traditional Indian palate and world cuisine, the thematic backdrop
          simply enhances the dining experience. One can relish spicy South
          Indian delicacies along with tangy North Indian and Oriental dishes
          to Western knick-knacks.
        </Typography>
      </Box>

      <Slider {...settings}>
        {images.map((imageUrl, index) => (
          <div key={index}>
            <img style={{ height: "600px", width: "98%" }} src={imageUrl} alt={`Slide ${index}`} />
          </div>
        ))}
      </Slider>
    </>
  );
};

export default About;
