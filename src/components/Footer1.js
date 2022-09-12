import React from "react";

const Footer1 = () => {
  return (
    <>
      <footer className="text-center text-lg-start p-5 text-muted bg-primary mt-3">
        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 text-white">
                <img
                  className="px-3 py-2"
                  style={{ borderRadius: "10px", background: "white", width: "200px" }}
                  src="https://meribachatassets.s3.ap-south-1.amazonaws.com/website-assets/manual/images/logo.png"
                  alt="logo"
                />
                <h2 className="text-white">
                  Isse sasta aur
                  <br />
                  kuch nahi
                </h2>
              </div>
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 text-white">
                <p>
                  <a href="#!" className="text-reset">
                    Home
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    About
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Contact Us
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Privacy
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Corporate
                  </a>
                </p>
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 text-white">
                <p>
                  <a href="#!" className="text-reset">
                    Terms & Conditions
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Help & Support
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    FAQ
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Blogs
                  </a>
                </p>
              </div>
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 text-white">
                <p>Follow us on</p>
              </div>
            </div>
          </div>
        </section>

      </footer>
    </>
  );
};

export default Footer1;
