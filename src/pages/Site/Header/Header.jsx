







import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Header.scss";
import newlogo from "../../../images/logo.png";
import { Link } from "react-router-dom";
function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
		<header>
			    <Link to="/" className="logo-img">
          <img src={newlogo} alt="Responsive Image" />
        </Link>
        <nav ref={navRef}>
          <Link to="/">Home </Link>
          <Link to="/about">About </Link>
        
          <Link to="/project">Projects </Link>
          <Link to="/price">Price </Link>
          <Link to="/blogs">Blogs </Link>
          <Link to="/contact">Contact </Link>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
          {/* <div className="langSelect">
          <select name="languages" id="languages">
            <option value="english">EN</option>
            <option value="azərbaycan">AZ</option>
            <option value="türkçe">TR</option>
          </select>
        </div> */}
		</header>
	);
}

export default Navbar;
