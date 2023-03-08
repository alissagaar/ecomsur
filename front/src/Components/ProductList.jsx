import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../Redux/actions'
import CardA from './CardA'
import NavBar from './NavBar'
import s from './ProductList.module.css'

function ProductList() {

  const dispatch = useDispatch()
  const productList = useSelector(state => state.productList)

  useEffect(()=>{
    dispatch(getProducts())
  },[dispatch])

  return (
    <div className={s.main}>
      <NavBar/>
      <div className={s.hero}>
        <h2>Electronics</h2>
        <div>Pronto<br /><em>Black Friday</em></div>
      </div>
      <div className={s.productList}>
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
    </div>
  )
}

export default ProductList