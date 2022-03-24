import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { NavLink } from 'reactstrap'
import { isAuth } from '../../actions/auth'

export default function Smallscreennav() {
    
    const router = useRouter()

  return (
    <div id='small-screen-nav'>

        <ul className="nav nav-pills px-4 justify-content-around">

                <li className="nav-item">
                    <Link href="/discover">
                        <NavLink active={!(router.pathname.match('favourites') || router.pathname.match('latest'))} >Popular</NavLink>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link href="/discover/latest">
                        <NavLink active={router.pathname.includes('latest')}>Latest</NavLink>
                    </Link>
                </li>

                {isAuth() && <li className="nav-item ">
                    <Link href="/discover/favourites">
                        <NavLink active={router.pathname.includes('favourites')}>Favourites</NavLink>
                    </Link>
                </li>}

        </ul>

    </div>
  )
}
