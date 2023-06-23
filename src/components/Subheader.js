import React from "react";
import './subheader.css'
import {Link} from "react-router-dom"

function Subheader() {
    return (
        <>
            <div className="subheader">
                <Link to="/shirt">
                    <div>Shirts</div>
                </Link>
                <Link to="/pant">
                    <div>Pants</div>
                </Link>
            </div>
            <div className='image'>
                    <img src='/images/kgf.png'/>
                </div>
        </>
    )
}

export default Subheader