import React from 'react'
import NavBar from '../../components/navBar/navBar'
import AuthBtn from '../../components/authBtn/authBtn'
import ShoppingCart from '../../components/shoppingCart/shoppingCart'
import OrderCard from '../../components/orderCard/orderCard'
import navLinks from '../../navLinks'
import cartData from '../../cartData'
const OrdersPage = () => {

  let ordersList:any[] = []
  ordersList.push(1)
  ordersList.push(3)
  console.log(cartData)
  return (
    <>
      <NavBar navLinks={navLinks} title='This Is Nav Bar' AuthBtn={AuthBtn} />
      <ShoppingCart/>
      {ordersList.map((item,index)=>{
        return <OrderCard key={index}/>
      })}
    </>
  )
}

export default OrdersPage