import carIcon from "../assets/images/car-icon.png";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
    return(
        <header className="p-3 bg-dark text-white">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a
              href="/"
              className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
            >
              <img src={carIcon} width={150} />
            </a>

            <ul className="nav col-12 col-lg-auto me-lg-auto justify-content-center mb-md-0 ms-md-3">
              <li>
                <NavLink to="/Home" className="nav-link px-2 text-white"> Dashboard </NavLink>
              </li>
              <li>
                  <NavLink to="/Home/Service-history" className="nav-link px-2 text-white"> Service History </NavLink>
              </li>
              <li>
                <NavLink to="/Home/Feedbacks" className="nav-link px-2 text-white"> Feedbacks </NavLink>
              </li>
            </ul>

            <div className="text-end">
              <button type="button" className="btn btn-warning me-2" onClick={() => navigate("/Home/AddNewServiceHistory")}>
                Add new Service History
              </button>
              <button type="button" className="btn btn-outline-light">
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>
    )
}

export default Header;