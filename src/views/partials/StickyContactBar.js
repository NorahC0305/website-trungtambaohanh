import React, { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import EmailIcon from "@mui/icons-material/Email";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import CloseIcon from "@mui/icons-material/Close";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookMessenger,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";

const StickyContactBar = () => {
  const [isVisible, setIsVisible] = useState(true);
  

  const handleToggle = () => {
    setIsVisible(!isVisible);
  };

  const handleTelegramClick = () => {
   window.open("https://zalo.me/0903757560")
  };

  const handleMessengerClick = () => {
    window.open("https://www.facebook.com/profile.php?id=100080799063525")
  };

  const handleEmailClick = () => {
    window.open("/")
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
        <EmailIcon className="icon" />
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
