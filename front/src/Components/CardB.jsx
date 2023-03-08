import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark} from '@fortawesome/free-solid-svg-icons'
import { removeFromCart, handleMinus, handlePlus } from '../Redux/actions'
import { useDispatch } from 'react-redux'
import s from './CardB.module.css' 

function CardB({id, name, image, price, stock, numItems}) {
  const dispatch = useDispatch()

  return (
    <div className={s.cardB}>
      <img src={`http://localhost:5000${image}`} alt={image} />
      <div className={s.order}>
        <h5>{name}</h5>
        <h4>USD {(price*numItems).toFixed(2)} </h4>
        <div className={s.items}>
          {numItems===1 ? <button disabled>-</button>:<button onClick={() => dispatch(handleMinus(id))}>-</button>}
          <span>&nbsp;&nbsp;{numItems}&nbsp;&nbsp;</span>
          {numItems>= parseInt(stock) ?<button disabled>+</button>:<button onClick={() => dispatch(handlePlus(id))}>+</button>}
        </div>
      </div>
      <div>
        <button className={s.remove} onClick={()=> dispatch(removeFromCart(id))}><FontAwesomeIcon icon={faXmark} /></button>
      </div>
    </div>
  )
}

export default CardB