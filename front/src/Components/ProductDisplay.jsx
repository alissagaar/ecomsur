import React, { useEffect } from 'react'
import { getProductDetails } from '../Redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalfStroke} from '@fortawesome/free-solid-svg-icons'
import NavBar from './NavBar'

function ProductDisplay() {
  const dispatch = useDispatch()
  const { id } = useParams()
  const product = useSelector(state => state.productDisplay)

  useEffect(()=>{
    dispatch(getProductDetails(id))
  },[dispatch, id])

  return (
    <div>
      <NavBar />
      <img src={`http://localhost:5000${product.image}`} alt={product.image} />
      <div>
        <span>{product.brand}</span>
        <h3>{product.name}</h3>
        <div>
          {product.rating===5? <h4> <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></h4>: product.rating=== 4.5? <h4> <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStarHalfStroke} /></h4> : product.rating=== 4? <h4> <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></h4> : product.rating===3.5? <h4> <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStarHalfStroke} /></h4> : product.rating===3? <h4> <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></h4>: product.rating===2.5? <h4> <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStarHalfStroke} /></h4> :product.rating===2? <h4> <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></h4>: product.rating===1.5? <h4> <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStarHalfStroke} /></h4>: <h4><FontAwesomeIcon icon={faStar} /></h4>}
          <small>{product.numReviews} reviews</small>
        </div>
        <h2>USD {product.price}</h2>
        <p>{product.description}</p>
      </div>
    </div>
  )
}

export default ProductDisplay