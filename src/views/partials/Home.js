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
          <div className="about-container">
            <div className="about-container about-us-info">
              <h3>Về Chúng Tôi</h3>
              <p>
                Với hơn 10 năm kinh nghiệm trong ngành, chúng tôi tự hào là đơn
                vị hàng đầu trong việc cung cấp dịch vụ sửa chữa và bảo hành các
                loại thiết bị điện tử, điện gia dụng. Chúng tôi hiểu rằng các
                thiết bị điện tử và gia dụng đóng vai trò quan trọng trong cuộc
                sống hàng ngày của bạn, do đó chúng tôi cam kết mang lại cho bạn
                dịch vụ chất lượng cao, đáng tin cậy và nhanh chóng.
              </p>
            </div>
            <div className="about-container our-services-info">
              <h3>Dịch Vụ Của Chúng Tôi Bao Gồm:</h3>
              <ul>
                <li>
                  <strong>Sửa Chữa Điện Tử:</strong>
                  <ul>
                    <li>
                      Các thiết bị điện tử cá nhân như điện thoại, máy tính
                      bảng, laptop, máy ảnh,...
                    </li>
                    <li>
                      Các thiết bị điện tử gia đình như tivi, đầu đĩa, hệ thống
                      âm thanh,...
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Sửa Chữa Điện Gia Dụng:</strong>
                  <ul>
                    <li>
                      Các thiết bị nhà bếp như lò vi sóng, máy xay sinh tố, nồi
                      cơm điện,...
                    </li>
                    <li>
                      Các thiết bị làm lạnh như tủ lạnh, máy lạnh, máy giặt,...
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Bảo Hành:</strong>
                  <ul>
                    <li>
                      Bảo hành các sản phẩm điện tử và điện gia dụng theo tiêu
                      chuẩn nhà sản xuất.
                    </li>
                    <li>
                      Dịch vụ bảo hành mở rộng với các gói bảo hành linh hoạt và
                      phù hợp với nhu cầu của khách hàng.
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="about-container reason-info">
              <h3>Tại Sao Chọn Chúng Tôi?</h3>
              <ul>
                <li>
                  <strong>Kinh Nghiệm và Chuyên Môn:</strong> Với đội ngũ kỹ
                  thuật viên có tay nghề cao và giàu kinh nghiệm, chúng tôi tự
                  tin xử lý mọi vấn đề của thiết bị một cách chuyên nghiệp và
                  hiệu quả.
                </li>
                <li>
                  <strong>Chất Lượng Dịch Vụ:</strong> Chúng tôi luôn đặt chất
                  lượng dịch vụ lên hàng đầu, cam kết mang lại sự hài lòng tuyệt
                  đối cho khách hàng.
                </li>
                <li>
                  <strong>Nhanh Chóng và Tiện Lợi:</strong> Dịch vụ của chúng
                  tôi không chỉ nhanh chóng mà còn tiện lợi với nhiều lựa chọn
                  như sửa chữa tại nhà hoặc tại trung tâm.
                </li>
                <li>
                  <strong>Giá Cả Cạnh Tranh:</strong> Chúng tôi cung cấp dịch vụ
                  với mức giá hợp lý, cạnh tranh, phù hợp với túi tiền của mọi
                  khách hàng.
                </li>
              </ul>
            </div>
            <p>
              Hãy để chúng tôi đồng hành cùng bạn trong việc bảo vệ và duy trì
              hoạt động tốt nhất cho các thiết bị điện tử và điện gia dụng của
              bạn. Liên hệ với chúng tôi ngay hôm nay để nhận được sự tư vấn và
              hỗ trợ tốt nhất!
            </p>
          </div>
        </section>
        <section className="services-section" id="services">
          <div className="services-container">
            <h2>Dịch Vụ Của Chúng Tôi</h2>
            <p>Thêm thông tin về dịch vụ ở đây</p>
          </div>
        </section>
        <section className="contact-section" id="contact">
          <div className="contact-container">
            <h2>Liên Hệ</h2>
            <p>Thêm thông tin liên hệ ở đây</p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
