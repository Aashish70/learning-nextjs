import Card from '@/components/card'
import Link from 'next/link'
import React from 'react'

//this is way to do parallel routes

export default function Notification() {
  return (
    <Card>
        <div>Default notification.</div>
        <div>
            <Link href='/dashboard/archived'>Archive</Link>
        </div>
    </Card>
  )
}
