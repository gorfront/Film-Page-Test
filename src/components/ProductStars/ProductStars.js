import React, { useState } from 'react'
 
import './ProductStars.css'

function ProductStars({kp}) {
    const [rating, setRating] = useState(0);

  return (
    <div className="productItem__star-rating">
                {[...Array(10)].map((star, index) => {
                    index += 1;
                    return (
                        <button
                            type="button"
                            key={index}
                            className={index <= kp ? "on" : "off"}
                        >
                            <span className="star">&#9733;</span>
                        </button>
                    );
                })}
            </div>
  )
}

export default ProductStars