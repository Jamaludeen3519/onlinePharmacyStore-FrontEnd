import React, { useEffect, useState } from 'react';

import ProductService from '../Services/ProductService';
import { Footer } from './Footer/Footer';
import { Navbar } from './Navbar/Navbar';

function ProductComponent(){

    //useState for state of the component
    const[products,setProducts] = useState([]);

    //this method call service method to get all products
    const getProducts = () => {
        ProductService.getProducts().then((response) => {
            setProducts(response.data);
            console.log(response.data);
        });
    };

    useEffect(() =>{
        getProducts()
    },[]);

    return(
        <div style={{marginTop:'5%'}}>
                   <div style={{width : "190%"}} className="">

            <h1 style={{paddingTop:"5%",textAlign:'center'}}>Product List</h1>
            <table className="table table-striped table-inverse">
                <thead className="thead-inverse">
                    <tr>
                        <th>Product Name</th>
                        <th>Exp. Date</th>
                        <th>Mfg. Date</th>
                        <th>Product Price</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            products.map(
                                product =>
                                <tr key={product.productid}>
                            <td>{product.product_Name}</td>
                            <td>{product.exp_Date}</td>
                            <td>{product.mfg_Date}</td>
                            <td>{product.product_Price}</td>
                        </tr>
                            )
                        }
                    </tbody>
            </table>
        </div>
        </div>
    )


}

export default ProductComponent;