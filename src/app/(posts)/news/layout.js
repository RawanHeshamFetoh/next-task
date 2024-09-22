import Footer from '@/app/components/Footer/Footer'
import Header from '@/app/components/Header/Header'
import SideBar from '@/app/components/SideBar/SideBar'
import React from 'react'
import styles from './news.module.css'
const layout = ({children}) => {
  return (
    <div>
      <Header/>
      <SideBar/>
      {children}
      
    </div>
  )
}

export default layout
