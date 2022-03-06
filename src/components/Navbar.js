import logo from "../assets/logo.svg";

const Navbar = () => {
      return (
            <>
            <nav className="navbar">
                  <img src={logo} alt="logo" className='logo' />
                  <ul className="navlinks">
                        <li>About Us</li>
                        <li>Stories</li>
                        <li>Contact</li>
                        <li>Login</li>
                        <button className="signup-btn">SIGNUP</button>
                  </ul>
                  </nav>
                  <nav className="navbar sub-navbar"> 
                        <ul className="sub-navlinks">
                              <li>Marketplace</li>
                              <li>wholesale center</li>
                              <li>seller center</li>
                              <li>services</li>
                              <li>internships</li>
                              <li>events</li>
                        </ul>
                  </nav>
            </>
      )
}

export default Navbar