import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping} from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import s from './NavBar.module.css'

function NavBar() {
  const cart = useSelector(state => state.cart)
  return (
    <nav className={s.nav}>
      <Link to={'/'}><h2>NOVA</h2></Link>
      <Link to={'/cart'}><h4><FontAwesomeIcon icon={faCartShopping} />&nbsp;Cart({cart.length})</h4></Link>
    </nav>
  )
}

export default NavBar