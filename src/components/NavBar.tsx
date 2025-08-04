interface NavBarProps {
  brandName?: string;
  imageSrcPath?: string;
}

function NavBar({ brandName, imageSrcPath }: NavBarProps) {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark shadow">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src={imageSrcPath}
            width="30"
            height="50"
            className="d-inline-block align-center"
            alt=""
          />
          <span
            className="ms-3 fs-1 text-uppercase"
            style={{ fontFamily: "Monofett" }}
          >
            {brandName}
          </span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto">
            <li className="nav-item active">
              <a className="nav-link" href="App.tsx">
                Home <span className="sr-only"></span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Projects
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  Arma
                </a>
                <a className="dropdown-item" href="#">
                  Clothing Line
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                  Flutter Designs
                </a>
                <a className="dropdown-item" href="#">
                  Further Projects
                </a>
              </div>
            </li>
          </ul>
          <form className="d-flex my-2 my-lg-0">
            <input
              className="form-control me-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
