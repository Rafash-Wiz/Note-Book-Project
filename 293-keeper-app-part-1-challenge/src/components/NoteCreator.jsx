import React from 'react'

export default function NoteCreator() {
  return (
    <form>
      <input type="text" placeholder='Give title'/>
      <input type="text" placeholder='Your note'/>
      <button> Add </button>
    </form>
  )
}

