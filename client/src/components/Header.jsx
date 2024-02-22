import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './header.css';
import { BsFacebook } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { BsWebcam } from "react-icons/bs";
import { BsFillHouseDoorFill } from "react-icons/bs";
import { BsHouses } from "react-icons/bs";
import { BsPeopleFill } from "react-icons/bs";
import { BsMenuButtonWide } from "react-icons/bs";
import { BsChat } from "react-icons/bs";
import { BsBell } from "react-icons/bs";
import { BsBank } from "react-icons/bs";
import { BsArrowLeftShort } from "react-icons/bs";
import image1 from '../assets/images/OIP.jpg'

const Header = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false)

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible)
  }

  const togglefalse = () => {
    setIsSearchVisible(false)
  }

  return (
    <>
      <header className='header'>
        <section className='searchsection'>
          <Link to='/'><BsFacebook className='fblogo' /></Link>
          <div className='search'>
            <BsSearch />
            <input onClick={toggleSearch} type='text' placeholder='Search Facebook' className='searchinput' />
          </div>
          
        { isSearchVisible && (
          <div className='searchdiv'>
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
          </div>
        )
        }
        </section>

        <section className='section2'>
          <div>
            <Link onClick={togglefalse} className='logolink' to='/'><BsFillHouseDoorFill className='navlogo' /></Link>
            <div className='homehover'>
              <p>Home</p>
            </div>
          </div>
          <div>
            <Link onClick={togglefalse} className='logolink' to='/vidoes'><BsWebcam className='navlogo' /></Link>
            <div className='homehover'>
              <p>Video</p>
            </div>
          </div>
          <div>
            <Link onClick={togglefalse} className='logolink' to='/marketplace'><BsHouses className='navlogo' /></Link>
            <div className='homehovermarket'>
              <p>Marketplace</p>
            </div>
          </div>
          <div>
            <Link onClick={togglefalse} className='logolink' to='/groups'><BsPeopleFill className='navlogo' /></Link>
            <div className='homehover'>
              <p>Group</p>
            </div>
          </div>
        </section>

        <section className='section3'>
          <div>
            <div onClick={togglefalse} className='navlogo2'><BsMenuButtonWide /></div>
            <div className='section3hover'>
              <p>Menu</p>
            </div>
          </div>
          <div>
            <div onClick={togglefalse} className='navlogo2'><BsChat /></div>
            <div className='section3hoverwell'>
              <p>Messenger</p>
            </div>
          </div>
          <div>
            <div onClick={togglefalse} className='navlogo2'><BsBell /></div>
            <div className='section3hoverwell'>
              <p>Marketplace</p>
            </div>
          </div>
          <div>
            <div onClick={togglefalse} className='navlogo2'><BsBank /></div>
            <div className='section3hoverwell'>
              <p>Account</p>
            </div>
          </div> 
        </section>
      </header>
    </>
  )
}

export default Header
