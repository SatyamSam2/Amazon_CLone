import React from 'react'
import "../card.css"
export default function PantComp({ data }) {
    console.log(data)
  return (
      <>
          <div className='parent'>
            {

                data.pantData.map((ele) => {
                    return (
                      <div className='card-container'>
                            <div className='image-container'>
                                <img src={ele.image} />
                            </div>
                            <div className='details'>
                                <div className='title'>{ele.title}</div>
                                <div className='price'>Rs. { ele.price}</div>
                                <div className='quantity'>{ ele.quantity}</div>
                                <center><button onClick={()=>data.addToCart(ele)} className='button'>Add to Cart</button></center>
                            </div>
                        </div>
                    )
                })



                }
                </div>
      </>
  )
}
