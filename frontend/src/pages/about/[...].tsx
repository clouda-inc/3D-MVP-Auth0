import React from 'react'
import NavBar from '../../components/navBar/navBar'
import AuthBtn from '../../components/authBtn/authBtn'
import navLinks from '../../navLinks'

const AboutUs = () => {
  return (
    <>
      <NavBar navLinks={navLinks} title='This Is Nav Bar' AuthBtn={AuthBtn} />
      <h1>This is About Us Page</h1>
    </>
  )
}

export default AboutUs