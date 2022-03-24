import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { NavLink, NavbarBrand} from 'reactstrap'
import { isAuth, signout } from '../../actions/auth'

export default function Navbar() {
    
    const router = useRouter()

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark px-lg-4 py-lg-3 px-4 py-3">
    <div className="container-fluid justify-content-between">

      <div className="d-flex">
          <NavbarBrand href="/" style={{'color':'red','fontWeight':'bold'}}>
              CapitalMovies
          </NavbarBrand>
      </div>

      <ul className="navbar-nav flex-row d-none d-sm-flex">

        <li className="nav-item me-3 me-lg-4  px-3">
            <Link href="/discover" passHref>
                <NavLink active={!(router.pathname.match('favourites') || router.pathname.match('latest'))} >Popular</NavLink>
            </Link>
        </li>

        <li className="nav-item me-3 me-lg-4 px-3">
            <Link href="/discover/latest" passHref>
                <NavLink active={router.pathname.includes('latest')}>Latest</NavLink>
            </Link>
        </li>

        {isAuth() && <li className="nav-item me-3 me-lg-4 px-3">
            <Link href="/discover/favourites" passHref>
                <NavLink active={router.pathname.includes('favourites')}>Favourites</NavLink>
            </Link>
        </li>}

      </ul>
  
      <ul className="navbar-nav flex-row">
        {isAuth() && <li className="nav-item me-3 me-lg-1" onDoubleClick={() => signout()}>
          <a className="nav-link d-sm-flex align-items-sm-center" id='account' href="#">
            <img
              src="/profilepic.webp"
              className="rounded-circle"
              height="30"
              alt="Black and White Portrait of a Man"
              loading="lazy"
            />
          </a>
        </li>}
        {!isAuth() &&<li className="nav-item me-3 me-lg-1">
          <button className='btn btn-danger' onClick={()=>{router.push('/login')}}>
              Login
          </button>
        </li>}
      </ul>
      
    </div>
  </nav>
  )
}
