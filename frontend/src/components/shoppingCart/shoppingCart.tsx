import React from 'react'
import * as Styles from './shoppingCart.module.css'
const ShoppingCart = () => {
  const cartList = []
  cartList.push({
    productName: 'ABC',
    unitPrice: 12,
    quntity: 5,
    totalPrice: 120
  })
  cartList.push({
    productName: 'washing powder',
    unitPrice: 123,
    quntity: 18,
    totalPrice: 6545
  })
  return (
    <div>
      <div>
        <h1>Current Cart</h1>
      </div>
      <div>
        <table>
        <thead>
          <th>Name</th>
          <th>unit Price</th>
          <th>quntity</th>
          <th>total price</th>
        </thead>
        <tbody>
        {cartList.map((item, index) => {
          return (<tr>
            <td>{item.productName}</td>
            <td>{item.unitPrice}</td>
            <td>{item.quntity}</td>
            <td>{item.totalPrice}</td>
          </tr>)
        })}
        <tr>
          <td colSpan={3}>Total Bill</td>
          <td>1230.00</td>
        </tr>
        </tbody>
        </table>
      </div>
      <div>
        <button>Clear Cart</button>
        <button>Submit Order</button>
      </div>
    </div>
  )
}

export default ShoppingCart