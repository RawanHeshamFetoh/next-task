import React from 'react'
import db from './db'

const getProductById =async(id) => {
  return await db.collection('products').findOne({id})
}

export default getProductById
