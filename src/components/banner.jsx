import React from "react";

function Banner() {
  return (
    <>
      <section className="banner">
        <div
          id="Cybersoft-carousel"
          className="carousel slide"
          data-bs-ride="false"
        >
          {/* Thanh dots */}
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#Cybersoft-carousel"
              data-bs-slide-to={0}
              className="active"
              aria-label="Slide 1"
              aria-current="true"
            />
            <button
              type="button"
              data-bs-target="#Cybersoft-carousel"
              data-bs-slide-to={1}
              aria-label="Slide 2"
              className=""
            />
            <button
              type="button"
              data-bs-target="#Cybersoft-carousel"
              data-bs-slide-to={2}
              aria-label="Slide 3"
              className=""
            />
          </div>
          <div className="carousel-inner">
            <div className="carousel-item item1 active">
              <div className="overlay"></div>
              <div className="carousel_caption">
                <div className=" animate__animated animate__backInUp d-flex flex-column align-items-center">
                  <img src="./img/01-3.jpg" alt="" />
                  <h5>Anna</h5>
                  <p>Indulge in Delicious Delights!</p>
                </div>
              </div>
            </div>
            <div className="carousel-item item2">
              <div className="overlay"></div>
              <div className="carousel_caption">
                <div className=" animate__animated animate__backInUp d-flex flex-column align-items-center">
                  {" "}
                  <img src="./img/02-3.jpg" alt="" />
                  <h5>Jimmy</h5>
                  <p>Savor the Flavorful Feast!</p>
                </div>
              </div>
            </div>
            <div className="carousel-item item3">
              <div className="overlay"></div>
              <div className="carousel_caption">
                <div className=" animate__animated animate__backInUp d-flex flex-column align-items-center">
                  <img src="./img/03-3.jpg" alt="" />
                  <h5>Lucy</h5>
                  <p>Taste the Temptation, Love the Flavor!</p>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev d-none"
            type="button"
            data-bs-target="#Cybersoft-carousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next d-none"
            type="button"
            data-bs-target="#Cybersoft-carousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
    </>
  );
}

export default Banner;
