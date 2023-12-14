import { Link } from "react-router-dom";

let Navbar:React.FC=()=>{
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link className="nav-link" to={"/"} >Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={"/add"} >Add Employee</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#action" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#action">Action</a></li>
            <li><a className="dropdown-item" href="#action">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#action">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#action"  aria-disabled="true">Disabled</a>
        </li>
      </ul>
     
    </div>
  </div>
</nav>
    );
};

export default Navbar;