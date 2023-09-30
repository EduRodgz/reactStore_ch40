import "./footer.css";
import {Link} from 'react-router-dom';


function Footer(){
    return(
        <div className="footer">
            <h1>Links</h1>

      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">
            Home
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/catalog">
            Catalog
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/about">
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/admin">
            Admin
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/cart">
            Cart
          </Link>
          
        </li>

      </ul>
        </div>
        
    
    );
}

export default Footer;