import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div>
      <h1>Welcome home!</h1>
      <Link href='/articles/breaking-news-123?lang=en'>Read in English</Link>
      <Link href='/articles/breaking-news-123?lang=fr'>Read in French</Link>
    </div>
  )
}

export default page