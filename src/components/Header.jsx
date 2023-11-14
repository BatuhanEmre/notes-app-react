import React from 'react'

const Header = ({setDarkMode}) => {
  return (
    <div className='header'>
      <h1 className='notes-header'>  Notes</h1>
      <button onClick={() => setDarkMode((prevDarkMode) => !prevDarkMode )}  className="save"> Toggle Mode</button>
    </div>
  )
}

export default Header