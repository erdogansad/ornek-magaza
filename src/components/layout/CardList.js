import React from 'react'
import {Row, Col} from "reactstrap"
import CardSingle from './CardSingle'

const CardList = ({foods}) => {
  return (
    <Row className='m-4 px-4 text-center'>
        {
            foods.map(food => (
                <Col key={food.id} xs={2} className='py-3'>
                    <CardSingle food={food}/>
                </Col>
            ))
        }
      
    </Row>
  )
}

export default CardList