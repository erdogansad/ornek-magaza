import React from 'react'
import {Card, CardBody, CardTitle, CardSubtitle, CardText, Button} from "reactstrap"

const CardSingle = ({food}) => {
  return (
    <Card className='text-center h-100'>
        <img alt="Sample" src={food.img}/>
        <CardBody>
            <CardTitle tag="h5">
                {food.name}
            </CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
                {food.category}
            </CardSubtitle>
            <CardText className='fw-semibold'>
                {food.price}
            </CardText>
            <CardText>
                {food.description}
            </CardText>
            <Button className='mt-auto' disabled={food.stock == 0 && true}>
                Sepete Ekle
            </Button>
        </CardBody>
    </Card>
  )
}

export default CardSingle