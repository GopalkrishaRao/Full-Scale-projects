import React from 'react'

export default function Products(props) {
const addToCart = ()=>{}
const buyNow = ()=>{}
  return (
    <>
    <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
            <img src={props.pImg} alt="Shoes" />
        </figure>
        <div className="card-body">
            <h2 className="card-title">{props.pName}</h2>
            <p>
               {props.pDescription}
            </p>
            <div className="card-actions justify-end">
                <div>
                    <h1>{props.rating}</h1>
                    <h1> &#40; {props.ratingNumber} &#41; </h1>
                </div>
                <div className='text-whtie'>
                    <button className="btn btn-primary bg-orange" onClick={addToCart}>
                        Add to Cart
                    </button>
                    <button className="btn btn-primary bg-lred" onClick={buyNow}>
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
