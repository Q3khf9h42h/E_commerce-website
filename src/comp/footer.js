import React from 'react';
import './footer.css';
import {FaPiggyBank,FaShippingFast,FaHeadphonesAlt,FaWallet} from 'react-icons/fa';

const Footer = () => {
  return (
   <>
   <div className='footer'>
    <div className='container'>
        <div className='left-box'>
            <div className='box'>
                <div className='icon_box'>
                     <FaPiggyBank/>
                </div>
                <div className='detail'>
                    <h3>Great Saving</h3>
                    <p>Lorem ipsum dolor sit amet </p>
                </div>
                
            </div>
            <div className='box'>
                <div className='icon_box'>
                     <FaShippingFast/>
                </div>
                <div className='detail'>
                    <h3>free delivery</h3>
                    <p>Lorem ipsum dolor sit amet </p>
                </div>
                
            </div>
            <div className='box'>
                <div className='icon_box'>
                     <FaHeadphonesAlt/>
                </div>
                <div className='detail'>
                    <h3>24x7 support</h3>
                    <p>Lorem ipsum dolor sit amet </p>
                </div>
                
            </div>
            <div className='box'>
                <div className='icon_box'>
                     <FaWallet/>
                </div>
                <div className='detail'>
                    <h3>Money Back</h3>
                    <p>Lorem ipsum dolor sit amet </p>
                </div>
                
            </div>
            
        </div>
        <div className='right_box'>
          <div className='header'>
           <h2>THE GENERICS</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae</p>
            </div> 
            <div className='bottom'>
                <div className='box'>
                    <h3>Your Account</h3>
                    <ul>
                        <li>About</li>
                        <li>Account</li>
                        <li>Payment</li>
                        <li>Sales</li>
                    </ul>
                </div>
                <div className='box'>
                    <h3>Products</h3>
                    <ul>
                        <li>Delivery</li>
                        <li>Track Order</li>
                        <li>New product</li>
                        <li>Old product</li>
                    </ul>
                </div>
                <div className='box'>
                    <h3>Contact us</h3>
                    <ul>
                        <li>4005,Silva point</li>
                        <li>+(34)879965589</li>
                        <li>Harshita.sethiya@gmail.com</li>
                        
                    </ul>
                </div>
                
                </div>  
        </div>
    </div>
   </div>
   </>
  )
}

export default Footer