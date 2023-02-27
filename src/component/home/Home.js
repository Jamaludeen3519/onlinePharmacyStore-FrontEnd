import bone from '../images/healthConcerns/bone.jpg';
import Diabetic from '../images/healthConcerns/Diabetic.jpg';
import FeverInfection from '../images/healthConcerns/FeverInfection.jpg'
import Heart from '../images/healthConcerns/Heart.jpg';
import Lifestyle from '../images/healthConcerns/Lifestyle.jpg';
import thyroid from '../images/healthConcerns/thyroid.jpg';
import Vitamins from '../images/healthConcerns/Vitamins.jpg';
import WomenCare from '../images/healthConcerns/WomenCare.jpg';
import { Link } from "react-router-dom";
import './Home.css'
import './searchbar.css'
import { Container } from 'react-bootstrap';
import shield from '../images/svg/shield.svg'
import lock from '../images/svg/lock.svg'
import wallet from '../images/svg/wallet.svg'
import cetaphil from '../images/brands/cetaphil.jpg'
import dabur from '../images/brands/dabur.jpg'
import dettol from '../images/brands/dettol.jpg'
import himalaya from '../images/brands/himalaya.jpg'
import johnsons from '../images/brands/johnsons.jpg'
import mamaearth from '../images/brands/mamaearth.jpg'
import nivea from '../images/brands/nivea.jpg'
import proteinx from '../images/brands/proteinx.jpg'
import srisri from '../images/brands/srisri.jpg'
import attach from '../images/attach.svg'
import upload from '../images/svg/upload.svg'
import rupee100 from '../images/rupee100.jpg'
import rupee200 from '../images/rupee200.jpg'
import Footer from '../footer/Footer.js'
import Header from '../header/Header.js'


function Home(){
    return(

        <div className='Continer' id='home'>
            <Header/>
            {/* Search Bar and Background image of search bar */}

            <div class="bbbootstrap" id='search'>
                <div class="container">
                <p style={{fontSize:'28px',color:'black',marginLeft:'-22%',marginBottom:'-4%'}}>What are you looking for?</p>
                <p style={{fontSize:'18px',color:'black',marginLeft:'35%'}}>Order with prescription <a style={{color:'#10847E'}}>&nbsp; Upload now {'>'}</a></p>
                    <form >
                        <span role="status" aria-live="polite" class="ui-helper-hidden-accessible"></span>
                        <input type="text" id="Form_Search" value="" 
                        placeholder="Search for your best result " 
                        role="searchbox" class="InputBox " autocomplete="off" />
                        <input type="submit" id="Form_Go" class="Button" value="GO" />
                    </form>
                </div>
            </div>


            {/* Shop by health concerns Crousle */}

            <h3 style={{textAlign: 'left',margin:'3% 0% 1% 3%'}}>Lab Tests by Health Concern</h3>
            <div id="carouselExampleControls" class="carousel slide" >
                        <div class="carousel-inner" id='concern'>
                            <div class="carousel-item active">
                                <div class="cards-wrapper" >
                                    <div class="card" id='card-shadow'>  
                                        <img src={bone} class="card-img-top" alt="..."/>
                                        <div class="overlay"></div>
                                        <div class="button"><a href="#"> BUTTON </a></div>
                                    </div>
                                    <div class="card d-none d-md-block" id='card-shadow'>
                                        <img src={Diabetic} class="card-img-top" alt=""/>
                                    </div>
                                    <div class="card d-none d-md-block" id='card-shadow'>
                                        <img src={FeverInfection} class="card-img-top" alt="..."/>
                                    </div>
                                    <div class="card" id='card-shadow'>
                                        <img src={Heart} class="card-img-top" alt="..."/>
                                    </div>
                                    <div class="card d-none d-md-block" id='card-shadow'>
                                        <img src={thyroid} class="card-img-top" alt="..."/>
                                    </div>
                                    <div class="card d-none d-md-block" id='card-shadow'>
                                        <img src={Vitamins} class="card-img-top" alt="..."/>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="cards-wrapper">
                                    
                                    <div class="card d-none d-md-block" id='card-shadow'>
                                        <img src={WomenCare} class="card-img-top" alt="..."/>
                                    </div>
                                    <div class="card d-none d-md-block" id='card-shadow'>
                                        <img src={Lifestyle} class="card-img-top" alt="..."/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
            </div>
            
            {/* Featured Brands Crousle */}

            <div className="card" id='templet'>
                <h3 style={{textAlign: 'left',margin:'3% 0% 1% 3%'}}>Featured Brands</h3>
                    <Link id='view' to="/ProductInfo">View All</Link>
                    <div id="carousel2" class="carousel slide" data-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <div class="cards-wrapper">
                                    <div class="card" id='card-shadow'>  
                                        <img src={cetaphil} class="card-img-top" alt="..."/>
                                    </div>
                                    <div class="card d-none d-md-block" id='card-shadow'>
                                        <img src={dabur} class="card-img-top" alt=""/>
                                    </div>
                                    <div class="card d-none d-md-block" id='card-shadow'>
                                        <img src={dettol} class="card-img-top" alt="..."/>
                                    </div>
                                    <div class="card" id='card-shadow'>
                                        <img src={himalaya} class="card-img-top" alt="..."/>
                                    </div>
                                    <div class="card d-none d-md-block" id='card-shadow'>
                                        <img src={johnsons} class="card-img-top" alt="..."/>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="cards-wrapper">
                                    <div class="card d-none d-md-block" id='card-shadow'>
                                        <img src={mamaearth} class="card-img-top" alt="..."/>
                                    </div>
                                    <div class="card d-none d-md-block" id='card-shadow'>
                                        <img src={nivea} class="card-img-top" alt="..."/>
                                    </div>
                                    <div class="card d-none d-md-block" id='card-shadow'>
                                        <img src={proteinx} class="card-img-top" alt="..."/>
                                    </div>
                                    <div class="card d-none d-md-block" id='card-shadow'>
                                        <img src={srisri} class="card-img-top" alt="..."/>
                                    </div>
                                </div>
                            </div>
                    </div>
                    <a class="carousel-control-prev" href="#carousel2" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carousel2" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>
            
            {/* Offers card banners */}
            <div  id='offers'>
                <div className='row'>
                    <div className='col'>
                        <div className='card'>
                            <p><img src={rupee100}></img>  Flat Rs.100 OFF + FREE DELIVERY</p>
                        </div>
                    </div>
                    <div className='col' style={{marginLeft:'-15%'}}>
                        <div className='card'>
                            <p> <img src={rupee200}></img>  Flat Rs.200 OFF + FREE DELIVERY</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Prescription banner or templet */}
            <div className="container" id='prescription'>
                <div class="row" >
                    <div class="col" id='col1' style={{textAlign:'left'}}>
                        <div class="col" >
                               <img src={upload}></img>
                        </div>
                        <div class="col" style={{marginLeft:'35%',marginTop:'-25%',marginBottom:'2%'}}>
                            <h2>Order with Prescription</h2>
                            <p style={{color:'grey',marginLeft:'-1px'}}>Upload prescription and we will deliver your medicines</p>
                            <button ><img src={attach} style={{marginTop:'-4px'}}/>Upload</button>
                        </div>
                        
                    </div>
                    <div class="col" id='col2' style={{textAlign:'left'}}>
                        <h3 >How does this work?</h3>
                        <div class="row" style={{marginTop:'5%'}}>
                            <div class="col" >
                                <div class="col" id='num'>
                                    1
                                </div>
                                <div class="col" id='numwords'>
                                    Upload a photo of your prescription
                                </div>
                            </div>
                            <div class="col" >
                                <div class="col" id='num'>
                                    3
                                </div>
                                <div class="col" id='numwords'>
                                    We will call you to confirm the medicines
                                </div>
                            </div>
                        </div>
                        <div class="row" style={{marginTop:'5%'}}>    
                            <div class="col" >
                                <div class="col" id='num'>
                                    2
                                </div>
                                <div class="col" id='numwords'>
                                    Add delivery address and place the order
                                </div>   
                            </div>
                            <div class="col" style={{marginBottom: '3%'}} >
                                <div class="col" id='num'>
                                    4
                                </div>
                                <div class="col" id='numwords'>
                                    Now, sit back! your medicines will get delivered at your doorstep
                                </div>
                            </div>
                        </div>    
                    </div>
                </div>
            </div>

            {/* Featured Brands Crousle */}
            <div className='Row'>        
                    <div className = 'Col-md'style={{width:'110%',margin: '0% 0% 0% 25%'}}>
                        <div className = 'card' id='cardsize'>
                            <img src={shield}></img>
                        </div>
                        
                        <h3 >Reliable</h3>
                        <p> All products displayed on XPharma are
                            procured from verified and licensed
                            pharmacies.All labs listed on the
                            platform are accredited
                        </p>
                    </div>

                    
                    <div className = 'Col-md' style={{width:'110%',margin: '0% 0% 0% 80%'}}>
                        <div className = 'card' id='cardsize'>
                            <img src={wallet}></img>
                        </div>
                        <h3>Affordable</h3>
                        <p> Find affordable medicine substitutes, save
                            up to 50% on health products,up to
                            80% off on lab tests and free doctor
                            consultations.
                        </p>
                    </div>

                    <div className = 'Col-md' style={{width:'110%',margin: '0% 0% 0% 135%'}}>
                        <div className = 'card' id='cardsize'>
                            <img src={lock}></img>
                        </div>
                        <h3>Secure</h3>
                        <p> XPharma uses Secure Sockets Layer
                            (SSL) 128-bit encryption and is Payment
                            Card Industry Data Security Standard
                            (PCI DSS)compliant
                        </p>
                    </div>   
                
                
                
            </div>
            <br/>
            <Footer/> 
        </div> 
        
        );
}

export default Home;