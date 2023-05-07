import React from 'react'
import CardList from '../layout/CardList'

const Home = ({foods, addToCart}) => {
  return (
    <CardList foods={foods} addToCart={addToCart}/>
  )
}

export default Home