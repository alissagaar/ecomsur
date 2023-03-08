import React, { useEffect } from 'react'
import { getProductDetails } from '../Redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addToCart } from '../Redux/actions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalfStroke, faCartShopping} from '@fortawesome/free-solid-svg-icons'
import NavBar from './NavBar'
import s from './ProductDisplay.module.css'

function ProductDisplay() {
  const dispatch = useDispatch()
  const { id } = useParams()
  const product = useSelector(state => state.productDisplay)

    //Checking there is no repeated item in the cart
    const cart = useSelector(state => state.cart)
    const repeated = cart.find(product => product.id === id)

  useEffect(()=>{
    dispatch(getProductDetails(id))
  },[dispatch, id])

  return (
    <div className={s.main}>
      <NavBar />
      <div className={s.product}>
        <img src={`http://localhost:5000${product.image}`} alt={product.image} />
        <div className={s.info}>
          <span>{product.brand}</span>
          <h3>{product.name}</h3>
          <div className={s.rating}>
            {product.rating===5? <h4> <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></h4>: product.rating=== 4.5? <h4> <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStarHalfStroke} /></h4> : product.rating=== 4? <h4> <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></h4> : product.rating===3.5? <h4> <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStarHalfStroke} /></h4> : product.rating===3? <h4> <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></h4>: product.rating===2.5? <h4> <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStarHalfStroke} /></h4> :product.rating===2? <h4> <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></h4>: product.rating===1.5? <h4> <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStarHalfStroke} /></h4>: <h4><FontAwesomeIcon icon={faStar} /></h4>}
            <div>{product.numReviews} reviews</div>
          </div>
          <h2>USD {product.price}</h2>
          <p>{product.description}</p>
          {product.countInStock===0 ? 
          <button disabled><FontAwesomeIcon icon={faCartShopping} />&nbsp;&nbsp;ADD TO CART</button> : 
          repeated ? <button><FontAwesomeIcon icon={faCartShopping} />&nbsp;&nbsp;ADD TO CART</button>:
          <button onClick={()=>dispatch(addToCart({id:product._id, name: product.name, image:product.image, price:product.price, stock:product.countInStock}))}><FontAwesomeIcon icon={faCartShopping}/>&nbsp;&nbsp;ADD TO CART</button>}
        </div>
      </div>
    </div>
  )
}

export default ProductDisplay