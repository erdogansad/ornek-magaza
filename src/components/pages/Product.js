import React from 'react';
import { useParams } from 'react-router-dom';

const Product = () => {
    const {urunId} = useParams();

    return (
        <div>Product - {urunId}</div>
    )
}

export default Product