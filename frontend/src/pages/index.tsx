import * as React from 'react'
import type { HeadFC } from 'gatsby'
import NavBar from '../components/navBar/navBar'
import AuthBtn from '../components/authBtn/authBtn'
import navLinks from '../navLinks'

const IndexPage = () => {
  return (
    <NavBar navLinks={navLinks} title='This Is Nav Bar' AuthBtn={AuthBtn}/>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
