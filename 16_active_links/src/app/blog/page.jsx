import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div>
        <h1>This is the Blog page!</h1>
        <Link href='/'>Home</Link>
    </div>
  )
}

export default page