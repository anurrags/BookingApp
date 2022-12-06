import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbarDiv">
      <div className="topbar">
        <span className="companyName">Xplore.com</span>
        <div className="lg-buttons">
          <button className="registerBtn">Register</button>
          <button className="loginBtn">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
