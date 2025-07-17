import React  from 'react';
import PropTypes from 'prop-types'
import { Link }  from 'react-router-dom'
export default function Navbar(props){
   return( <>
     <nav className={`navbar navbar-expand-lg  bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className={`navbar-brand text-${props.mode==='dark'?'light':'dark'} `}  to="/" >form</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link active text-${props.mode==='dark'?'light':'dark'} `} aria-current="page" to="/">home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link active text-${props.mode==='dark'?'light':'dark'} `} aria-current="page" to="/About">About</Link>
        </li>
      
        
        
      </ul>
    <div className={`form-check form-switch text-${props.mode==='dark'?'light':'dark'} `}>
  <input className="form-check-input" type="checkbox" role="switch" id="switchCheckDefault" onClick={props.toggle} />
  <label className="form-check-label " htmlFor="switchCheckDefault" id="label" >{props.text}</label>
</div>
    </div>
  </div>
</nav>
</>
   );
}
Navbar.propTypes={
  title:PropTypes.string.isRequired,
  home:PropTypes.string.isRequired

}

