import React from 'react'
import { notFound } from 'next/navigation'

async function page({ params }) {
    const { slug } = await params
    
    if(parseInt(slug) > 100){
            notFound()
    }
  return (
    <div>
        
        <h1>You are on Blog no. {slug}</h1>
    </div>
  )
}

export default page