import React from 'react'
import { useSelector } from 'react-redux'
import CardB from './CardB'
import NavBar from './NavBar'

function Cart() {
  const cart = useSelector(state => state.cart)

  return (
    <div>
      <NavBar/>
      <h2>Cart</h2>
      <div>
      {!cart.length? 
        <div>
          {/* <img src="" alt="" /> */}
          <h5>Oops! Your cart is empty</h5>
        </div>:
        cart.map(product => (<CardB
          key={product.id}
          id={product.id}
          name={product.name}
          image={product.image}
          price={product.price}
          stock={product.stock}
        />))
      }
      </div>
    </div>
  )
}

export default Cart