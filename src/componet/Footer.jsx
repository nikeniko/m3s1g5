import React from "react";
import { Facebook, Instagram, Twitter, Youtube } from "react-bootstrap-icons";

const Footer = () => {
  return (
    <footer className="bg_Netflix">
      <div className="row justify-content-center mt-5 ">
        <div className="col col-6 ">
          <div className="row ">
            <div className="col mb-2 ">
              <Facebook className="bi bi-facebook text-secondary me-2" />
              <Instagram className="bi bi-instagram text-secondary me-2" />
              <Twitter className="bi bi-twitter-x text-secondary me-2" />
              <Youtube className="bi bi-youtube text-secondary" />
            </div>
          </div>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg 4">
            <div className="col">
              <div className="row">
                <div className="col footer-links">
                  <p>
                    <a
                      href="#"
                      className="text-decoration-none text-secondary textFooter"
                    >
                      Audio and Subtitles
                    </a>
                  </p>
                  <p>
                    <a
                      href="#"
                      className="text-decoration-none text-secondary textFooter"
                    >
                      Media Center
                    </a>
                  </p>
                  <p>
                    <a
                      href="#"
                      className="text-decoration-none text-secondary textFooter"
                    >
                      Privacy
                    </a>
                  </p>
                  <p>
                    <a
                      href="#"
                      className="text-decoration-none text-secondary textFooter"
                    >
                      Contact us
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="row">
                <div className="col footer-links">
                  <p>
                    <a
                      href="#"
                      className="text-decoration-none text-secondary textFooter"
                    >
                      Audio Description
                    </a>
                  </p>
                  <p>
                    <a
                      href="#"
                      className="text-decoration-none text-secondary textFooter"
                    >
                      Investor Relations
                    </a>
                  </p>
                  <p>
                    <a
                      href="#"
                      className="text-decoration-none text-secondary textFooter"
                    >
                      Legal Notices
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="row">
                <div className="col footer-links">
                  <p>
                    <a
                      href="#"
                      className="text-decoration-none text-secondary textFooter"
                    >
                      Help Center
                    </a>
                  </p>
                  <p>
                    <a
                      href="#"
                      className="text-decoration-none text-secondary textFooter"
                    >
                      Jobs
                    </a>
                  </p>
                  <p>
                    <a
                      href="#"
                      className="text-decoration-none text-secondary textFooter"
                    >
                      Cookie Preferences
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="row">
                <div className="col footer-links">
                  <p>
                    <a
                      href="#"
                      className="text-decoration-none text-secondary textFooter"
                    >
                      Gift Cards
                    </a>
                  </p>
                  <p>
                    <a
                      href="#"
                      className="text-decoration-none text-secondary textFooter"
                    >
                      Terms of Use
                    </a>
                  </p>
                  <p>
                    <a
                      href="#"
                      className="text-decoration-none text-secondary textFooter"
                    >
                      Corporate Information
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col mb-2">
              <button
                type="button"
                className="btn btn-sm text-secondary border border-secondary rounded-0 mt-3"
              >
                Service Code
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col mb-2 mt-2 text-secondary textFooter ">
              © 1997-2023 Netflix, Inc.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
