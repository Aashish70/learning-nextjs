import React from 'react'

// if the folder name start with _folderName so 
// this is a private folder

function PrivateRoute() {
  return (
    <div>
        <h1>Ypu can not view this page in the browser.</h1>
    </div>
  )
}

export default PrivateRoute