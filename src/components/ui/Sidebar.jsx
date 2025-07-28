import React from 'react'
import FolderList from './FolderList'

function Sidebar({ folders, createNote }) {
  return (
    <div className="flex-1/4 bg-purple-100 rounded-bl-md rounded-tl-md p-4">
      <h1 className="text-2xl font-bold"> Your notes</h1>
      <button type="button" onClick={createNote} className='hover:cursor-pointer bg-amber-400 px-2 rounded-md'> Create Note </button>
      <h2 className='text-xl'> Folders </h2>
      <button type="button" className='hover:cursor-pointer bg-amber-400 px-2 rounded-md'> Create Folder</button>
      <FolderList folders={folders}/>
    </div>
  )
}

export default Sidebar
