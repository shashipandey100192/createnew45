import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { Link } from 'react-router-dom';

function Mynav() {
  return (
    <Fragment>
        <header className="p-3 mb-3 border-bottom">
    <div className="container">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <Link to="" className="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">
         
        </Link>

        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><Link to="" className="nav-link px-2 link-secondary">Home</Link></li>
          <li><Link to="about" className="nav-link px-2 link-dark">About</Link></li>
          <li><Link to="home" className="nav-link px-2 link-dark">Contact us</Link></li>
          <li><Link to="home" className="nav-link px-2 link-dark">Forms</Link></li>
          <li><Link to="bootstrapui" className="nav-link px-2 link-dark">Bootstrapui</Link></li>
          <li><Link to="home" className="nav-link px-2 link-dark">Reactbootstrap</Link></li>
          <li><Link to="home" className="nav-link px-2 link-dark">MaterialUI</Link></li>
        </ul>

        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
          <input type="search" className="form-control" placeholder="Search..." aria-label="Search" />
        </form>

        <div className="dropdown text-end">
          <a href="#" className="d-block link-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle"/>
          </a>
          <ul className="dropdown-menu text-small">
            <li><a className="dropdown-item" to="abc">New project...</a></li>
            <li><a className="dropdown-item" to="abc">Settings</a></li>
            <li><a className="dropdown-item" to="abc">Profile</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" to="abc">Sign out</a></li>
          </ul>
        </div>
      </div>
    </div>
  </header>

    </Fragment>
  )
}

export default Mynav