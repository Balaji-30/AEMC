import React from "react";
import "./Home.css";
import homeimg from "./images/home1.jpg";

const Home = () => {
  return (
    <>
      <div class="wrapper">
        <div class="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="banner-wrapper-content">
                <h1>Build Skills With Experts Any Time, Anywhere</h1>
                <p>
                  Ask Experts Medical Coding Academy is one of the best, tried
                  and trusted medical coding professional training provider in
                  Mysore, Karnataka. Our training method is completely different
                  to others as we focus more on innovative training methods
                  which further grabs engagement.
                </p>

                <a routerlink="/contact" class="default-btn" href="/contact">
                  <button type="button" class="btn btn-primary btn-lg">
                    <i class="fi fi-rr-user"></i> Get Started Now
                  </button>
                </a>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="banner-wrap-image">
                <img src={homeimg} alt="image"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
