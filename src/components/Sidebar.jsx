import React from 'react';


const SideNavbar = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <nav id="sidebar" className="col-md-3 col-lg-2 d-md-block bg-light sidebar  d-none d-md-block">
          <div className="position-sticky">
            <ul className="nav flex-column">
              <li className="nav-item">
                <a className="nav-link active p-4" href="#">
                  Dashboard
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link p-4" href="#">
                  Catalog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link p-4" href="#">
                  Password
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link p-4" href="#">
                  Password
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link p-4" href="#">
                  Password
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link p-4" href="#">
                  Password
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <div className="pt-3">
            <h2>Content Title</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default SideNavbar;
