import React, {useEffect, useState} from 'react';
import { useParams, Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, Button } from 'reactstrap';

const Product = ({foods, addToCart}) => {
    const { category, productName } = useParams();
    const capitalize = s => s && s[0].toUpperCase() + s.slice(1);
    const [food, setFood] = useState({});


    useEffect(() => {
        if(foods.length !== 0){
            let prdName = productName.split("-").map(n => capitalize(n)).join(" ");
            let cat = category.split("-").join(" ");


            let finder = foods.find(food => (food.name === prdName && food.category === cat));
            setFood(finder);
        }
    }, [category, productName, foods]);

    if(foods.length === 0){
        return (
            <div>Yükleniyor</div>
        )
    }

    return (
        <div className='h-100'>
            <Breadcrumb className='mt-5'>
                <BreadcrumbItem><Link to="/">Ana Sayfa</Link></BreadcrumbItem>
                <BreadcrumbItem><Link to={`/${food.category}`}>{food.category}</Link></BreadcrumbItem>
                <BreadcrumbItem active>{food.name}</BreadcrumbItem>
            </Breadcrumb>
            <div className='d-flex justify-content-center align-items-center pt-5'>
                <div>
                    <img className="img-fluid" src={food.img} alt="" />
                </div>
                <div className='ps-5 w-50'>
                    <h3>{food.name}</h3>
                    <h6>{food.category}</h6>
                    <p>{food.description}</p>
                    <p>{food.stock} adet kaldı.</p>
                    <h4 className='mb-4'>{food.price}₺</h4>
                    <Button color='success' onClick={() => addToCart(food)}>Satın Al</Button>
                </div>
            </div>
        </div>
    )
}

export default Product