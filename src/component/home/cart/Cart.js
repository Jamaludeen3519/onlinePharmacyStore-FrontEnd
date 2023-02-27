import React from 'react';
// import './Home.css';
import { Link } from 'react-router-dom'
import { useCart } from 'react-use-cart';

const Cart = () => {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();
    if (isEmpty) return <h1 className="text-center"> Your cart is Empty</h1>

    return (
        <div>
            {/* <nav class="navbar navbar-light" style={{ backgroundColor: "grey" }}>
                <span class="navbar-brand mb-0 h1" style={{ color: "lightyellow" }}><h4>Mobile Store</h4></span>
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item1 active">
                        <Link class="nav-link" to="/" style={{ color: "lightyellow" }}><h6>Home</h6></Link>
                    </li>
                </ul>
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item2 active">
                        <Link class="nav-link" to="/itemcard" style={{ color: "lightyellow" }}><h6>Mobile</h6></Link>
                    </li>
                </ul>
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item3 active">
                        <Link class="nav-link" to="/register" style={{ color: "lightyellow" }}><h6>Register</h6></Link>
                    </li>
                </ul>
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item4 active">
                        <Link class="nav-link" to="/login" style={{ color: "lightyellow" }}><h6>Login</h6></Link>
                    </li>
                </ul>
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item4 active">
                        <Link class="nav-link" to="/services" style={{ color: "lightyellow" }}><h6>Service</h6></Link>
                    </li>
                </ul>
            </nav> */}

            <section style={{backgroundColor:"lightyellow"}} className="py-4 container ">
                <div className="row justify-content-center ">
                    <div className="col-12 ">
                        <h5>Cart({totalUniqueItems}) Total Items:({totalItems})</h5>
                        <table className="table table -light table-hover m-0">
                            <tbody>
                                {items.map((item,index) => {
                                    return (
                                        <tr key={index}>
                                            <td>
                                                <img src={item.thumb} style={{ height: '6rem' ,backgroundColor:"lightyellow"}} />
                                            </td>
                                            <td>{item.title}</td>
                                            <td>{item.price}</td>

                                            <td>
                                                <button
                                                    className="btn btn-info ms-2"
                                                    onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                                                >-</button>&nbsp;
                                                <button className="btn btn-info">
                                                    {item.quantity}</button>&nbsp;
                                                <button
                                                     className="btn btn-info ms-2"
                                                    onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                                                >+</button>

                                            </td><br></br>
                                            <button
                                                className="btn btn-danger ms-2"
                                                onClick={() => removeItem(item.id)}
                                            >Remove Item</button>
                                            <td>

                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                
                </div>
            </section>
            <div align="center">
            <div class="col-12 col-lg-3 my-4">
                <div id="order_summary">
                    <h4>Order Summary</h4>
                    <hr />
                    <p><span class="order-summary-values">Total Items(Kgs) : {totalItems}</span></p>
                    <p>Total Amount : <span class="order-summary-values">{cartTotal}</span></p>
    
                    <hr />
                    <button id="checkout_btn" class="btn btn-success btn-block">BUY</button>
                </div>
            </div>
            </div>
        </div>

    );
};

export default Cart;


{/*import React, { useState } from 'react'
import Image from "../images/care.jpg"
import './Cart.css'
import product from "../product/Product";
import Items from "./Items"
const ShopCart = () => {

  // const AddProduct = Product => {

  // };

  // return (

  //     <section className="vh-100" id='cart'>
  //       <div className="container h-100">
  //         <div className="row ">
  //           <div className="col">
  //             <p><span className="h2">Shopping Cart </span><span className="h4">(1 item in your cart)</span></p>

  //             <div className="card mb-4">
  //               <div className="card-body p-4">

  //                 <div className="row align-items-center">
  //                   <div className="col-md-2">
  //                     <img src={Image}
  //                       className="img-fluid" alt="Generic placeholder image"/>
  //                   </div>
  //                   <div className="col-md-2 d-flex justify-content-center">
  //                     <div>
  //                       <p className="small text-muted mb-4 pb-2">Name</p>
  //                       <p className="lead fw-normal mb-0">iPad Air</p>
  //                     </div>
  //                   </div>
  //                   <div className="col-md-2 d-flex justify-content-center">
  //                     <div>
  //                       <p className="small text-muted mb-4 pb-2">Color</p>
  //                       <p className="lead fw-normal mb-0"><i className="fas fa-circle me-2"></i>
  //                         pink rose</p>
  //                     </div>
  //                   </div>
  //                   <div className="col-md-2 d-flex justify-content-center">
  //                     <div>
  //                       <p className="small text-muted mb-4 pb-2">Quantity</p>
  //                       <p className="lead fw-normal mb-0">1</p>
  //                     </div>
  //                   </div>
  //                   <div className="col-md-2 d-flex justify-content-center">
  //                     <div>
  //                       <p className="small text-muted mb-4 pb-2">Price</p>
  //                       <p className="lead fw-normal mb-0">$799</p>
  //                     </div>
  //                   </div>
  //                   <div className="col-md-2 d-flex justify-content-center">
  //                     <div>
  //                       <p className="small text-muted mb-4 pb-2">Total</p>
  //                       <p className="lead fw-normal mb-0">$799</p>
  //                     </div>
  //                   </div>
  //                 </div>

  //               </div>
  //             </div>

  //             <div className="card mb-5">
  //               <div className="card-body p-4">

  //                 <div className="float-end">
  //                   <p className="mb-0 me-5 d-flex align-items-center">
  //                     <span className="small text-muted me-2">Order total:</span> <span
  //                       className="lead fw-normal">$799</span>
  //                   </p>
  //                 </div>

  //               </div>
  //             </div>

  //             <div className="d-flex justify-content-end">
  //               <button type="button" className="btn btn-light btn-lg me-2">Continue shopping</button>
  //               <button type="button" className="btn btn-primary btn-lg">Add to cart</button>
  //             </div>

  //           </div>
  //         </div>
  //       </div>
  //     </section>
    
  // )
 
    const[item,setItem] = useState(product);
 


  return(
    <header>
      <div className='continue-shooping'>


      </div>
      <div className='cart-icon'>
          <img src=''/>
      </div>

      <div className='card-item-container'>
        {
        item.map((curItem) => {
          return <Items key={ curItem.id} {...curItem}/>
        })
        }
        
      </div>
    </header>
  )
}

export default ShopCart */}