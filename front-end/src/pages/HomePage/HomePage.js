import React from 'react';
import classes from './HomePage.css'

const homePage = () => {
    return(
        // ===========================================
        // This is the header section
        // ===========================================
        <div>
            <div className="banner-container">
                <div className="nav-container">
                    <div className="navbar"> 
                        <div className="logo">
                            <img src="images/logo.png" width="125px" alt="store-logo"></img>
                        </div>
                        <nav>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Products</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">Account</a></li>
                            <li><a href="#"><img src="images/cart.png" width="30px" height="30px" alt="shopping-cart"></img></a></li>
                        </ul>
                        </nav>
                    </div>
                </div>
                <div className="row">
                    <div className="col-2">
                        <h1>Give your workout <br></br>a new style!</h1>
                        <p>Success isn't always about greatness. It's about consistency. consistent <br></br> hard work gains sucess. Greatness will follow!</p>
                        <a className="banner-btn" href="">Explore now</a>
                    </div>
                    <div class="col-2">
                        <img src="images/image1.png" alt="banner-pic"></img>
                    </div>
                </div>
            </div>

            {/* // ===========================================
            // This is the categories section
            // =========================================== */}

            <div className="categories">
                <div className="categories-wrapper">
                    <div className="row">
                        <div className="col-3">
                            <img src="images/category-1.jpg" alt="category-pic"></img>
                        </div>
                        <div className="col-3">
                            <img src="images/category-2.jpg" alt="category-pic"></img>
                        </div>
                        <div className="col-3">
                            <img src="images/category-3.jpg" alt="category-pic"></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        

    );
    
}

export default homePage;