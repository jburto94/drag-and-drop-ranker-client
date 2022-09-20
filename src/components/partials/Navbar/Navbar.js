import { NavLink } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-primary navbar-dark px-3">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to='/'>DnD Ranker</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse ml-auto" id="navbarNavAltMarkup">
          <div className="navbar-nav ml-auto">
            <NavLink to='/login' className="nav-link" >Login</NavLink>
            <NavLink to='/register' className="nav-link" >Register</NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;