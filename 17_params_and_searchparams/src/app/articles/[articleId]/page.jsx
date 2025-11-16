//this code work in server-component

import Link from 'next/link'
import React from 'react'

export default async function NewsArticle({ params, searchParams }) {

    const { articleId } = await params
    const { lang = 'en'} = await searchParams

  return (
    <div>
        <h1>News article {articleId}</h1>
        <p>Reading in {lang}</p>

        <Link href={`/articles/${articleId}?lang=en`}>English</Link>
        <Link href={`/articles/${articleId}?lang=sp`}>Spanish</Link>
        <Link href={`/articles/${articleId}?lang=fr`}>French</Link>
    </div>
  )
}


//this code work in client component

// 'use client'

// import Link from 'next/link'
// import React from 'react'
// import { use } from 'react'

// export default function NewsArticle({ params, searchParams }) {

//     const { articleId } = use(params)
//     const { lang = 'en'} =  use(searchParams)

//   return (
//     <div>
//         <h1>News article {articleId}</h1>
//         <p>Reading in {lang}</p>

//         <Link href={`/articles/${articleId}?lang=en`}>English</Link>
//         <Link href={`/articles/${articleId}?lang=sp`}>Spanish</Link>
//         <Link href={`/articles/${articleId}?lang=fr`}>French</Link>
//     </div>
//   )
// }

 