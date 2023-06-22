import React from "react";
import "./style.css";
const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg  shadow-sm sticky-top py-3 ">
        <div class="container-fluid mx-3">
          <a class="navbar-brand " href="#">
            <img
              src="https://static.canva.com/web/images/12487a1e0770d29351bd4ce4f87ec8fe.svg"
              alt=""
              srcset=""
            />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2  mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Design spotlight
                  <span className="mx-2">
                    <i class="fa-solid fa-chevron-down"></i>
                  </span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Busisness
                  <span className="mx-2">
                    <i class="fa-solid fa-chevron-down"></i>
                  </span>
                </a>
              </li>{" "}
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Education
                  <span className="mx-2">
                    <i class="fa-solid fa-chevron-down"></i>
                  </span>
                </a>
              </li>{" "}
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Plans and pricing
                  <span className="mx-2">
                    <i class="fa-solid fa-chevron-down"></i>
                  </span>
                </a>
              </li>{" "}
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Learn
                  <span className="mx-2">
                    <i class="fa-solid fa-chevron-down"></i>
                  </span>
                </a>
              </li>
              <form class="d-flex align-items-center justify-content-between ">
                <div className="search__input d-flex align-items-center justify-content-between">
                  <span className="mx-2 search__input-icon  mt-1 ">
                    <i class="fa-solid fa-magnifying-glass"></i>
                  </span>
                  <input
                    class=" py-2 "
                    placeholder="Try logo, poster, anything"
                  />
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="ms-3"
                >
                  <path
                    fill="currentColor"
                    d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-1.5a8.5 8.5 0 1 0 0-17 8.5 8.5 0 0 0 0 17zM8.75 9.85c.05-1.62 1.17-2.8 3.2-2.8 1.87 0 3.12 1.08 3.12 2.6 0 1.04-.52 1.77-1.45 2.33-.9.52-1.15.87-1.15 1.55v.39H10.9l-.01-.47c-.06-1.02.33-1.64 1.28-2.2.84-.5 1.13-.87 1.13-1.54 0-.71-.57-1.23-1.43-1.23-.89 0-1.45.54-1.5 1.37H8.74zm3 7.33c-.68 0-1.13-.43-1.13-1.09 0-.66.45-1.1 1.13-1.1.7 0 1.14.44 1.14 1.1 0 .66-.44 1.09-1.14 1.09z"
                  ></path>
                </svg>
              </form>
            </ul>
            <button className="btn btn__light me-3">Log in</button>

            <button className="btn btn__purple">Sign up</button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
