import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalfStroke, faCartShopping} from '@fortawesome/free-solid-svg-icons'

function CardA({id, name, image, brand, price, stock, rating, numReviews}) {
  return (
    <div>
      {/* <img src={`http://localhost:5000${image}`} alt={image} /> */}
      <span>{brand}</span>
      <Link to={`/${id}`}><h3>{name}</h3></Link>
      <div>
        {rating===5? <h4> <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></h4>: rating=== 4.5? <h4> <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStarHalfStroke} /></h4> : rating=== 4? <h4> <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></h4> : rating===3.5? <h4> <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStarHalfStroke} /></h4> : rating===3? <h4> <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></h4>: rating===2.5? <h4> <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStarHalfStroke} /></h4> :rating===2? <h4> <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></h4>: rating===1.5? <h4> <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStarHalfStroke} /></h4>: <h4><FontAwesomeIcon icon={faStar} /></h4>}
        <small>{numReviews}</small>
      </div>
      <div>
        <h4>USD {price}</h4>
        {stock===0 ? 
        <button disabled><FontAwesomeIcon icon={faCartShopping} /></button> : <button><FontAwesomeIcon icon={faCartShopping} /></button>}
      </div>
    </div>
  )
}

export default CardA