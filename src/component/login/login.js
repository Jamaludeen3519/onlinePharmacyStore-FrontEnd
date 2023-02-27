import './login.css'
import { Link ,useNavigate } from "react-router-dom";
import register from "../images/register.jpg";
import React, {useCallback } from "react";
import {useFormik} from 'formik';
import * as yup from "yup";
import LoginService from '../../Services/LoginService';
import Header from '../header/Header.js'
import Footer from '../footer/Footer.js'

function Login(){
  const Navigate= useNavigate();
const registerFormSchema = yup.object().shape({
  email : yup.string().email().required("Email is a required field"),
  password : yup.string().min(8).required("Please enter password of atleast 8 charaters"),
});

const handleOnSubmit = (values) => {
  console.log("inside handleOnSubmit")  
  async function saveLogin(){
      try{
          
        LoginService.saveLogin(formik.values).then(
              (res) => {
                console.log(JSON.stringify(res)) 
                  alert(res.data.status)   
                  Navigate('/')
              }
          )
      }catch(error){
          console.log(error);
      }
  }
  saveLogin();
};

    const formik = useFormik({
      initialValues:{
          email : "",
          password : "",
      },
      validationSchema :registerFormSchema,
      onSubmit: handleOnSubmit,
    });

    const onUpdateField = useCallback(
    (key,value) => 
      formik.setValues({
          ...formik.values,
          [key]: value,
      }),
      [formik]
      ) ;


    return(
      <>
      <Header/>
        <div class="container" id='login'>
            <h1 id='h1' style={{paddingTop:'10%'}} >Login</h1>
        <div className='row'> 
          <div className='col' id='col1'>    
          <form onSubmit={formik.handleSubmit}>
              <div className="custom-form-group mt-3">
                  <label className="text-uppercase" for="email">
                  Email
                  </label>
                  <input type="text" id="email"
                  className="pb-1" 
                  name="email"  
                  value = {formik.values.email} 
                  onChange={(e) => onUpdateField("email",e.target.value)}/><br/>
                  <small style={{color:'red'}}>{formik.errors.email}</small>   
              </div>
              <div className="custom-form-group mt-3">
                  <label className="text-uppercase" for="password">
                  Password
                  </label>
                  <input type="password" id="password"
                  className="pb-1" 
                  name="password"  
                  value = {formik.values.password} 
                  onChange={(e) => onUpdateField("password",e.target.value)}/>
                  <small style={{color:'red'}}>{formik.errors.password}</small>
              </div>
                      <div className="mt-5">
                        <button type="submit" className="w-100 p-2 d-block custom-btn" disabled={!formik.isValid}>
                          Login
                        </button>
                      </div>
                      <p className="mt-3 link">
                        Are you Admin?{" "}
                        <Link to="/adminlogin">
                          <label className="linklabel"> Admin Login Here</label>
                        </Link>
                      </p>
                      <p className="mt-3 link">
                        Don't have a Acount?{" "}
                        <Link to="/signup">
                          <label className="linklabel"> SignUp Here</label>
                        </Link>
                      </p>
                    </form>
            </div>
            <div className='col' id='col2' style={{marginTop:'-12%'}}>
                      <div className="d-none d-md-block d-lg-block p-2">
                          <img className="objectFit" src={register} />
                      </div>
                  </div>
          </div>
        </div> 
        <Footer/>
        </> 
    );
}

export default Login;