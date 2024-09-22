"use client "

import { useRouter } from "next/navigation"
import styles from './detail.module.style.css'
import Image from "next/image"



const Product = ({productsDetail , nextId , prevId}) => {
  const router = useRouter()
  const next=()=>{
    if(nextId){
      router.push(`/product/${nextId}`)
    }
  }
  const prev=()=>{
    if(prevId){
      router.push(`/product/${prevId}`)
    }
  }
  return (
    <div>
      <div style={{ height: '120vh' }}>
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4 col-lg-6">
                        <Image src={productsDetail.thumbnail} alt='' width={700} height={800} objectFit="cover" className="rounded-start img-fluid" />
                    </div>
                    <div className="col-md-8 col-lg-6">
                        <div className="card-body">
                            <h5 className="card-title">{productsDetail.title}</h5>
                            <p className="card-text">{productsDetail.description}</p>

                            <div className="price-info">
                                <p className="card-text price">${productsDetail.price}</p>
                                <p className="card-text">{productsDetail.shippingInformation}</p>
                            </div>
                            <div>
                                <h6>More Information</h6>
                                <p className="more-info"><span>Brand:</span> {productsDetail.brand}</p>
                                <p className="more-info"><span>Category:</span> {productsDetail.category}</p>
                            </div>
                            <div>
                                <div className="add-to-cart">
                                    <button >+</button>
                                    <span>0</span>
                                    <button>-</button>
                                </div>
                                <p className="stock">Only <span>{productsDetail.stock} left</span></p>
                                <p> Don&apos;t miss it</p>
                            </div>
                            <div className="btns">
                                <button>Buy Now</button>
                                <button >Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="links">
              {
                nextId && (
                  <button className="link" onClick={next}> next</button>
                )
              }
              
              {
                prevId && (
                  <button className="link" onClick={prev}> next</button>
                )
              }
              
               
                
            </div>
        </div>
    </div>
  )
}

export default Product

