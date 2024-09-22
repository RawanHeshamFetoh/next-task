import db from './db'

const addProduct = async (product) =>{
    db.collection('products').insertOne(product)
}
export default addProduct
