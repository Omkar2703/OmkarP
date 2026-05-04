import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();

  const navLinks = [
    { path: '/',         label: 'Home' },
    { path: '/about',    label: 'About' },
    { path: '/skills',   label: 'Skills' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact',  label: 'Contact' },
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          Omkar Patil
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {navLinks.map((link) => (
              <li className="nav-item" key={link.path}>
                <Link
                  className="nav-link"
                  to={link.path}
                  style={{
                    color: location.pathname === link.path ? '#e94560' : '',
                    fontWeight: location.pathname === link.path ? 'bold' : 'normal'
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;