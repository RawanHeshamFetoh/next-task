
// import Card from '@/app/components/Card'
// import React from 'react'
// import styles from './post.module.css'
// const Post =async ({params}) => {
//     const {id} = params
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
//     const post = await res.json()
//   return (
//     <div className={styles.middle}>
//        <Card title={post.title} id={post.id} body={post.body} key={post.id} />
       
//     </div>
//   )
// }

// export default Post

'use client'; // Make this a client component

import Card from '@/app/components/Card';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './post.module.css';

const Post = ({ params }) => {
  let { id } = params;
  const [post, setPost] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchPost = async () => {
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
      const data = await res.json();
      setPost(data);
    };

    fetchPost();
  }, [id]);
  id = Number(id)
  const handleNext = () => {
     id +=1
    router.push(`/post/${id }`);
  };

  const handlePrev = () => {
    if (id > 1) { 
      id -=1
      router.push(`/post/${id }`);
    }
  };

  if (!post) return <div>Loading...</div>; 

  return (
    <div className={styles.middle}>
      <Card title={post.title} id={post.id} body={post.body} key={post.id} />
      <div className={styles.navigation}>
        <button onClick={handlePrev} disabled={id <= 1}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default Post;


// "use client"; // Ensure this is a client component
// import Card from '@/app/components/Card';
// import React, { useEffect, useState } from 'react';

// import styles from './post.module.css';
// import { useRouter } from 'next/navigation';

// const Post = ({ params }) => {
//     const { id } = params;
//     const router =useRouter()
//     const [post, setPost] = useState(null);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const fetchPost = async () => {
//             setLoading(true);
//             const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
//             const postData = await res.json();
//             setPost(postData);
//             setLoading(false);
//         };

//         fetchPost();
//     }, [id]);

//     const handleNext = () => {
//         const nextId = +id + 1;
//         router.push(`/post/${nextId}`);
//     };

//     const handlePrev = () => {
//         const prevId = +id - 1;
//         if (prevId > 0) {
//             router.push(`/post/${prevId}`);
//         }
//     };

//     if (loading) {
//         return <div>Loading...</div>;
//     }

//     if (!post) {
//         return <div>Post not found</div>;
//     }

//     return (
//         <div className={styles.middle}>
//             <Card title={post.title} id={post.id} body={post.body} />
//             <div>
//                 <button onClick={()=>handlePrev()} disabled={+id <= 1}>Prev</button>
//                 <button onClick={()=>handleNext()}>Next</button>
//             </div>
//         </div>
//     );
// };

// export default Post;
