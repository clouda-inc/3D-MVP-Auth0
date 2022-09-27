import React, { useState } from 'react'
import * as Styles from './productCard.module.css'
interface ProductCardProps {
  role: string
}
const ProductCard = ({ role }: ProductCardProps) => {
  let [quntity, setQuantity] = useState(0)
  const increaseQuntity = () => {
    setQuantity(quntity + 1)
  }
  const reduceQuntity = () => {
    if (quntity > 0) {
      setQuantity(quntity - 1)
    }
  }
  return (
    <div className={Styles.productCard}>
      <div className={Styles.productCardImg}><img src={'https://img.traveltriangle.com/blog/wp-content/uploads/2018/11/indian-restaurants-austria-cover-img.jpg'} alt='sample img' /></div>
      <div className={Styles.productCardBody} >
        <h3>Lorem Ipsum</h3>
        <span>Description</span>
      </div>
      <div className={Styles.productCardStockSection}>
        <span>In Stock : 10</span>
      </div>
      <div className={Styles.productCardSCartSection}>
        <button> Add To Cart  </button>
        <div className={Styles.productCardQuntitySection}><button onClick={reduceQuntity}>-</button><input type="text" value={quntity} readOnly={true} /><button onClick={increaseQuntity}>+</button></div>
      </div>
      { role === 'shop-owner' 
        ?
        <div className={Styles.productCardActionSection}>
          <button>Edit</button>
          <button>Delete</button>
        </div>
        : 
        null
      }


    </div>
  )
}

export default ProductCard