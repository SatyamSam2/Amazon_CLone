import React,{useState} from 'react'
import './card.css'
import data from '../Object'
export default function Card({ inputState }) {
   let filteredData =data.filter(ele=>ele.type.includes(inputState.inputState.toLowerCase()))
    return (
        <>
            <div className='parent'>
            {
               filteredData.length==0?
                data.map((ele) => {
                    return (
                        <div className='card-container'key={ele.id}>
                            <div className='image-container'>
                                <img src={ele.image} />
                            </div>
                            <div className='details'>
                                <div className='title'>{ele.title}</div>
                                <div className='price'>{ ele.price}</div>
                                <div className='quantity'>{ele.quantity}</div>
                                <button onClick={()=>inputState.addToCart(ele)}>Add to Cart</button>
                            </div>
                        </div>
                    )
                }):filteredData.map((ele) => {
                    return (
                        <div className='card-container'key={ele.id}> 
                            <div className='image-container'>
                                <img src={ele.image} />
                            </div>
                            <div className='details'>
                                <div className='title'>{ele.title}</div>
                                <div className='price'>Rs. { ele.price}</div>
                                <div className='quantity'>{ ele.quantity}</div>
                               <center><button onClick={()=>inputState.addToCart(ele)} className='button'>Add to Cart</button></center>
                            </div>
                        </div>
                    )
                })



                }
                </div>


        </>
    )
}
