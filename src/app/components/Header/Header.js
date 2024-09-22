"use client"
import Link from 'next/link'
import React from 'react'
import styles from './hearer.module.css'
import { usePathname } from 'next/navigation'
const Header = () => {
  const pathName =usePathname()
    const routes = [
      {title:'Blog',href:'/blog'},
      {title:'Contact Us' , href:'/contact-us'},
      {title:'About Us', href:'/about-us'},
      {title:'Login',href:'/login'},
      {title:'News' , href:'/news'},
      {title:'date' , href:'/date'},
      {title:'local-products' , href:'/local-products'},
      {title:'add-product' , href:'/add-product'},

    ]

  return (
    // <nav className={styles.nav}>
    //   <h2> my app </h2>
    //   <ul >
    //     {routes.map((route,index) => (
    //       <li key={index}>
    //         <Link href={route.href} className={pathName === route.href? styles.active : ''}>{route.title}</Link>
    //       </li>
    //     ))}
    //   </ul>
    // </nav>
    <nav class={`navbar navbar-expand-lg navbar-light bg-light ${styles.nav}`}>
  <div class="container-fluid">
  <h2> my app </h2>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      
      <ul class="navbar-nav">
  
        {
          routes.map((route,index) => (
            <li class="nav-item " key={index}>
              <Link href={route.href} className={`nav-link ${pathName === route.href? styles.active : ''}`}>{route.title}</Link>
          
        </li>
          ))
        }
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Header
