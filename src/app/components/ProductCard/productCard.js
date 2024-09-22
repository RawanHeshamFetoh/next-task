import React from 'react'
import styles from './productCard.module.css'
import Image from 'next/image';
import Link from 'next/link';
const ProductCard = ({ product }) => {
    const inStock = product.stock > 0;
  
    return (
      <div className={styles.card}>
          <Link href={`/product/${product.id}`}>
          <Image src={product.thumbnail? product.thumbnail : ''} width={300} height={340} className={styles.img} alt=''/>
          </Link>
        <div className="card-body">
          <span className={`badge ${inStock ? 'bg-success' : 'bg-danger'}`}>
            {inStock ? 'In Stock' : 'Out of Stock'}
          </span>
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">{product.price} $</p>
  
         
          <button
            className={styles.cardBtn}
          >
            Add to Cart
          </button>
        </div>
      </div>
    );
  };
  
  export default ProductCard;