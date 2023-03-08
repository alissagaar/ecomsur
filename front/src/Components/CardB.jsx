import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark} from '@fortawesome/free-solid-svg-icons'

function CardB({id, name, image, brand, price, stock}) {
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
        <button><FontAwesomeIcon icon={faXmark} /></button>
      </div>
    </div>
  )
}

export default CardB