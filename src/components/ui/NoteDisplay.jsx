import React, { useState } from 'react'

function NoteDisplay({ folders, saveNote }) {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [selectedFolder, setSelectedFolder] = useState(false)
  return (
    <div className="flex-3/4 bg-purple-200 rounded-tr-md rounded-br-md p-4 flex-col flex">
      {/* Title */}
      <form className='flex flex-col items-start gap-2' onSubmit={saveNote}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Your title"
          className='w-full'
        />
        {/* Content */}
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="resize-none w-full"
          placeholder="Your content"
        ></textarea>
        {/* Folder list  */}
        <div className="flex gap-4">
          {folders.map((folder, i) => {
            return (
              <div className="flex" key={i}>
                <input type="checkbox" />
                <p> {folder} </p>
              </div>
            )
          })}
        </div>

        <button type="submit" className='hover:cursor-pointer bg-amber-400 px-2 rounded-md'> Save note </button>
      </form>
    </div>
  )
}

export default NoteDisplay
