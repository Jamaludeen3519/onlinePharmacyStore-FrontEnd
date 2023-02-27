import './Product.css'
import soap from '../images/products/dettol/soap.jpg'
import handwash from '../images/products/dettol/handwash.jpg'
import handwash1 from '../images/products/dettol/handwash1.jpg'
import menthol from '../images/products/dettol/menthol.jpg'
import sanitizer from '../images/products/dettol/sanitizer.jpg'
import floorcleaner from '../images/products/dettol/floorcleaner.jpg'
import laundrycleaner from '../images/products/dettol/laundrycleaner.jpg'
import kitchencleaner from '../images/products/dettol/kitchencleaner.jpg'
// import wipes from '../images/products/dettol/wipes.jpg'
// import hairoil from '../images/products/dabur/hairoil.jpg'
// import honey from '../images/products/dabur/honey.jpg'
// import glucose from '../images/products/dabur/Glucose.jpg'
// import gulabaricream from '../images/products/dabur/gulabaricream.jpg'
// import rosewater from '../images/products/dabur/rosewater.jpg'
// import toothpaste from '../images/products/dabur/toothpaste.jpg'
// import MosquitoRepellent from '../images/products/dabur/MosquitoRepellent.jpg'
// import MosquitoRepellentCream from '../images/products/dabur/MosquitoRepellentCream.jpg'
// import toothpaste1 from '../images/products/dabur/toothpaste1.jpg'


const product = [
    {    
        id:1,
        product_name: "Dettol soap",
        price: 30,
        currency: "Rs",
        thumb: soap
    },
    {    
        id:2,
        product_name: "Dettol Handwash",
        price: 30,
        currency: "Rs",
        thumb: handwash
    },
    {    
        id:3,
        product_name: "Dettol Squeezy Handwash",
        price: 30,
        currency: "Rs",
        thumb: handwash1
    },
    {    
        id:4,
        product_name: "Dettol soap",
        price: 30,
        currency: "Rs",
        thumb: menthol
    },
    {    
        id:5,
        product_name: "Dettol soap",
        price: 30,
        currency: "Rs",
        thumb: sanitizer
    },
    {    
        id:6,
        product_name: "Dettol soap",
        price: 30,
        currency: "Rs",
        thumb: floorcleaner
    },
    {    
        id:7,
        product_name: "Dettol soap",
        price: 30,
        currency: "Rs",
        thumb: laundrycleaner
    },
    {    
        id:8,
        product_name: "Dettol soap",
        price: 30,
        currency: "Rs",
        thumb: kitchencleaner
    },
]

// function Product(){
//     return(
//         <div className="container" id='product'>
//             {/*Dettol Products  */}
//             {/* 1st Row */}




//                 <div class="card" >
//                     <img class="card-img-top" src={handwash1} alt="Card image cap"/>
//                     <div class="card-body">
//                         <h5 class="card-title">Dettol squeezy liquid hand wash</h5>
//                         <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                         <a href="#" class="btn btn-danger">Add To Cart</a>
//                     </div>
//                 </div>
//             </div>
//             {/* 2nd Row */}
//             <div className='row'>
//                 <div class="card" >
//                     <img class="card-img-top" src={menthol} alt="Card image cap"/>
//                     <div class="card-body">
//                         <h5 class="card-title">Dettol Menthol Cool Disinfectant Liquid</h5>
//                         <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                         <a href="#" class="btn btn-danger">Add To Cart</a>
//                     </div>
//                 </div>

//                 <div class="card" >
//                     <img class="card-img-top" src={floorcleaner} alt="Card image cap"/>
//                     <div class="card-body">
//                         <h5 class="card-title">Dettol Lemon Floor Cleaner</h5>
//                         <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                         <a href="#" class="btn btn-danger">Add To Cart</a>
//                     </div>
//                 </div>

//                 <div class="card" >
//                     <img class="card-img-top" src={sanitizer} alt="Card image cap"/>
//                     <div class="card-body">
//                         <h5 class="card-title">Dettol Hand Sanitizer</h5>
//                         <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                         <a href="#" class="btn btn-danger">Add To Cart</a>
//                     </div>
//                 </div>
//             </div>
//             {/* 3rd Row */}
//             <div className='row'>
//                 <div class="card" >
//                     <img class="card-img-top" src={wipes} alt="Card image cap" style={{width:'150px',marginLeft:'23%'}} />
//                     <div class="card-body">
//                         <h5 class="card-title">Dettol Face Wipes</h5>
//                         <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                         <a href="#" class="btn btn-danger">Add To Cart</a>
//                     </div>
//                 </div>

//                 <div class="card" >
//                     <img class="card-img-top" src={kitchencleaner} alt="Card image cap"/>
//                     <div class="card-body">
//                         <h5 class="card-title">Dettol Kitchen Cleaner</h5>
//                         <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                         <a href="#" class="btn btn-danger">Add TO Cart</a>
//                     </div>
//                 </div>

//                 <div class="card" >
//                     <img class="card-img-top" src={laundrycleaner} alt="Card image cap" />
//                     <div class="card-body">
//                         <h5 class="card-title">Dettol Laundry Cleaner</h5>
//                         <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                         <a href="#" class="btn btn-danger">Add To Cart</a>
//                     </div>
//                 </div>
//             </div>

//             {/*Dabur Products  */}
//             {/* 1st Row */}
//             <div className='row'>
//                 <div class="card" >
//                     <img class="card-img-top" src={hairoil} alt="Card image cap"/>
//                     <div class="card-body">
//                         <h5 class="card-title">Dabur Amla Hairoil</h5>
//                         <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                         <a href="#" class="btn btn-danger">Add To Cart</a>
//                     </div>
//                 </div>

//                 <div class="card" >
//                     <img class="card-img-top" src={honey} alt="Card image cap"/>
//                     <div class="card-body">
//                         <h5 class="card-title">Dabur Honey</h5>
//                         <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                         <a href="#" class="btn btn-danger">Add To Cart</a>
//                     </div>
//                 </div>

//                 <div class="card" >
//                     <img class="card-img-top" src={glucose} alt="Card image cap"/>
//                     <div class="card-body">
//                         <h5 class="card-title">Dabur GlucoPlus-C</h5>
//                         <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                         <a href="#" class="btn btn-danger">Add To Cart</a>
//                     </div>
//                 </div>
//             </div>
//             {/* 2nd Row */}
//             <div className='row'>
//                 <div class="card" >
//                     <img class="card-img-top" src={gulabaricream} alt="Card image cap"/>
//                     <div class="card-body">
//                         <h5 class="card-title">Dabur Gulabari Cream</h5>
//                         <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                         <a href="#" class="btn btn-danger">Add To Cart</a>
//                     </div>
//                 </div>

//                 <div class="card" >
//                     <img class="card-img-top" src={rosewater} alt="Card image cap"/>
//                     <div class="card-body">
//                         <h5 class="card-title">Dabur Rose Water</h5>
//                         <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                         <a href="#" class="btn btn-danger">Add To Cart</a>
//                     </div>
//                 </div>

//                 <div class="card" >
//                     <img class="card-img-top" src={toothpaste} alt="Card image cap"/>
//                     <div class="card-body">
//                         <h5 class="card-title">Dabur Red Toothpaste</h5>
//                         <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                         <a href="#" class="btn btn-danger">Add To Cart</a>
//                     </div>
//                 </div>
//             </div>
//             {/* 3rd Row */}
//             <div className='row'>
//                 <div class="card" >
//                     <img class="card-img-top" src={MosquitoRepellentCream} alt="Card image cap" style={{width:'150px',marginLeft:'23%'}} />
//                     <div class="card-body">
//                         <h5 class="card-title">Dabur Mosquito Repellent Cream</h5>
//                         <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                         <a href="#" class="btn btn-danger">Add To Cart</a>
//                     </div>
//                 </div>

//                 <div class="card" >
//                     <img class="card-img-top" src={MosquitoRepellent} alt="Card image cap"/>
//                     <div class="card-body">
//                         <h5 class="card-title">Dabur Mosquito Repellent Spray</h5>
//                         <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                         <a href="#" class="btn btn-danger">Add TO Cart</a>
//                     </div>
//                 </div>

//                 <div class="card" >
//                     <img class="card-img-top" src={toothpaste1} alt="Card image cap" />
//                     <div class="card-body">
//                         <h5 class="card-title">Dabur Meswak Toothpaste</h5>
//                         <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                         <a href="#" class="btn btn-danger">Add To Cart</a>
//                     </div>
//                 </div>
//             </div>


//         </div>
//     )
// }
export default product;