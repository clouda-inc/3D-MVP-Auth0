import React from 'react'
import * as Styles from './productCard.module.css'
const AddProductCard = () => {
  return (
    <div className={Styles.productCard}>
      <div className={Styles.productCardImg}><img src={'https://static.thenounproject.com/png/1053562-200.png'} alt='sample img' /></div>
      <div className={Styles.productCardBody} >
        <h3>Add New Product</h3>
        <span>Click add new button</span>
      </div>
      <div className={Styles.productCardStockSection}>
        <span>In Stock : 0</span>
      </div>
      <div className={Styles.productCardSCartSection}>
        <button disabled={true}> Add To Cart  </button>
        <div className={Styles.productCardQuntitySection}><button disabled={true}>-</button><input disabled={true} type="text" value={0} /><button disabled={true}>+</button></div>
      </div>
      <div className={Styles.productCardActionSection}>
        <button>Add New</button>
      </div>

    </div>
  )
}

export default AddProductCard