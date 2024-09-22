
import React from 'react'
import styles from './addProduct.module.css'
import getProduct from '@/lib/getProduct'
import { POST } from '../api/product/route'
import addProduct from '@/lib/addProduct'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({ 
    cloud_name: 'dlaihyhef', 
    api_key: '438874175494996', 
    api_secret: 'q4LwGFde9jTw1WD01HlK88-oK3E' // Click 'View API Keys' above to copy your API secret
});
const AddProduct = () => {
    // const [product , setProduct]=useState({})
    // const handleChang=(e)=>{
    //     setProduct((product)=>( {...product,[e.target.name]: e.target.value}))
    // }

    const create = async (formData) => {
        "use server"
        const file = formData.get('image') ;
        const arrayBuffer = await file.arrayBuffer();
        const buffer = new Uint8Array(arrayBuffer);
        const result= await new Promise((resolve, reject) => {
            cloudinary.uploader.upload_stream({}, function (error, result) {
                if (error) {
                    reject(error);
                    return;
                }
                resolve(result);
            }).end(buffer);
        })
        const image = result.secure_url;
        const products = await getProduct();
        const id = products.length
        const title = formData.get("title")
        const decription = formData.get("decription")
        const category = formData.get("category")
        const brand = formData.get("brand")
        const stock = formData.get("stock")
        const price = formData.get("price")
        POST({ id, title, decription, category, brand, stock, price ,thumbnail:image })
        revalidatePath('/local-products')
        redirect('/local-products')
    }

    return (
        <div className={`container mb-5 ${styles.formCenter}`}>
            <form action={create}>
                <div class="mb-3">
                    <label for="title" class="form-label">Title</label>
                    <input type="text" class="form-control" id="title" name='title' />
                </div>
                <div class="mb-3">
                    <label for="decription" class="form-label">description</label>
                    <input type="text" class="form-control" id="decription" name="decription" />
                </div>
                <div class="mb-3">
                    <label for="category" class="form-label">category</label>
                    <input type="text" class="form-control" id="category" name="category" />
                </div>
                <div class="mb-3">
                    <label for="brand" class="form-label">brand</label>
                    <input type="text" class="form-control" id="brand" name="brand" />
                </div>

                <div class="mb-3">
                    <label for="price" class="form-label">price</label>
                    <input type="number" class="form-control" id="price" name="price" />
                </div>
                <div class="mb-3">
                    <label for="stock" class="form-label">stock</label>
                    <input type="number" class="form-control" id="stock" name="stock" />
                </div>
                <div class="mb-3">
                    <label for="image" class="form-label">image</label>
                    <input type="file" class="form-control" id="image" name="image" />
                </div>

                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default AddProduct
