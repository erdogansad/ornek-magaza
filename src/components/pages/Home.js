import React from 'react'
import CardList from '../layout/CardList'

const Home = ({foods}) => {
  return (
    <CardList foods={foods}/>
  )
}

export default Home