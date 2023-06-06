import axios from "axios";
import React, { useEffect, useState } from "react";
import { useGetdefalultItemsQuery } from "./api/services/products";
import { Route, Routes } from "react-router-dom";
import Nav from "./pages/Nav";
import Home from "./pages/Home";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  // const [products, setProducts] = useState([]);
  // console.log(products);
  // useEffect(() => {
  //   const getItems = async () => {
  //     try {
  //       const respond = await axios.get("http://localhost:3010/products");
  //       const data = respond.data;
  //       setProducts(data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   getItems();
  // }, []);

  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
