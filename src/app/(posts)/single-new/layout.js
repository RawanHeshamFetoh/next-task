import Header from '@/app/components/Header/Header'
import SideBar from '@/app/components/SideBar/SideBar'
import React from 'react'

const layout = ({children}) => {
  return (
    <div>
      <Header/>

      {children}
    </div>
  )
}

export default layout
