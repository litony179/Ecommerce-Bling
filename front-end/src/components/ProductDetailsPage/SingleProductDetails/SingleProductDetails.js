import React from 'react';
import './SingleProductDetails.css'
const singleProductDetails = (props) => {
    const {details} = props        
    return(
        <div className="singleProductDetails-container">
            <div className="row">
                <div className="col-2">
                    <img src={details.image} alt={details.name} width="100%"></img>
                </div>
                <div className="col-2">
                    <p>Home / T-shirt</p>
                    <h1>Red printed T-shirt by HRX</h1>
                    <h4>${details.price}</h4>
                    <select>
                        <option>Select Size</option>
                        <option>XXL</option>
                        <option>XL</option>
                        <option>Large</option>
                        <option>Medium</option>
                        <option>Small</option>
                    </select>
                    <input type="number" value="1"></input>
                    <a href="" className="btn">Add To Cart</a>
                    <h3>Product Details</h3>
                    <p>{details.details}</p>
                </div>
            </div>
        </div>
    )
}

export default singleProductDetails