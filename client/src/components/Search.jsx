import React from 'react'
import { BsArrowLeftShort } from "react-icons/bs"
import image1 from '../assets/images/OIP.jpg'

const Search = ({isSearchVisible, setIsSearchVisible}) => {
    const toggleSearch = () => {
        setIsSearchVisible(!isSearchVisible)
      }

  return (
    <>
      <div className='searchback'>
        <div onClick={toggleSearch} className='backarrow'> 
            <BsArrowLeftShort className='back' />
            </div>
            <div className='search'>
            <input type='text' placeholder='Search Facebook' className='searchinput' />
            </div>
        </div>
        <div className='namesearched'>
            <img className='image' alt='profilepicture' src={image1} />
            <div>
            <p>Steven Bonuke</p>
            <p>Friend</p>
            </div>
        </div>
    </>
  )
}

export default Search
