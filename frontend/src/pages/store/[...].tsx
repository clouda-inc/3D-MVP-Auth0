import React from 'react'
import { IdToken, useAuth0 } from '@auth0/auth0-react'
import NavBar from '../../components/navBar/navBar'
import AuthBtn from '../../components/authBtn/authBtn'
import navLinks from '../../navLinks'
import ProductDisplay from '../../components/productDisplay/productDisplay'
import cartData from '../../cartData'
const StorePage = ()=>{
    const {user,getAccessTokenSilently,getAccessTokenWithPopup} =useAuth0()
    let roles:string[]
    if(user === undefined){
        roles =[]
    }else{
        roles= user['3D-mvp/roles'] as string[]
        getAccessTokenSilently({audience:'3D-Mvp-Backend'})
        .then(token=>console.log(token))
        .catch(error=>{
            return getAccessTokenWithPopup({audience:'3D-Mvp-Backend'})
            //console.log(error)
        })
        .then(msg=>console.log(msg))
    }
    cartData.push("hello World")
    //getAccessTokenSilently().then(msg=>console.log(msg))
    return(
        <>
        <NavBar navLinks={navLinks} title='This Is Nav Bar' AuthBtn={AuthBtn} />
        <ProductDisplay role={roles.includes('shop-owner')?'shop-owner':'customer'} cartData={cartData}/>
        </>
    )
}

export default StorePage