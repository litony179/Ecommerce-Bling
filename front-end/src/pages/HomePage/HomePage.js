import React from 'react';
import css from './HomePage.css';
import Header from '../../components/HomePage/Header/Header';
import Categories from '../../components/HomePage/Categories/Categories';
import FeaturedProducts from '../../components/HomePage/FeaturedProducts/FeaturedProducts';

const homePage = () => {
    return(
        // ===========================================
        // This is the header section
        // ===========================================
        <div>
            <Header></Header>
            <Categories></Categories>
            <FeaturedProducts></FeaturedProducts>
        </div>
    );
    
}

export default homePage;