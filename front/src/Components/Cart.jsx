import React from 'react'
import { useSelector } from 'react-redux'
import CardB from './CardB'
import NavBar from './NavBar'
import s from './Cart.module.css'
import { useNavigate } from 'react-router-dom'

function Cart() {
  const cart = useSelector(state => state.cart)

  const navigate= useNavigate()

  return (
    <div>
      <NavBar/>
      <h2 className={s.page}>Cart</h2>
      <div className={s.cartContent}>
      {!cart.length? 
        <div className={s.emptyCart}>
          <div></div>
          <h3>Oops! Your cart is empty</h3>
          <button onClick={()=>navigate("/")}>Go Shopping</button>
        </div>:
        cart.map(product => (<CardB
          key={product.id}
          id={product.id}
          name={product.name}
          image={product.image}
          price={product.price}
          stock={product.stock}
          numItems={product.numItems}
        />))
      }
      </div>
    </div>
  )
}

export default Cart