import React from 'react';
import './ProductFilter.css'

const productFilter = () => {
    return(
        <div className="productFilter-container">
            <h3>All Products</h3>
            <select>
                <option disabled selected>Categories</option>
            </select>
        </div>
        
    );
}

export default productFilter