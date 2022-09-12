import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="">
        <nav className="navbar navbar-expand-lg header ">
          <div className="container">
            <a href="#" className="">
              <img
                className="logo"
                src="https://meribachatassets.s3.ap-south-1.amazonaws.com/website-assets/public/img/707532c4e86c9625ee17c1171be1b84d.png"
                alt="logo"
              />
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
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav m-auto mb-2 mb-lg-0 ">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle text-white"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Gift Cards
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <div className="container">
                      <div className="row" style={{ width: "800px" }}>
                        <div className="col-lg-6" >
                          <h6 className="">Shop By Brand </h6>
                          <div className="row" style={{ display: "flex" }}>
                            <div className="col-md-6">
                              <ul className="nav flex-column">
                                <li className="nav-item">
                                  <a className="nav-link" href="/brand/flipkart">
                                    {" "}
                                    {/* */}Flipkart{/* */}{" "}
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a className="nav-link" href="/brand/tata-cliq">
                                    {" "}
                                    {/* */}TataCliq{/* */}{" "}
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a className="nav-link" href="/brand/nykaa">
                                    {" "}
                                    {/* */}Nykaa{/* */}{" "}
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a className="nav-link" href="/brand/uber">
                                    {" "}
                                    {/* */}Uber{/* */}{" "}
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="col-md-6">
                              <ul className="nav flex-column">
                                <li className="nav-item">
                                  <a className="nav-link" href="/brand/grofers">
                                    {" "}
                                    {/* */}Grofers{/* */}{" "}
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a className="nav-link" href="/brand/yatra">
                                    {" "}
                                    {/* */}Yatra{/* */}{" "}
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a className="nav-link" href="/brand/vero-moda">
                                    Vero Moda{/* */}{" "}
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a className="nav-link" href="/giftcards">
                                    {" "}
                                    {/* */}View All{/* */}{" "}
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 lbrd">
                          <h6 className="">Shop By Category </h6>
                          <div className="row">
                            <div className="col-md-6">
                              <ul className="nav flex-column">
                                <li className="nav-item">
                                  <a className="nav-link" href="/category/accessories">
                                    {" "}
                                    {/* */}Accesories{/* */}{" "}
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a className="nav-link" href="/category/apparel">
                                    {" "}
                                    {/* */}Apparels{/* */}{" "}
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a className="nav-link" href="/category/grocery">
                                    {" "}
                                    {/* */}Grocery{/* */}{" "}
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a className="nav-link" href="/category/e-comm">
                                    {" "}
                                    {/* */}E-Commerce{/* */}{" "}
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a className="nav-link" href="/category/beauty">
                                    {" "}
                                    {/* */}Beauty{/* */}{" "}
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="col-md-6">
                              <ul className="nav flex-column">
                                <li className="nav-item">
                                  <a className="nav-link" href="/category/food">
                                    {" "}
                                    {/* */}Food{/* */}{" "}
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a className="nav-link" href="/category/travel">
                                    {" "}
                                    {/* */}Travel{/* */}{" "}
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a className="nav-link" href="/category/medicine">
                                    {" "}
                                    {/* */}Medicine{/* */}{" "}
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a className="nav-link" href="/category/electronics">
                                    {" "}
                                    {/* */}Electronic{/* */}{" "}
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a className="nav-link" href="/giftcards">
                                    {" "}
                                    {/* */}View All{/* */}{" "}
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link text-white dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Earn Cashback
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <div className="container">
                      <div className="row" style={{ width: "800px" }}>
                        <div className="col-lg-6" >
                          <h6 className="">Shop By Brand </h6>
                          <div className="row" style={{ display: "flex" }}>
                            <div className="col-md-6">
                              <ul className="nav flex-column">
                                <li className="nav-item">
                                  <a className="nav-link" href="/brand/flipkart">
                                    {" "}
                                    {/* */}Flipkart{/* */}{" "}
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a className="nav-link" href="/brand/tata-cliq">
                                    {" "}
                                    {/* */}TataCliq{/* */}{" "}
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a className="nav-link" href="/brand/nykaa">
                                    {" "}
                                    {/* */}Nykaa{/* */}{" "}
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a className="nav-link" href="/brand/uber">
                                    {" "}
                                    {/* */}Uber{/* */}{" "}
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="col-md-6">
                              <ul className="nav flex-column">
                                <li className="nav-item">
                                  <a className="nav-link" href="/brand/grofers">
                                    {" "}
                                    {/* */}Grofers{/* */}{" "}
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a className="nav-link" href="/brand/yatra">
                                    {" "}
                                    {/* */}Yatra{/* */}{" "}
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a className="nav-link" href="/brand/vero-moda">
                                    Vero Moda{/* */}{" "}
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a className="nav-link" href="/giftcards">
                                    {" "}
                                    {/* */}View All{/* */}{" "}
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 lbrd">
                          <h6 className="">Shop By Category </h6>
                          <div className="row">
                            <div className="col-md-6">
                              <ul className="nav flex-column">
                                <li className="nav-item">
                                  <a className="nav-link" href="/category/accessories">
                                    {" "}
                                    {/* */}Accesories{/* */}{" "}
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a className="nav-link" href="/category/apparel">
                                    {" "}
                                    {/* */}Apparels{/* */}{" "}
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a className="nav-link" href="/category/grocery">
                                    {" "}
                                    {/* */}Grocery{/* */}{" "}
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a className="nav-link" href="/category/e-comm">
                                    {" "}
                                    {/* */}E-Commerce{/* */}{" "}
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a className="nav-link" href="/category/beauty">
                                    {" "}
                                    {/* */}Beauty{/* */}{" "}
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="col-md-6">
                              <ul className="nav flex-column">
                                <li className="nav-item">
                                  <a className="nav-link" href="/category/food">
                                    {" "}
                                    {/* */}Food{/* */}{" "}
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a className="nav-link" href="/category/travel">
                                    {" "}
                                    {/* */}Travel{/* */}{" "}
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a className="nav-link" href="/category/medicine">
                                    {" "}
                                    {/* */}Medicine{/* */}{" "}
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a className="nav-link" href="/category/electronics">
                                    {" "}
                                    {/* */}Electronic{/* */}{" "}
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a className="nav-link" href="/giftcards">
                                    {" "}
                                    {/* */}View All{/* */}{" "}
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </ul>
                </li>
              </ul>
              <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-dark text-white" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
        {/* <nav class="navbar navbar-expand-lg header">
          <div class="container ">
              <a href="#" class="">
                  <img class="logo"
                      src="https://meribachatassets.s3.ap-south-1.amazonaws.com/website-assets/public/img/707532c4e86c9625ee17c1171be1b84d.png"
                      alt="logo">
              </a>
          </div>
      </nav> */}
      </div>
    </>
  );
};

export default Navbar;
