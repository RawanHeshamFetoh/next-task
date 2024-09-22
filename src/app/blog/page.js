import React from 'react'
import Card from '../components/Card'
import styles from './blog.module.css'
export const revalidate=5; // ISR

const Blog = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts',{
      cache:'no-store',
    })
    const posts = await res.json()
  return (
    <div className={styles.blog}>
     {
        posts.map((post)=>{ return (
            <Card title={post.title} id={post.id} body={post.body} key={post.id} />
        )})
     }
    </div>
  )
}

export default Blog
