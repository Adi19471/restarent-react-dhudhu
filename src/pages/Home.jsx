import React from "react";
import "../styles/Home.css"
import { Button } from "@mui/material";
import Layout from "../components/Laout/Layout";
import {Link} from "react-router-dom"
const Home = () => {
  return (

     <>
<Layout />

 
      <div className="home" >
        <div className="headerContainer">
          <h1>Food Website</h1>
          <p>Best Food Avalible in <strong>Pulivendula...</strong>.</p>
       <Link to='/menu' class="button">  Order Now</Link>
        </div>
      </div>

  
     </>
 
  );
};

export default Home;
