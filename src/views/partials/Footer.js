import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUp,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../../img/logo.webp";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section company-info">
          <img src={logo} alt="Zojirushi" className="footer-logo" />
          <p className="label">Địa chỉ</p>
          <p>
            454 Đ.Nguyễn Thị Minh Khai, Phường Nguyễn Cư Trinh, Quận 1, Hồ Chí
            Minh, Việt Nam
          </p>
          <p className="label">Hotline</p>
          <p>0902607575 - 0903757560</p>
          <p className="label">Email</p>
          <p>trungtambaohanh@gmail.com</p>
        </div>
        <div className="footer-section maps">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2340.3550550446953!2d106.68445097903897!3d10.768515882949805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752fb346ab71f5%3A0x575e7eca92777912!2zVHJ1bmcgVMOibSBC4bqjbyBIw6BuaCBaT0pJUlVTSEk!5e1!3m2!1svi!2s!4v1719940935954!5m2!1svi!2s"
            width="1250"
            height="450"
            allowfullscreen="true"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="footer-section policy">
          <h3>CHÍNH SÁCH</h3>
          <ul>
            <li>Chính sách bảo mật</li>
            <li>Chính sách vận chuyển</li>
            <li>Chính sách đổi trả</li>
            <li>Quy định sử dụng</li>
            <li>Chính sách bảo hành</li>
          </ul>
        </div>
        <div className="footer-section social-media">
          <h3>FANPAGE</h3>
          <div className="social-icons">
            <a
              href="https://www.facebook.com/profile.php?id=100080799063525"
              target="_blank"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://zalo.me/0903757560" target="_blank">
              <FontAwesomeIcon icon={faPhone} />
            </a>
            <a href="#" target="_blank">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright &copy; | All Rights Reserved.</p>
      </div>
      <div className="scroll-to-top" onClick={scrollToTop}>
        <FontAwesomeIcon className="scroll-icon" icon={faArrowUp} />
      </div>
    </footer>
  );
};

export default Footer;
