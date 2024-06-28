import React from "react";

const ProfilePage = () => {
  return (
    <div className="bg_Netflix ">
      <header>
        <nav className="navbar navbar-expand-md  mb-3">
          <div className="container">
            <a className="navbar-brand" href="/">
              <img
                src="assets/logo.png"
                style={{ width: "100px", height: "55px" }}
                alt="Logo"
              />
            </a>
          </div>
        </nav>
      </header>
      <main>
        <div>
          <div className="row border-bottom pb-4 mb-5">
            <h1 className="col-12 text-center text-lg-start border-bottom pb-2 mb-4 text-white">
              Edit Profile
            </h1>
            <div className="col-8 col-lg-3 position-relative mb-4">
              <img
                src="assets/logo.png"
                style={{ width: "100px", height: "55px" }}
                alt="Logo"
              />
              <i className="fa-solid fa-pen position-absolute"></i>
            </div>
            <div className="col-12 col-lg-8">
              <form action="">
                <input
                  type="text"
                  placeholder="Strive Student"
                  className="name-input p-2 mb-4 bg-secondary"
                />
                <label for="lang" className="mb-2 text-secondary h5">
                  Language:
                </label>
                <div
                  className="dropdown me-auto pb-4 mb-4 border-bottom"
                  id="lang"
                >
                  <button
                    className="btn btn-outline-light py-1 px-4 dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    English
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        English
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Italian
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        German
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Spanish
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        French
                      </a>
                    </li>
                  </ul>
                </div>
                <label for="maturity" className="text-secondary h5 mb-3">
                  Maturity Settings:
                </label>
                <div className="dropdown mb-2" id="maturity">
                  <button
                    className="btn btn-secondary"
                    type="button"
                    data-bs-toggle=""
                    aria-expanded="false"
                  >
                    ALL MATURITY RATINGS
                  </button>
                </div>
                <p className="fs-6 text-white">
                  Show titles of all maturiry ratings for this profile
                </p>
                <div className="border-bottom pb-4 mb-4">
                  <button
                    type="button"
                    className="btn btn-outline-secondary px-4"
                  >
                    EDIT
                  </button>
                </div>
                <label for="controls" className="text-secondary h5">
                  Autoplay controls
                </label>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    role="button"
                    type="checkbox"
                    value=""
                    id="contorl-1"
                    checked
                  />
                  <label className="text-white" for="control-1">
                    Autoplay next episode in a series on all devices.
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    role="button"
                    type="checkbox"
                    value=""
                    id="control-2"
                    checked
                  />
                  <label className="text-white" for="control-2">
                    Autoplay previews while browsing on all devices.
                  </label>
                </div>
              </form>
            </div>
          </div>
          <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-3 mb-5">
            <button type="button" className="btn btn-outline-secondary px-4">
              SAVE
            </button>
            <button type="button" className="btn btn-outline-secondary px-4">
              CANCEL
            </button>
            <button type="button" className="btn btn-outline-secondary px-4">
              DELETE PROFILE
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProfilePage;
