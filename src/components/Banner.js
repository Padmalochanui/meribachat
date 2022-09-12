import React from "react";
import Banner1 from "../assets/banner1.png"
import Banner2 from "../assets/banner2.png"
import Banner3 from "../assets/banner3.png"
import Banner4 from "../assets/banner4.png"
import Banner5 from "../assets/banner5.png"

const Banner = () => {
  return (
    <>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={2}
            aria-label="Slide 3"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={3}
            aria-label="Slide 4"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={4}
            aria-label="Slide 5"
          />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <h1 className="text-primary  m-5">Gift cards aren’t always about gifting to someone, GIFT YOURSELF.</h1>
                <p className="h5 m-3">Buy a gift card today and appreciate the special you!</p>
                <button className="btn btn-lg btn-primary mt-5 " style={{ marginLeft: '200px' }}>Browse gift cards  </button>
              </div>
              <div className="col-lg-6 col-md-6">
                <img
                  className="car"
                  src={Banner1}
                  alt="..."
                />
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <h1 className="text-primary  mt-5">Limited discounts on your credit card?</h1>
                <h3 className="text-primary  m-3">Get a Meribachat gift card</h3>
                <p className="h5 m-3">No limit for happiness and Meribachat gift card. Now shop and pay the exact bill amount and get cashback into your MB wallet
                </p>
                <button className="btn btn-lg btn-primary mt-5 " style={{ marginLeft: '200px' }}>Browse gift cards  </button>
              </div>
              <div className="col-lg-6 col-md-6">
                <img
                  className="car"
                  src={Banner2}
                  alt="..."
                />
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <h1 className="text-primary  m-4">MeriBachat</h1>
                <h2 className="mx-4">One stopshop for all your additional savings!</h2>
                <h3 className=" m-3">Buy a gift card today and appreciate the special you!</h3>
                <p className="h5 m-3">Meribachat is the leading platform for your gifting needs. Here at meribachat we offer the most exciting deals and help you to save few bucks on top of brand discounts.</p>
                <button className="btn btn-lg btn-primary mt-5 " style={{ marginLeft: '200px' }}>Browse gift cards  </button>
              </div>
              <div className="col-lg-6 col-md-6">
                <img
                  className="car"
                  src={Banner3}
                  alt="..."
                />
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <h1 className="text-primary text-center mt-5">Gift cards aren’t always about gifting to someone, GIFT YOURSELF.</h1>
                <h3 className="text-primary text-center mt-3">Buy a gift card today and appreciate the special you!</h3>
                <button className="btn btn-lg btn-primary mt-5 " style={{ marginLeft: '200px' }}>Browse gift cards  </button>
              </div>
              <div className="col-lg-6 col-md-6">
                <img
                  className="car"
                  src={Banner4}
                  alt="..."
                />
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <h1 className="text-primary text-center mt-5">Over & Above brand discounts</h1>
                <h3 className="text-primary text-center mt-3">Double dhamaka by using Meribachat, Get both brand discount and meribachat discount by purchasing MB gift card. So lets go Browse all gift cards.</h3>
                <button className="btn btn-lg btn-primary mt-5 " style={{ marginLeft: '200px' }}>Browse gift cards  </button>
              </div>
              <div className="col-lg-6 col-md-6">
                <img
                  className="car"
                  src={Banner5}
                  alt="..."
                />
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className=""></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className=""> </span>
        </button>
      </div>
    </>
  );
};

export default Banner;
