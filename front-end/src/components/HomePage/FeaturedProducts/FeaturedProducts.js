import React, { Component } from 'react';
import './FeaturedProducts.css';
import Data from '../../../data/data';

class featuredProducts extends Component {
    render() {
        return(
            <div className="featuredProducts-container">
                <h2 className="featuredProducts-title">Featured Products</h2>
                <div className="row center">
                    {
                        Data.products.map((product) => (
                            <div key={product._id} className="card">
                                <a href={`/product/${product._id}`}>
                                    <img className="medium" src={product.image} alt={product.name}></img>
                                </a>
                                <div className="card-body">
                                    <a href={`/product/${product._id}`}>
                                        <h4>{product.name}</h4>
                                    </a>
                                    <div className="rating">
                                        <span><i class="fas fa-star"></i></span>
                                        <span><i class="fas fa-star"></i></span>
                                        <span><i class="fas fa-star"></i></span>
                                        <span><i class="fas fa-star"></i></span>
                                        <span><i class="far fa-star"></i></span>
                                    </div>
                                    <div className="price">
                                        ${product.price}
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        );
    }

}

export default featuredProducts;