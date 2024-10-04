import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <ul className="LinkList">
        <Link to="" className="Non_active_link">
          Home
        </Link>
        <Link className="Non_active_link" to="about">
          About
        </Link>
        <Link to="contact" className="Non_active_link">
          Contact
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
