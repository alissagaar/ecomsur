import React from 'react'

function CardA({id, name, image, brand, price, stock, rating, numReviews}) {
  // const starsRating = rating===5? '★★★★★': rating===4.5? '★★★★'
  return (
    <div>
      {/* <img src={`http://localhost:5000${image}`} alt={image} /> */}
      <span>{brand}</span>
      <h3>{name}</h3>
      <h4>{}</h4>
      
      <h4>{price}</h4>
      {stock===0 ? <button disabled>Add item to cart</button> : <button>Add item to cart</button>}
    </div>
  )
}

export default CardA