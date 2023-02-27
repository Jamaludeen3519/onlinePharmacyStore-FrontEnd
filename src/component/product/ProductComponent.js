import React from 'react';
import ProductService from './ProductService';

class ProductComponent extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            products:[]
        }
    }

    componentDidMount(){
        ProductService.getProducts().then((response) => {
            console.log(response.data);
            this.setState({ products: response.data})
        });
    }

    
    render (){
        return (
            <div>
                <h1 className = "text-center"> Products List</h1>
                <table className = "table table-striped">
                    <thead>
                        <tr>
                            <td> Product Name</td>
                            <td> Product Price</td>
                            <td> Product MFG Date</td>
                            <td> Product Expiry Date</td>
                        </tr>

                    </thead>
                    <tbody>
                        {
                            this.state.products.map(
                                product => 
                                <tr key = {product.productId}>
                                     <td> {product.product_Name}</td>   
                                     <td> {product.product_Price}</td>   
                                     <td> {product.mfg_Date}</td>   
                                     <td> {product.exp_Date}</td> 
                                </tr>
                            )
                        }

                    </tbody>
                </table>

            </div>

        )
    }
}

export default ProductComponent