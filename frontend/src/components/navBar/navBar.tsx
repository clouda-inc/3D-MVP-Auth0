import React from 'react'
import * as Styles from './navBar.module.css'
import {Link} from 'gatsby'
export interface NavBarProps{
  AuthBtn:()=>JSX.Element
  title:string
  navLinks:{title:string,url:string}[]
}

const NavBar = ({AuthBtn,title,navLinks}:NavBarProps) => {
  
  return (
    <nav className={Styles.navBar}>
      <h1>3D MVP Auth0</h1>
      {navLinks.map((link,ind)=>{
        return <Link key={ind} to={link.url}> {link.title} </Link>
      })}
      <AuthBtn/>
    </nav>
  )
}
export default NavBar