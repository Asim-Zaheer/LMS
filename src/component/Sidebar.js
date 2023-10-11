import React from 'react'
import { NavLink } from 'react-router-dom'

function Sidebar() {
  return (
<>
<NavLink className="clicked btn btn-secondary-outline " data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
  click here
</NavLink>
{/* <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
  Button with data-bs-target
</button> */}

<div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div className="offcanvas-header">
    <h5 className="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body">
    <div>
      Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
    </div>
    <div className="dropdown mt-3">
      <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown">
        Dropdown button
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <li><NavLink className="dropdown-item" href="#">Action</NavLink></li>
        <li><NavLink className="dropdown-item" href="#">Another action</NavLink></li>
        <li><NavLink className="dropdown-item" href="#">Something else here</NavLink></li>
      </ul>
    </div>
  </div> 
</div>
</>
    )
}

export default Sidebar