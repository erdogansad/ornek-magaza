import React from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Cart = ({cart, deleteFromCart}) => {
  return (
    <div className='m-4 px-4'>
      <ListGroup>
        {
          cart.map((item, i) => {
            return (<ListGroupItem key={i} className='d-flex align-items-center justify-content-around'>
              <img style={{height: "7rem", width: "auto"}} src={item.img} alt="" />
              <h6>{item.name}</h6>
              <h6>{item.price}</h6>
              <FontAwesomeIcon icon={faTrash} onClick={() => deleteFromCart(item.id)}/>
            </ListGroupItem>)
          })
        }
        
    </ListGroup>
    </div>
  )
}

export default Cart