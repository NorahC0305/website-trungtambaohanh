import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookMessenger,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const StickyContactBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleTelegramClick = () => {
    window.open("https://zalo.me/0903757560");
  };

  const handleMessengerClick = () => {
    window.open("https://www.facebook.com/profile.php?id=100080799063525");
  };

  const handleEmailClick = () => {
    window.open("/");
  };

  return (
    <div className="sticky-container">
      <div
        className={`button animated ${isVisible ? "visible" : "hidden"}`}
        onClick={handleMessengerClick}
      >
        <FontAwesomeIcon className="icon" icon={faFacebookMessenger} />
      </div>
      <div
        className={`button animated ${isVisible ? "visible" : "hidden"}`}
        onClick={handleEmailClick}
      >
        <FontAwesomeIcon className="icon" icon={faEnvelope} />
      </div>
      <div
        className={`button animated ${isVisible ? "visible" : "hidden"}`}
        onClick={handleTelegramClick}
      >
        <FontAwesomeIcon className="icon" icon={faTelegram} />
      </div>
    </div>
  );
};

export default StickyContactBar;
