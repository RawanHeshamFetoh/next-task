import React from 'react'
import db from './db'

const getProduct =async () => {
  return await db.collection('products').find().toArray()
}

export default getProduct
