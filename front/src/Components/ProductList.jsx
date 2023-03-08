import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../Redux/actions'
import CardA from './CardA'
import NavBar from './NavBar'

function ProductList() {

  const dispatch = useDispatch()
  const productList = useSelector(state => state.productList)

  useEffect(()=>{
    dispatch(getProducts())
  },[dispatch])

  return (
    <div>
      <NavBar/>
      Electronics
      {productList.length && productList.map(product => (<CardA
        key={product._id}
        id={product._id}
        name={product.name}
        image={product.image}
        brand={product.brand}
        price={product.price}
        stock={product.countInStock}
        rating={product.rating}
        numReviews={product.numReviews}
      />))}
    </div>
  )
}

export default ProductList