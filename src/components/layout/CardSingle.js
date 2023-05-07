import React from 'react'
import { Link } from "react-router-dom";
import {Card, CardBody, CardTitle, CardSubtitle, CardText, Button} from "reactstrap"

const CardSingle = ({food, addToCart}) => {
    const foodLink = food.name.toLowerCase().split(" ").join("-");
    const foodCategory = food.category.toLowerCase().split(" ").join("-");
    

  return (
    <Card className='text-center h-100'>
        <Link to={`${foodCategory}/${foodLink}`}><img alt="Sample" src={food.img+food.id}/></Link>
        <CardBody className='h-100'>
            <CardTitle tag="h5">
                <Link to={`${foodCategory}/${foodLink}`}>{food.name}</Link>
            </CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
                <Link to={`${foodCategory}`}>{food.category}</Link>
            </CardSubtitle>
            <CardText className='fw-semibold'>
                {food.price}
            </CardText>
            <CardText>
                {food.description}
            </CardText>
        </CardBody>
        <Button color="success" className='mx-5 mb-2' disabled={food.stock === 0 && true} onClick={() => addToCart(food)}>
            Sepete Ekle
        </Button>
    </Card>
  )
}

export default CardSingle