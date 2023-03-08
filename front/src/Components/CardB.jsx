import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark} from '@fortawesome/free-solid-svg-icons'
import { removeFromCart } from '../Redux/actions'
import { useDispatch } from 'react-redux' 

function CardB({id, name, image, price, stock}) {
  const dispatch = useDispatch()
  const [quantity, setQuantity] = useState(1)

  return (
    <div>
      <img src={`http://localhost:5000${image}`} alt={image} />
      <div>
        <h5>{name}</h5>
        <h4>USD {price} </h4>
        <div>
          {quantity===1 ? <button disabled>-</button>:<button onClick={() => setQuantity(prev => prev - 1)}>-</button>}
          <span>{quantity}</span>
          {quantity>= parseInt(stock) ?<button disabled>+</button>:<button onClick={() => setQuantity(prev => prev + 1)}>+</button>}
        </div>
      </div>
      <div>
        <button onClick={()=> dispatch(removeFromCart(id))}><FontAwesomeIcon icon={faXmark} /></button>
      </div>
    </div>
  )
}

export default CardB