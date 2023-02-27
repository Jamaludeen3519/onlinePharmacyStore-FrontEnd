import React, { useEffect, useState } from 'react';
import OrderService from '../Services/OrderService';

function OrderComponent(){

    //useState for state of the component
    const[orders,setOrders] = useState([]);

    //this method call service method to get all products
    const getOrders = () => {
        OrderService.getOrders().then((response) => {
            setOrders(response.data);
            console.log(response.data);
        });
    };

    useEffect(() =>{
        getOrders()
    },[]);

    return(
        <div style={{marginTop:'5%'}}>
           
           <div style={{width : "200%"}} className="">
<h1 style={{paddingTop:"5%",textAlign:'center'}}>Order List</h1>
            <table class="table table-striped table-inverse">
                <thead class="thead-inverse">
                    <tr>
                        <th>Order Id</th>
                        <th>Amount</th>
                        <th>OrderDate</th>
                        <th>OrderStatus</th>
                        <th>Userid</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(
                                order =>
                        <tr key={order.orderid}>
                            <td>{order.order_id}</td>
                            <td>{order.amount}</td>
                            <td>{order.orderDate}</td>
                            <td>{order.orderStatus}</td>
                            <td>{order.userId}</td>
                        </tr>
                            )
                        }
                    </tbody>
            </table>
        </div>
        </div>
    )


}

export default OrderComponent;