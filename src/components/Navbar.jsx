import { NavLink } from 'react-router-dom'
import axios from "axios";
export const Navbar = () => {

  return (
    <nav className="navbar navbar-expand-lg navbar-light mt-5 ">
      <div className="container-fluid">
        <NavLink className="nav-link navbar-brand d-flex align-items-center " aria-current="page" to="/">
          <img src="./src/assets/logo.png" alt="" style={{ width: '20%', objectFit: 'cover' }} />
          <p className="fs-2 mt-3" id="logo">Filmworks</p>
        </NavLink>
      </div>
    </nav>

  )
}
export default Navbar
