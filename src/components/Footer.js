import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <div className="container-footer">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div className="col-md-4 d-flex align-items-center">
            <Link to="" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
              <img src='../images/l.jpg' alt='movie logo' />
            </Link>
            <span className="mb-3 mb-md-0 text-muted">&copy; 2022 Marvel Studio</span>
          </div>

          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <i className="fab fa-facebook text-primary fa-spin"></i>
            <i className="fab fa-twitter text-primary fa-spin"></i>
            <i className="fab fa-instagram text-danger fa-spin"></i>
          </ul>
        </footer>
      </div>
    </>
  )
}

export default Footer;