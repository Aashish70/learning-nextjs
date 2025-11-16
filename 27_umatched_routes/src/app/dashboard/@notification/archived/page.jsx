import Card from '@/components/card'
import Link from 'next/link'
import React from 'react'

//this is way to do parallel routes

export default function ArchivedNotification() {
  return (
    <Card>
        <div>Archived notification..</div>
        <div>
            <Link href='/dashboard'>Default</Link>
        </div>
    </Card>
  )
}
