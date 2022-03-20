import React from 'react'
import Link from 'next/link'
import Router from 'next/router'
import { NavbarBrand , NavLink } from 'reactstrap'
import { isAuth } from '../actions/auth'

export default function Header() {
  return (
    <div>

<nav className="navbar navbar-expand-sm navbar-dark bg-dark px-lg-4 py-lg-3 px-4 py-3">
  <div className="container-fluid justify-content-between">

    <div className="d-flex">
        <NavbarBrand href="/" style={{'color':'red','fontWeight':'bold'}}>
            CapitalMovies
        </NavbarBrand>
    </div>

    <ul className="navbar-nav flex-row d-none d-sm-flex">

      <li className="nav-item me-3 me-lg-4  px-3">
          <Link href="/discover">
              <NavLink className="">Popular</NavLink>
          </Link>
      </li>

      <li className="nav-item me-3 me-lg-4 px-3">
          <Link href="/discover/latest">
              <NavLink className="">Latest</NavLink>
          </Link>
      </li>

      {isAuth() && <li className="nav-item me-3 me-lg-4 px-3">
          <Link href="/discover/favourites">
              <NavLink className="">Favourite</NavLink>
          </Link>
      </li>}

    </ul>
 
    <ul className="navbar-nav flex-row">
      {isAuth() && <li className="nav-item me-3 me-lg-1">
        <a className="nav-link d-sm-flex align-items-sm-center" href="#">
          <img
            src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"
            className="rounded-circle"
            height="30"
            alt="Black and White Portrait of a Man"
            loading="lazy"
          />
        </a>
      </li>}
      {!isAuth() &&<li className="nav-item me-3 me-lg-1">
        <button className='btn btn-danger' onClick={()=>{Router.push('/login')}}>
            Login
        </button>
      </li>}
    </ul>
    
  </div>
</nav>
</div>
  )
}
