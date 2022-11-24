import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { NavLink } from 'reactstrap'
import { isAuth } from '../../actions/auth'
import { useState } from 'react'

export default function Smallscreennav({ handleSearchQuery }) {
    
  const router = useRouter()
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
    handleSearchQuery(e.target.value);
  }

  return (
    <div id='small-screen-nav'>

        <ul className="nav nav-pills px-4 justify-content-around">

            <li className="nav-item">
                <Link href="/discover" passHref>
                    <NavLink active={!(router.pathname.match('favourites') || router.pathname.match('latest'))} >Popular</NavLink>
                </Link>
            </li>

            <li className="nav-item">
                <Link href="/discover/latest" passHref>
                    <NavLink active={router.pathname.includes('latest')}>Latest</NavLink>
                </Link>
            </li>

            {isAuth() && <li className="nav-item ">
                <Link href="/discover/favourites" passHref>
                    <NavLink active={router.pathname.includes('favourites')}>Favourites</NavLink>
                </Link>
            </li>}

        </ul>

        <div className='mx-2 px-4 mt-4'>
        <input
                type="text"
                className="form-control"
                placeholder="Search Movies"
                value={search}
                onChange={handleSearch}
                style={{
                    width: '100%',
                    backgroundColor: "#212529",
                    color: "white",
                }}
                />
        </div>

    </div>
  )
}
