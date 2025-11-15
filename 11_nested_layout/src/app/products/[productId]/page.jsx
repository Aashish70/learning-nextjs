import React from 'react'

async function page({ params }) {
    const  { productId } = await params;
  return (
    <div>
        <h1>Details about product {productId}</h1>
    </div>
  )
}

export default page