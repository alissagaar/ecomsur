import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalfStroke, faCartShopping} from '@fortawesome/free-solid-svg-icons'
import { addToCart } from '../Redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import s from './CardA.module.css'

function CardA({id, name, image, brand, price, stock, rating, numReviews}) {
  const dispatch = useDispatch()

  //Checking there is no repeated item in the cart
  const cart = useSelector(state => state.cart)
  const repeated = cart.find(product => product.id === id)

  return (
    <div className={s.cardA}>
      <img src={`http://localhost:5000${image}`} alt={image} />
      <span>{brand}</span>
      <Link to={`/${id}`}><h3>{name}</h3></Link>
      <div className={s.rating}>
        {rating===5? <h4> <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></h4>: rating=== 4.5? <h4> <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStarHalfStroke} /></h4> : rating=== 4? <h4> <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></h4> : rating===3.5? <h4> <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStarHalfStroke} /></h4> : rating===3? <h4> <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></h4>: rating===2.5? <h4> <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStarHalfStroke} /></h4> :rating===2? <h4> <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></h4>: rating===1.5? <h4> <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStarHalfStroke} /></h4>: <h4><FontAwesomeIcon icon={faStar} /></h4>}
        <div>{numReviews}</div>
      </div>
      <div className={s.cta}>
        <h4>USD {price}</h4>
        {stock===0 ? 
        <button disabled><FontAwesomeIcon icon={faCartShopping} />&nbsp;&nbsp;ADD TO CART</button> : 
        repeated ? <button><FontAwesomeIcon icon={faCartShopping} />&nbsp;&nbsp;ADD TO CART</button>:
        <button onClick={()=>dispatch(addToCart({id, name, image, price, stock}))}><FontAwesomeIcon icon={faCartShopping}/>&nbsp;&nbsp;ADD TO CART</button>}
      </div>
    </div>
  )
}

export default CardA