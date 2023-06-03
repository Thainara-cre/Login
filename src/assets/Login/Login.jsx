import React from 'react'
import Header from '../Header/Header'
import Inputs from '../Inputs/Inputs'
import Footer from '../Footer/Footer'
import styled from 'styled-components'


const LoginContainer = styled.div `
  display: block;
  width: 60%;
  height: 100%;
  padding-left:1rem;
`

function Login() {
  return (
    <LoginContainer>
        <Header />
        <Inputs />
        <Footer />
    </LoginContainer>
  )
}

export default Login