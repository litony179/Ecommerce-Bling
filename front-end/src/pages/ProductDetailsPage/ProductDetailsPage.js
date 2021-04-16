import React from 'react';
import './ProductDetailsPage.css'
import NavBar from '../../components/Utilities/NavBar/NavBar'
import Footer from '../../components/Utilities/Footer/Footer'

const ProductDetailsPage = () => {
    return (
        <div>
            <div className="PDP-navbar-container">
                <NavBar></NavBar>
            </div>
            <Footer className="PDP-footer"></Footer>
        </div>
    );
}

export default ProductDetailsPage;
