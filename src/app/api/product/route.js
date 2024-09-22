
import addProduct from "@/lib/addProduct";
import getProduct from "@/lib/getProduct";
import getProductById from "@/lib/getProductById";

export async function GET(request , context ){
    
    if(!request){

        const products = await getProduct()
        return new Response(JSON.stringify(products),{
            status: 200,
        })
    }else{
        const  id  = request; 
    
        try {
            const product = await getProductById(+id);
            
            if (product) {
                return new Response(JSON.stringify(product), {
                    status: 200,
                    headers: { 'Content-Type': 'application/json' }, 
                });
            } else {
                return new Response('Product not found', {
                    status: 404,
                    headers: { 'Content-Type': 'text/plain' }, 
                });
                
            }
        } catch (error) {
            console.error('Error fetching product:', error);
            return new Response('Internal server error', {
                status: 500,
                headers: { 'Content-Type': 'text/plain' },
            });
        }
    }
}


export async function POST(request) {
    try {
        
        await addProduct(request);

        return new Response(JSON.stringify({ message: 'Product added successfully' }), {
            status: 201,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error('Error adding product:', error);
        return new Response(JSON.stringify({ error: 'Failed to add product' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
