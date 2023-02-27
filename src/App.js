import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './component/home/Home.js'
import Login from './component/login/login.js'
import AdminLogin from './component/login/adminlogin.js'
import Product from './component/product/Product.js';

import Signup from './component/signup/Signup';
import Header from './component/header/Header';
import ProductInfo from './component/product/ProductInfo';
import ProductComponent from './component/product/ProductComponent';
import Cart from './component/Cart/Cart';
import {AdminHome} from './admin/Home/Home.js'
import { AddProductPage } from './admin/AddProductPage/AddProductPage';
import { ProductPage } from './admin/ProductPage/ProductPage.js'
import { OrderPage } from './admin/OrderPage/OrderPage';
import { UserPage } from './admin/UserPage/UserPage';
// import CartItem from './components/Cart/CartItem';
// import { Product } from './component/product/Product.js';





function App() {

  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
                <Route exact path="/" element = {<Home/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/adminlogin" element={<AdminLogin/>} />
                <Route path="/signup" element={<Signup/>} />
                <Route path='/product' element={<Product/>}></Route>
                <Route path='/productinfo' element={<ProductInfo/>}> </Route>       
                {/* <Route path='/Cart' element ={<Cart
                  cartItems={cartItems}
                  handleAddProduct={handleAddProduct}
                  handleRemoveProduct={handleRemoveProduct}
                  />}></Route>     */}
                  <Route path='/Cart' element ={<Cart/>}></Route>           
          </Routes>
           
          <Routes>
              <Route exact path='/AdminHome' element ={<AdminHome/>}/>
              <Route exact path='/Products' element ={<ProductPage/>}/>
              <Route exact path='/AddProducts' element ={<AddProductPage/>}/>
              <Route exact path='/Orders' element ={<OrderPage/>}/>
              <Route exact path='/Users' element ={<UserPage/>}/>
              <Route exact path='/SignOut' element ={<Home/>}/>
          </Routes> 
        </div>        
      </Router>
    </div>
  );
}

export default App;
