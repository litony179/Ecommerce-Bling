import React from 'react';
import './Header.css';

const header = () => {
    return(
        <div>
            <div className="banner-container">
                <div className="nav-container">
                    <div className="navbar"> 
                        <div className="logo">
                            <img src="./images/logo.png" width="125px" alt="store-logo"></img>
                        </div>
                        <nav>
                            <ul>
                                <li><a href="/home">Home</a></li>
                                <li><a href="/products">Products</a></li>
                                <li><a href="/about">About</a></li>
                                <li><a href="/contact">Contact</a></li>
                                <li><a href="/account">Account</a></li>
                            </ul>
                            <a href="/cart"><img src="./images/cart.png" width="30px" height="30px" alt="shopping-cart"></img></a>
                            <a href="/cart"><img src="./images/menu.png" className="menu-icon"></img></a>
                        </nav>
                        
                    </div>
                </div>
                <div className="row">
                    <div className="col-2">
                        <h1>Give your workout <br></br>a new style!</h1>
                        <p>Success isn't always about greatness. It's about consistency. consistent <br></br> hard work gains sucess. Greatness will follow!</p>
                        <a className="btn" href="/products">Explore now</a>
                    </div>
                    <div class="col-2">
                        <img src="./images/image1.png" alt="banner-pic"></img>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default header