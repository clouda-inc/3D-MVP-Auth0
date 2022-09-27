import React from 'react'
import ProductCard from './productCard'
import AddProductCard from './addProduct'
import * as Styles from './productDisplay.module.css'
interface ProductDisplayProps{
    role:string
}
const ProductDisplay = ({role}:ProductDisplayProps)=>{
    let products = []
    products.push(1)
    products.push(2)
    products.push(3)
    products.push(4)
    products.push(5)
    products.push(6)
    products.push(7)
    products.push(8)
    products.push(9)

    return(
        <div className={Styles.productDisplay}>
            {role==='shop-owner'?<AddProductCard key={0}/>:null}
            {products.map(item => <ProductCard role={role} key={item}/>)}
        </div>
    )

}

export default ProductDisplay