import React from 'react'

import './ProductRate.css'

function ProductRate({kp, imdb,}) {
    return (
        <div className='productItem__rate'>
            <p className='productItem__rate__text'>IMDB: {imdb}</p>
            <p className='productItem__rate__text'>KP:   {kp}</p>
        </div>
    )
}

export default ProductRate