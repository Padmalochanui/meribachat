import React from "react";
import Swichcase from "./Swichcase";
import About1 from "../assets/about1.png"
import About2 from "../assets/about2.png"
import About3 from "../assets/about3.png"
import Ecom from "../assets/ecom.png"
import Accesesories from "../assets/acces.png"
import Dress from "../assets/dress.png"
import Grocery from "../assets/gorcery.png"
import Food from "../assets/food.png"
import Travel from "../assets/travel.png"
import Electronics from "../assets/electronics.png"
import Others from "../assets/others.png"
import Feature2 from "../assets/feature2.png"
import Feature3 from "../assets/feature3.png"
import Feature4 from "../assets/feature4.png"
import Feature5 from "../assets/feature5.png"
import Feature6 from "../assets/feature6.png"
import Feature1 from "../assets/feature1.png"
import Offer1 from "../assets/offer1.png"
import Offer2 from "../assets/offer2.png"
import Offer3 from "../assets/offer3.png"
import Offer4 from "../assets/offer4.png"
import Offer5 from "../assets/offer5.png"
import Offer6 from "../assets/offer6.png"


const Body = () => {
  return (
    <>
      <div className="m-4">
        <h1 className="text-center text-primary">
          Check out What's cool about Us!
        </h1>
      </div>
      <div className="mx-5">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="">
              <img
                src={About1}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="h1">Gift Card for 350+ Brands</h5>
                <p className="fs-3">
                  Gifting was never as easy and affordable, as it is with MeriBachat GiftCards
                </p>
              </div>
            </div>
            <button className="btn btn-lg btn-primary">Buy a gift card</button>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="">
              <img
                src={About2}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="h1">Unbeatable Cashback</h5>
                <p className="fs-3">
                  Make the most of your shopping experience through unbelievable savings.
                </p>
              </div>
            </div>
            <button className="btn btn-lg btn-primary">Buy a gift card</button>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="">
              <img
                src={About3}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="h1">Product Comparison</h5>
                <p className="fs-3">
                  Compare prices, features and
                  more for your favourite
                  products!
                </p>
              </div>
            </div>
            <button className="btn btn-lg btn-primary">Buy a gift card</button>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-center text-primary my-5 display-3 fw-bold">
          Category
        </h1>
      </div>
      <div className="mx-5">
        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-12">
            <div className="card pro">
              <img
                src={Ecom}
                className="cat p-4 "
                alt="..."
                style={{ borderRadius: 10 }}
              />
              <div className="">
                <h5 className="m-3 h3">eCommerce</h5>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "flex-end",
                }}
                className=""
              >
                <div className="btn btn-lg btn-primary px-3">Shop</div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-12">
            <div className="card pro">
              <img
                src={Accesesories}
                className="cat p-4 "
                alt="..."
                style={{ borderRadius: 10 }}
              />
              <div className="">
                <h5 className="m-3 h3">Accesesories</h5>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "flex-end",
                }}
                className=""
              >
                <div className="btn btn-lg btn-primary px-3">Shop</div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-12">
            <div className="card pro">
              <img
                src={Dress}
                className="cat p-4 "
                alt="..."
                style={{ borderRadius: 10 }}
              />
              <div className="">
                <h5 className="m-3 h3">Apparels</h5>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "flex-end",
                }}
                className=""
              >
                <div className="btn btn-lg btn-primary px-3">Shop</div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-12">
            <div className="card pro">
              <img
                src={Grocery}
                className="cat p-4 "
                alt="..."
                style={{ borderRadius: 10 }}
              />
              <div className="">
                <h5 className="m-3 h3">Grocery</h5>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "flex-end",
                }}
                className=""
              >
                <div className="btn btn-lg btn-primary px-3">Shop</div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-lg-3 col-md-3 col-sm-12">
            <div className="card pro">
              <img
                src={Food}
                className="cat p-4 "
                alt="..."
                style={{ borderRadius: 10 }}
              />
              <div className="">
                <h5 className="m-3 h3">Food</h5>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "flex-end",
                }}
                className=""
              >
                <div className="btn btn-lg btn-primary px-3">Shop</div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-12">
            <div className="card pro">
              <img
                src={Travel}
                className="cat p-4 "
                alt="..."
                style={{ borderRadius: 10 }}
              />
              <div className="">
                <h5 className="m-3 h3">Travel</h5>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "flex-end",
                }}
                className=""
              >
                <div className="btn btn-lg btn-primary px-3">Shop</div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-12">
            <div className="card pro">
              <img
                src={Electronics}
                className="cat p-4 "
                alt="..."
                style={{ borderRadius: 10 }}
              />
              <div className="">
                <h5 className="m-3 h3">Electronics</h5>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "flex-end",
                }}
                className=""
              >
                <div className="btn btn-lg btn-primary px-3">Shop</div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-12">
            <div className="card pro">
              <img
                src={Others}
                className="cat p-4 "
                alt="..."
                style={{ borderRadius: 10 }}
              />
              <div className="">
                <h5 className="m-3 h3">Others</h5>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "flex-end",
                }}
                className=""
              >
                <div className="btn btn-lg btn-primary px-3">Shop</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex flex-row-reverse">
        <button class="btn btn-lg btn-primary m-5">Browse All</button>
      </div>
      <div>
        <h1 className="text-center text-primary  display-3 fw-bold">
          Key Features
        </h1>
      </div>
      <>
        <div className="mx-5">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="card pro">
                <img
                  src={Feature1}
                  className="cat2"
                  alt="..."
                />
                <div className="card-body">
                  <p className="card-text h4">
                    Discounts through out the year
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="card pro">
                <img
                  src={Feature2}
                  className="cat2"
                  alt="..."
                />
                <div className="card-body">
                  <p className="card-text h4">
                    Additional discounts above the brand discount
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="card pro">
                <img
                  src={Feature3}
                  className="cat2"
                  alt="..."
                />
                <div className="card-body">
                  <p className="card-text h4">
                    No limit whatsever unlike credit cards
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="card pro">
                <img
                  src={Feature4}
                  className="cat2"
                  alt="..."
                />
                <div className="card-body">
                  <p className="card-text h4">
                    Pay the exact amount you want to spend
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="card pro">
                <img
                  src={Feature5}
                  className="cat2"
                  alt="..."
                />
                <div className="card-body">
                  <p className="card-text h4">
                    0% convenience fee
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="card pro">
                <img
                  src={Feature6}
                  className="cat2"
                  alt="..."
                />
                <div className="card-body">
                  <p className="card-text h4">
                    No hidden charges
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="m-4">
          <h1 className="text-center text-primary">What do we offer?</h1>
        </div>
        <div className="mx-5">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="">
                <img
                  src={Offer1}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <p className="fs-3">
                    India's Largest pre-shopping destination
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="">
                <img
                  src={Offer2}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <p className="fs-3">
                    Gift Cards for 300+ brands
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="">
                <img
                  src={Offer3}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <p className="fs-3">
                    Product Comparision
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="">
                <img
                  src={Offer4}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <p className="fs-3">
                    Discount throughout 365 days
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="">
                <img
                  src={Offer5}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <p className="fs-3">
                    Brand discount
                    <br className="text-center" />+<br />
                    meriBachatDiscount
                    <br className="text-center" />=<br />
                    Supper Saving
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="">
                <img
                  src={Offer6}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <p className="fs-3">
                    Unbeatable Cashbacks
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="m-4">
          <h1 className="text-center text-primary">How MeriBachat Works?</h1>
        </div>
        <Swichcase />
      </>
    </>
  );
};

export default Body;
