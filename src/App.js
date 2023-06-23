import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Card from './components/Card';
import Shirts from './components/SubheaderOption/Shirts';
import Pant from './components/SubheaderOption/Pant';
import Header from './components/Header';
import Subheader from './components/Subheader';
import Cart from './components/cartPage/Cart';

function App() {
  let [inputState, setInputState] = useState('');
  const [cart, setCart] = useState([]); 
  
  function addToCart(product) {
    console.log("clicked on cart",product);
   
    const productinCart = cart.find((ele) => ele.id === product.id);
    console.log(productinCart,"value of productincart")

    if (productinCart) {
      if (productinCart.quantity < productinCart.totalquantity) {
        
        setCart(cart.map((ele) => ele.id === product.id ? { ...productinCart, quantity: productinCart.quantity + 1 } : ele))
      }
    }
    else {
      setCart([...cart, { ...product, quantity: 1 }])
    }
  }
  function deleteToCart(product){
    const productinCarttoDelete = cart.find((ele)=> ele.id=== product.id);
    console.log(productinCarttoDelete);
    if(productinCarttoDelete.quantity===1){
    setCart(cart => cart.filter(ele => {return ele.id !== productinCarttoDelete.id}))
    }else{
      setCart(cart.map((ele)=> ele.id === product.id ? { ...productinCarttoDelete, quantity: productinCarttoDelete.quantity-1}: ele ))
    }
  }

  function removeCart(product) {
    setCart(cart.filter(ele=>ele.id!=product.id))
  }
  return (
    <>
      <BrowserRouter>
        <Header setInputState={{setInputState,cart}} />
        <Subheader />
        {/* so that header and subheader are constant on each page */}
        <Routes>
          <Route path="/" element={<Card inputState={{inputState, addToCart}} />} />
          <Route path="/card" element={<Card />} />
          <Route path="/cartpage" element={<Cart cart={{cart,addToCart,deleteToCart,removeCart}} />} />
          
          {/* please make a shirts component */}
          <Route path="/shirt" element={<Shirts  addToCart={addToCart} />} />
          {/* please make a Pant component */}
          <Route path="/pant" element={<Pant addToCart={addToCart} />} />

        </Routes>
      </BrowserRouter>










    </>
  );
}
export default App;

