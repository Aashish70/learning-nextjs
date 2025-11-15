import React from 'react'

export default async function page({ params }) {

    //this is the concept of dynamic routes
    // remember that id can also be string like iphone, tv
    const { productId } = await params
    console.log(productId)
  return (
    <div>
        <h1>Product details page {productId}</h1>
    </div>
  )
}

 