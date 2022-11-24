import React from 'react'
import Smallscreennav from './navs/smallscreennav'
import Navbar from './navs/navbar'
export default function Header({handleSearchQuery}) {
  
  return (
    <div>
      <Navbar handleSearchQuery={handleSearchQuery} />
      <Smallscreennav handleSearchQuery={handleSearchQuery} />
    </div>
  )
}
