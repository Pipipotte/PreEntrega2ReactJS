import React from "react";

import { BrowserRouter as Routes, Route, Router } from "react-router-dom";

import Home from '../pages/Home';
import Category from "../pages/Category";
import Item from "../pages/Item";



const MainRouter = () => {
    return (
        <Router>
            <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/category/:categoryId" element={<Category/>} />
            <Route exact path="/item/:itemId" element={<Item/>} />
            </Routes>
        </Router>
    );
};

export default MainRouter;