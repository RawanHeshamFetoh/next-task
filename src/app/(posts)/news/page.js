import React from 'react'
import Card from '../../components/Card'
import styles from './news.module.css'
import Link from 'next/link'
const News = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts',{
      cache:"no-store"
    })
    const news = await res.json()
  return (
    <div className={styles.blog}>
     {
        news.map((singleNew)=>{ return (
         
            <Card title={singleNew.title} id={singleNew.id} body={singleNew.body} key={singleNew.id} />
  
        )})
     }
    </div>
  )
}

export default News
