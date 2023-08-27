import "./App.css";
import React from "react";
import Layout from "./components/Laout/Layout";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
// import { Menu } from "@mui/material"
import Pagenotfound from "./pages/Pagenotfound";

import Menu from "./pages/Menu";

const App = () => {
  const images = [
    "https://media.istockphoto.com/id/184946701/photo/pizza.jpg?b=1&s=612x612&w=0&k=20&c=qWXSURc5ux1NsiNutJ0JtrqG2ad7F8HVddmdGXKo7N8=",
  'https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_1280.jpg',
'https://cdn.pixabay.com/photo/2015/11/19/10/38/food-1050813_640.jpg',

];

  return (
    <>
      <BrowserRouter>
        <Layout />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About images={images} />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/menu" element={<Menu />}></Route>
          <Route path="*" element={<Pagenotfound />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
