import React, { useState } from 'react'
import Sidebar from '../../components/ui/Sidebar'
import NoteDisplay from '../../components/ui/NoteDisplay'

function Home() {
  const [ folders, setFolders ] = useState(['Folder1', 'Folder2'])
  const [currentNote, setCurrentNote] = useState(null)

  function createNote(title, content) {
    console.log('creating note')
  }
  return (
    // Wrapper
    <div className="flex justify-center items-center mt-8">
      {/* main container */}
      <div className="flex justify-center w-[800px] ">
        {/* sidebar */}
        <Sidebar folders={folders} createNote={createNote}/>
        {/* note display */}
        <NoteDisplay folders={folders}/>
      </div>
    </div>
  )
}

export default Home
