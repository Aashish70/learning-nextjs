import React from 'react'

async function page({ params }) {
    const { productId } = await params
  return (
    <div>Details about product { productId }</div>
  )
}

export default page