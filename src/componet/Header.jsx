import React from "react";
import { Grid, Grid3x3 } from "react-bootstrap-icons";

const Header = () => {
  return (
    <div className="d-flex justify-content-between bg_Netflix">
      <div className="d-flex">
        <h2 className="mb-4 text-white ms-3">TV Shows</h2>
        <div className="btn-group" role="group">
          <div className="dropdown ms-4 mt-1">
            <button
              type="button"
              className="btn btn-sm dropdown-toggle rounded-0 text-white border border-secondary "
              data-bs-toggle="dropdown"
              aria-expanded="falsev "
            >
              Genres
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Comedy
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Drama
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Thriller
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <Grid className="bi bi-grid icons text-white me-3 fw-bold" />
        <Grid3x3 className="bi bi-grid-3x3 icons text-white me-4 fw-bold" />
      </div>
    </div>
  );
};

export default Header;
