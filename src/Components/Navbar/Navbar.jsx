import {FaBloggerB} from 'react-icons/fa'
import Login from '../Login/Login';
import Logout from '../Logout/Logout';
const NavbarComponent = () => {
  return (
    <>
    <header className="p-3 text-bg-dark">
    <div className="container">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
         <FaBloggerB />
        </a>

        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><a href="#" className="nav-link px-2 text-secondary">Home</a></li>
          <li><a href="#" className="nav-link px-2 text-white">Features</a></li>
          <li><a href="#" className="nav-link px-2 text-white">Pricing</a></li>
        </ul>

        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-md-3" role="search">
          <input type="search" className="form-control form-control-dark text-bg-dark" placeholder="Search..." aria-label="Search"/>
        </form>

        <div className="text-end">
          <Login />
          <Logout />
        </div>
      </div>
    </div>
  </header>
</>
  );
};

export default NavbarComponent;
