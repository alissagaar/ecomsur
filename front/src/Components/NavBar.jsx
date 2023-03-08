import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping} from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function NavBar() {
  const cart = useSelector(state => state.cart)
  return (
    <nav>
      <Link to={'/'}><h2>LOGO</h2></Link>
      <Link to={'/cart'}><h2><FontAwesomeIcon icon={faCartShopping} />&nbsp;Cart({cart.length})</h2></Link>
    </nav>
  )
}

export default NavBar