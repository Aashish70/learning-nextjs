'use client'

import React from 'react'
import { usePathname } from 'next/navigation'

export default function NotFound() {
  //not-found component does not accept props
  //if we want to show differet message use usePathname hook

  const pathname = usePathname()
  const blogId = pathname.split("/")[2]
  console.log(blogId)

  return (
    <div>
        <p>You are on 404 Page</p>
        <h1>{blogId} is not found.. come after sometimes</h1>
    </div>
  )
}

