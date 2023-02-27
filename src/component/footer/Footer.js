import React from "react";
import { Container,Row,Col } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
return (
	<div className='Container' id='footer'>
		<div className = 'Row'>
			<div className = 'Col'>
				<h2>About Us</h2><br/>
				<a href="#">Aim</a>
				<a href="#">Vision</a>
				<a href="#">Testimonials</a>
			</div>
			<div className = 'Col'>
				<h2>Services</h2><br/>
				<a href="#">Medicine</a>
				<a href="#">Lab Tests</a>
				<a href="#">Surgeries</a>
				<a href="#">Healthcare Products</a>
			</div>
			<div className = 'Col'>
				<h2>Contact Us</h2><br/>
				<a href="#">9898443333</a>
				<a href="#">9898553333</a>
				<a href="#">9898223333</a>
				<a href="#">9898113333</a>
			</div>
			<div className = 'Col'>
				<h2>Featured Categories</h2>
				<a href="#">Personal Care</a>
				<a href="#">Healthcare Devices</a>
				<a href="#">Skin Care</a>
				<a href="#">Health Food and Drinks</a>
				
			</div>
			<div className = 'Col'>
				<br/><br/><br/><br/>
				<a href="#">Diabetic Care</a>
				<a href="#">Ayurvadic Care</a>
				<a href="#">Baby Care</a>
				<a href="#">Fitness Supplements</a>

			</div>
		</div>
		<div>
			<p>© 2023 XPharma. All rights reserved. 
			In compliance with Drugs and Cosmetics Act, 1940 and Drugs and Cosmetics Rules,
			1945, we don't process requests for Schedule X and other habit forming drugs.
			</p>
		</div>
	</div>

);
};
export default Footer;
