'use client'

import { useRouter } from 'next/navigation'
import React from 'react'

export default function OrderProduct() {

    const router = useRouter()

    const handleOrder = () => {
        console.log("placing your order...")
        router.push('/')
    }

  return (
    <div>
        <h1>Order product</h1>
        <button onClick={handleOrder}>Place Order</button>
    </div>
  )
}

 