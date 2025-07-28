import React from 'react'
import Folder from './Folder'

function FolderList({ folders }) {
  return (
    <>
    { folders.length == 0 && ""}
    {folders.map((folder, i) => {
        <Folder key={i} id={i}/>
    })}
    </>
  )
}

export default FolderList