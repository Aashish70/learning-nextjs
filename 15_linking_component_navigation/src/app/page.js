import React from 'react'
import Link from 'next/link'

function page() {
  return (
    <div className='flex justify-center items-center mt-10'>
      <p>This is our home page!</p>
      <Link href='/blog'>Blog</Link>
    </div>
  )
}

export default page