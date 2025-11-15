import React from 'react'


//static metadata and page.jsx always override the layout.js metadata
export const metadata = {
    title: "about this website"
}


function page() {
  return (
    <div>
        <p>This is about page of this site.</p>
    </div>
  )
}

export default page