import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'
export default function Header({ setInputState }) {
    // console.log(setInputState);
    console.log(setInputState.cart);
    function manageInput(e){
        let { value } = e.target
        console.log(value);
        setInputState.setInputState(value)

    }
    return (
        <>
<div className="header">
                <div className="img-container">
                    
                    <Link to="/"><img src="/images/amazon.png" /></Link>
                    
                </div>
                <div className="content-container">
                    <div className="hello">Hello</div>
                    <div className="Address">Select your address</div>
                </div>
                <div className="search-box">
                    <input type="text" placeholder="Search your product here" onChange={manageInput}/>
                </div>
                <div className='flag'>
                    <img src='/images/flag.png'/>
                </div>
                <div class="sign-in">
                    <div class="hello">Hello, Sign in</div>
                    <div class="account">Account & Lists</div>
                </div>
                <div class="return-order">
                    <div class="return">Returns</div>
                    <div class="order">&Orders</div>
                </div>
                <div className='cart'>
                    <Link to="/cartpage" ><img src="/images/cart2.png"/></Link>
                    <div className='box'>{setInputState.cart.length}</div>
                </div>
            </div>
        
      
      </>
  )
}
