import axios from "axios";
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "./pages/Nav";
import Home from "./pages/Home";
import { BrowserRouter as Router } from "react-router-dom";
import Test from "./pages/Test";
import Productdetail from "./components/Productdetail";

const App = () => {
  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/productdetail/:id' element={<Productdetail />} />
          {/* <Route path='/' element={<Test />} /> */}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
