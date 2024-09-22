
import getProductById from "@/lib/getProductById";

import getProduct from "@/lib/getProduct";

import Product from "./handle";
import { GET } from "@/app/api/product/route";
import { notFound } from "next/navigation";
// import { GET } from "@/app/api/product/[id]/route";

export const generateStaticParams = async () => {
    const products = await getProduct();
    return products.map((product) => ({ id: product.id.toString() }));
};

export async function generateMetadata({ params }) {
    const product = await getProductById(+params.id);
    return {
        title:"next" || product.title ,
        description: 'app' || product.description,
    };
}
const ProductDetail = async ({ params }) => {
    let product;
    let nextProductId;
    let prevProductId;
    try{

        const response = await GET(params.id);
        product = await response.json();
        const products = await getProduct();
        const productIndex = products.findIndex((p) => p.id === +params.id);
        
        nextProductId = productIndex < products.length - 1 ? products[productIndex + 1].id : null;
        prevProductId = productIndex > 0 ? products[productIndex - 1].id : null;
    }catch{
        notFound()
      
    }

    return (
   
        <div>
            <Product
                productsDetail={product}
                nextIdx={nextProductId}
                prevIdx={prevProductId}
            />
        </div>
    );
};

export default ProductDetail;
