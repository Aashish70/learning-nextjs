import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div>
      <p>Welcome to HOME page!</p>
      <Link href='/blog'>Blog</Link>
    </div>
  )
}

export default page