import React from 'react'
import { useNavigate } from 'react-router';
import ProductRate from '../ProductRate/ProductRate';
import ProductStars from '../ProductStars/ProductStars';

import './ProductsItem.css'

function ProductsItem({ year, id, img_big, name, kp, imdb,  }) {

    const navigate = useNavigate()

    return (
        <div key={id} className="productsItem" onClick={() => {
            navigate(`/film/${id}`);
            window.location.reload(true)
        }}>

                <img src={img_big} alt={name} className='productItem__img' />

                <ProductRate kp={kp} imdb={imdb} />

                <div className='productItem__name'>
                    <h2>{name} ({year})</h2>
                </div>

                <ProductStars kp={kp} />
            
        </div>
    )
}

export default ProductsItem