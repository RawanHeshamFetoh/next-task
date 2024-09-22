"use client"
import React from 'react'
import CardFooter from '../CardFooter'
import styles from './card.module.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
const Card = ({title , body ,id}) => {
  const path =usePathname()
  return (
    <div className={styles.card}>
      <h6>{title} </h6>
      <p>{body} </p>
      {path === '/blog' || path === '/news' && (
        <Link href={`/post/${id}`} className={styles.readMore}>
          Read More
        </Link>
      )}
     
      <CardFooter id={id}/>
    </div>
  )
}

export default Card
