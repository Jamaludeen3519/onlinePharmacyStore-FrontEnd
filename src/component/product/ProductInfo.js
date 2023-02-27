import React, { useState } from "react";
import { Container } from "react-bootstrap";
import product from "./Product";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/shopping-cart/cartSlice";
import Footer from '../footer/Footer.js'
import Header from '../header/Header.js'
import './ProductInfo.css'
import CartPage from "../Cart/Cart";
    
const ProductInfo = (props) =>{

    const [cart, setCart] = useState([]);
    const totalPrice = cart.reduce((acc, item) => acc + Number(item.price), 0);
  
  
  
    const addToCart = (id, price) => {
      const item = product.find((item) => item.id === id);
      setCart([...cart, item]);
      alert("Item added to cart!");
    };



        console.log(product);
        const listItems = product.map((item) =>
        <div className = "card" key={item.id}>
            <div className="card_img">
                <img src={item.thumb}/>
            </div>
            <div className="card_header">
                <h4>{item.product_name}</h4>
                <p className="price"><span>{item.currency}</span>{item.price}</p>
                <div className="btn" onClick={() => addToCart(item.id, item.price)} >Add To Cart</div>
            </div>{/*onClick={addToCart}*/}
        </div>
        );
    
    return(
        <div className = "productInfo">
            <Header/>
            <>
            <Container className="procontainer">
                        {listItems}
            </Container>
            </>
            {cart.length > 0 && (
            <CartPage cart={cart} totalPrice={totalPrice} setCart={setCart} />
            )}
            <Footer/> 
        </div>
    )
}
export default ProductInfo;

{/*function ProductInfo() {

    const commerce = new Commerce(process.env.REACT_APP_PUBLICKEY_SANDBOX)

    const [cart, setCart] = useState()

    useEffect(() => {
        commerce.cart.retrieve()
            .then(res => {
                setCart(res)
            })
    },[])

    const addToCart = (productId, variantInfo) => {

        if(variantInfo) {
            commerce.cart.add(productId, 1, variantInfo)
                .then(res => {
                    setCart(res.cart)
                })
        } else {
            window.alert('Please Select a Shirt Size')
        }
    }

    return (
        <div className="App">
            <Nav cart={cart} emptyCart={emptyCart}/>
            <Grid centered stackable padded relaxed>
                <Grid.Column className='left-column' width={5}>
                    <LeftPanel />
                </Grid.Column>
                <Grid.Column width={9}>
                    <ProductContainer 
                        addToCart={addToCart} 
                    />
                </Grid.Column>
            </Grid>
            <Footer />
        </div>
  );
} */}