import React from 'react'
import {Row, Col} from "reactstrap"
import CardSingle from './CardSingle'

const CardList = ({foods, addToCart}) => {
  return (
    <Row className='m-4 px-4 text-center'>
        {
            foods.map(food => (
                <Col key={food.id} xs={3} className='py-3'>
                    <CardSingle food={food} addToCart={addToCart}/>
                </Col>
            ))
        }
      
    </Row>
  )
}

export default CardList