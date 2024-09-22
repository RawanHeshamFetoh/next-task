import Card from '@/app/components/Card'
import React from 'react'
import styles from './singleNews.module.css'
const Post =async ({params}) => {
    const {id} = params
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const post = await res.json()
  return (
    <div className={styles.middle}>
       <Card title={post.title} id={post.id} body={post.body} key={post.id} />
    </div>
  )
}

export default Post
