import React from 'react';
import { BrowserRouter, Route, } from 'react-router-dom';
import './ProductDetailsPage.css'
import data from '../../data/data'
import NavBar from '../../components/Utilities/NavBar/NavBar'
import Footer from '../../components/Utilities/Footer/Footer'
import RecommendedProducts from '../../components/ProductDetailsPage/RecommendedProducts/RecommendedProducts'
import SingleProductDetails from '../../components/ProductDetailsPage/SingleProductDetails/SingleProductDetails'

const ProductDetailsPage = (props) => {
    // The 'props.match.params.id' is the id that the user enters when they click on the item
    const productID = data.featuredProducts.find((x) => x._id === props.match.params.id);
    if(!productID){
        return(
            <div>Product Not Found</div>
        )
    } else {
        return (
            <div>
                <div className="PDP-navbar-container">
                    <NavBar></NavBar>
                </div>
                <SingleProductDetails details={productID}></SingleProductDetails>
                <RecommendedProducts></RecommendedProducts>
                <Footer className="PDP-footer"></Footer>
            </div>
        );
    }

    
}

export default ProductDetailsPage;
