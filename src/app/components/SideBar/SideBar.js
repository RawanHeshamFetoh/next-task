"use client"
import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import styles from './sideBar.module.css'
const SideBar = () => {
    const pathName =usePathname()
    const routesside = [
      {title:'Blog',href:'/blog'},
      {title:'Contact Us' , href:'/contact-us'},
      {title:'About Us', href:'/about-us'},
      {title:'Login',href:'/login'}

    ]
  return (
    <div>
       <header className={styles.sideBar}>

      <ul >
        {routesside.map((route,index) => (
          <li key={index}>
            <Link href={route.href} className={pathName === route.href? styles.active : ''}>{route.title}</Link>
          </li>
        ))}
      </ul>
    </header>
    </div>
  )
}

export default SideBar
