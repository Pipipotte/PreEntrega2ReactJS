import React from 'react'

import ItemListContainer from "../components/ItemListContainer"

import { ProductsData } from "../json/Products";

//import Card from "../components/Card";
//import NavBar from "../components/NavBar";
//import ItemListContainer from "../components/ItemListContainer";

const Home = () => {
    return (
        <div>        
            <ItemListContainer productsData={ProductsData} />
        </div>
    );
};

export default Home;