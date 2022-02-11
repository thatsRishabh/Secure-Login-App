import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode1} bg-${props.mode1}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">{props.title1}</a>
        {/* in above for routing purpose we have to replace 'a' with 'Link' and 'href' with 'to' */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
          </ul>
          {/* <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-primary" type="submit">Search</button>
        </form> */}
        {/* //below codes are for adding color pallets as explained in lecture 20
          <div className="d-flex">
            <div className="bg-primary rounded mx-2" onClick={() => { props.toggleMode1('primary') }} style={{ height: '30px', width: '30px', cursor: 'pointer' }}></div>
            <div className="bg-danger rounded mx-2" onClick={() => { props.toggleMode1('danger') }} style={{ height: '30px', width: '30px', cursor: 'pointer' }}></div>
            <div className="bg-success rounded mx-2" onClick={() => { props.toggleMode1('success') }} style={{ height: '30px', width: '30px', cursor: 'pointer' }}></div>
            <div className="bg-warning rounded mx-2" onClick={() => { props.toggleMode1('warning') }} style={{ height: '30px', width: '30px', cursor: 'pointer' }}></div>
            <div className="bg-light rounded mx-2" onClick={() => { props.toggleMode1('light') }} style={{ height: '30px', width: '30px', cursor: 'pointer' }}></div>
            <div className="bg-dark rounded mx-2" onClick={() => { props.toggleMode1('dark') }} style={{ height: '30px', width: '30px', cursor: 'pointer' }}></div>
          </div>
             */}
          <div className={`form-check form-switch text-${props.mode1 === 'light' ? 'dark' : 'light'}`}> 
            {/*  above we have used ternary operator which means if model1 is light than convert to dark else let it be light */}
            <input className="form-check-input" onClick={props.toggleMode1} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable dark mode</label>
          </div> 
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = { title: PropTypes.string }

