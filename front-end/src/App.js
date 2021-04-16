import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import ProductDetailsPage from './pages/ProductDetailsPage/ProductDetailsPage';

function App() {
  return (
    <BrowserRouter>
      <div>
        {/* The React route <Route></Route> from React-router-dom takes in a path that user puts in and redirects it to the
            desired component*/}
        <Route path="/" component={HomePage} exact></Route>
        <Route path="/product/:id" component={ProductDetailsPage}></Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
