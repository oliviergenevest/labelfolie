
import React from "react"
import Reboot from '../style/reboot'
import Global from '../style/global'
import Footer from './footer'
import Header from './header'
import styled from 'styled-components'


const Page = styled.div `
  background-color:#fff;
  position: relative;
  width: 100%;
  min-height:100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
` 


const Content = styled.div `
  flex:1;
  width:100%;
  
`

export default function Layout({ children }) {
  return (
    <Page>
      <Reboot />
      <Global />  
     
        <Header/>
        <Content>
          {children} 
        </Content> 
        <Footer/>  
   

    </Page>
  )
}