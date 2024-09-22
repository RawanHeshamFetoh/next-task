
import getProduct from '@/lib/getProduct'

import React from 'react'
import styles from './products.module.css'
import ProductCard from '../components/ProductCard/productCard'
import { GET } from '../api/product/route'

const LocalProducts = async () => {
  const response = await GET(); 
        const products = await response.json();
  // const products = await getProduct()
  console.log(response)


  return (
    <div className={styles.center}>

      <div className="row row-cols-1 mx-5 row-cols-md-2  row-cols-lg-auto mx-lg-0 row-gap-4 justify-content-center  ">
        {products.map(product => (
          <div className="col mx-auto " key={product._id}>
            <ProductCard product={product}/>
          </div>
        ))}
      </div>

    </div>)
}

export default LocalProducts
