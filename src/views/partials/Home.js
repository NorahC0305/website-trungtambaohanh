import React, { useEffect, useState } from "react";

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 6;
  const [backgroundImage, setBackgroundImage] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    }, 6000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  useEffect(() => {
    const currentImage = document.querySelector(
      `.list-images .slide:nth-child(${currentSlide + 1}) img`
    );
    if (currentImage) {
      setBackgroundImage(currentImage.src);
    }
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
  };

  const currentSlideHandler = (n) => {
    setCurrentSlide(n - 1);
  };

  return (
    <div>
      <div id="root">
        <section className="home-section" id="home">
          <div className="slide-show-container">
            <div
              className="slide-show-background"
              style={{ backgroundImage: `url(${backgroundImage})` }}
            ></div>
            <div className="slide-show">
              <div
                className="list-images"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                <div className="slide">
                  <div className="image-wrapper">
                    <img
                      src="https://thuythithi.com/wp-content/uploads/2020/03/tim-bac-si-thu-y-uy-tin-chua-benh-cho-cho-meo-tai-tp-hcm.jpg"
                      alt="product"
                    ></img>
                  </div>
                </div>
                <div className="slide">
                  <div className="image-wrapper">
                    <img
                      src="https://thuythithi.com/wp-content/uploads/2020/03/doi-ngay-bac-si-thu-y-khi-thay-nhung-dau-hieu-sau-de-thu-cung-cua-ban-luon-khoe-manh.jpg"
                      alt="product"
                    ></img>
                  </div>
                </div>
                <div className="slide">
                  <div className="image-wrapper">
                    <img
                      src="https://media.istockphoto.com/id/1371820919/vi/anh/y-t%C3%A1-tr%E1%BA%BB-nh%C3%ACn-labrador.jpg?s=612x612&w=0&k=20&c=FMAM4UXefhcSVe82TTvMNEh8HtR7hIUjshzEK4e5Hd4="
                      alt="product"
                    ></img>
                  </div>
                </div>
                <div className="slide">
                  <div className="image-wrapper">
                    <img
                      src="https://ttol.vietnamnetjsc.vn/images/2019/01/27/21/51/photo-1-15485795786021781044006.jpg"
                      alt="product"
                    ></img>
                  </div>
                </div>
                <div className="slide">
                  <div className="image-wrapper">
                    <img
                      src="https://media.istockphoto.com/id/1044460686/vi/anh/b%C3%A1c-s%C4%A9-s%E1%BB%AD-d%E1%BB%A5ng-%E1%BB%91ng-nghe-tr%C3%AAn-m%E1%BB%99t-con.jpg?s=612x612&w=0&k=20&c=gbP097Z9ZDOzN2v_a7SVAmDYO2aZsGKmsRf5wCyHkHo="
                      alt="product"
                    ></img>
                  </div>
                </div>
                <div className="slide">
                  <div className="image-wrapper">
                    <img
                      src="https://media.istockphoto.com/id/1303833920/vi/anh/nam-b%C3%A1c-s%C4%A9-th%C3%BA-y-ki%E1%BB%83m-tra-ch%C3%B3-t%E1%BA%A1i-ph%C3%B2ng-kh%C3%A1m-th%C3%BA-y.jpg?s=612x612&w=0&k=20&c=JpWoIV99ZHVm-jLZn_p2rSlSQ0MPqdQzB-QmXAmwnjQ="
                      alt="product"
                    ></img>
                  </div>
                </div>
              </div>
              <div className="button-slide">
                <button className="prev" onClick={prevSlide}>
                  &#10094;
                </button>
                <button className="next" onClick={nextSlide}>
                  &#10095;
                </button>
              </div>
              <div className="dot-container">
                {Array.from({ length: totalSlides }).map((_, index) => (
                  <span
                    key={index}
                    className={`dot ${index === currentSlide ? "active" : ""}`}
                    onClick={() => currentSlideHandler(index)}
                  ></span>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="about-section" id="about">
          about
        </section>
        <section className="services-section" id="services">
          services
        </section>
        <section className="contact-section" id="contact">
          conttact
        </section>
      </div>
    </div>
  );
}

export default Home;
