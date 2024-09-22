// import getProductById from "@/lib/getProductById"
// import { notFound } from "next/navigation";

// export async function GET(request) {
//     const  id  = request; // Destructure id from params
    
//     try {
//         const product = await getProductById(+id);
        
//         if (product) {
//             return new Response(JSON.stringify(product), {
//                 status: 200,
//                 headers: { 'Content-Type': 'application/json' }, // Set the content type
//             });
//         } else {
//             // return new Response('Product not found', {
//             //     status: 404,
//             //     headers: { 'Content-Type': 'text/plain' }, // Set the content type for plain text
//             // });
//            notFound()
//         }
//     } catch (error) {
//         console.error('Error fetching product:', error);
//         return new Response('Internal server error', {
//             status: 500,
//             headers: { 'Content-Type': 'text/plain' },
//         });
//     }
// }