import Link from "next/link";

export default function NotFound() {
    return (
      <div style={{margin:"100px 50px 430px" , color:'red'}}>
        <h2>Not Found</h2>
        <p>Could not find requested resource</p>
        <Link href="/local-products">Return to product</Link>
      </div>
    )
  }