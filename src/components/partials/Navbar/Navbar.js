import { NavLink } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light px-3">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse ml-auto" id="navbarNavAltMarkup">
          <div className="navbar-nav ml-auto">
            <NavLink to='/' className="nav-link active" aria-current="page">Home</NavLink>
            <NavLink to='/login' className="nav-link" >Login</NavLink>
            <NavLink to='/register' className="nav-link" >Register</NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;