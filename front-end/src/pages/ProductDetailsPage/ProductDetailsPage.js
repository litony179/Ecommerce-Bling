import React from 'react';
import './ProductDetailsPage.css'
import NavBar from '../../components/Utilities/NavBar/NavBar'
import Footer from '../../components/Utilities/Footer/Footer'
import RecommendedProducts from '../../components/ProductDetailsPage/RecommendedProducts/Recommendedproducts'

const ProductDetailsPage = () => {
    return (
        <div>
            <div className="PDP-navbar-container">
                <NavBar></NavBar>
            </div>
            <RecommendedProducts></RecommendedProducts>
            <Footer className="PDP-footer"></Footer>
        </div>
    );
}

export default ProductDetailsPage;
