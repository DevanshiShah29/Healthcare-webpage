import React from "react";
import shape from "../assets/images/footerBG.png";
import phoneIcon from "../assets/images/phoneIcon.png";
import MailIcon from "../assets/images/mailIcon.png";
import LocationIcon from "../assets/images/locationIcon.png";

const Footer = () => {
  return (
    <footer>
      <img className="square-shapes" src={shape} alt="square shapes" />
      <div className="container">
        <div className="shape-wrap"></div>
        <div className="row">
          <div className="col-sm-3">
            <div className="text">
              <div className="icon">
                <img src={phoneIcon} alt="icon" />
              </div>
              070 364 42 96
            </div>
          </div>
          <div className="col-sm-4">
            <div className="text">
              <div className="icon">
                <img src={MailIcon} alt="icon" />
              </div>
              <a href="mailto:info@ids-nederland.nl">info@ids-nederland.nl</a>
            </div>
          </div>
          <div className="col-sm-5">
            <div className="text">
              <div className="icon">
                <img src={LocationIcon} alt="icon" />
              </div>
              Binckhorstlaan 36, 2516 BE Den Haag
            </div>
          </div>
        </div>
        <div className="text-center">
          <div className="link note">© 2017 IDS Nederland </div>
          <a href="/#" className="link">
            Algemene voorwaarden
          </a>
          <a href="/#" className="link">
            Privacy
          </a>
          <a href="/#" className="link">
            Disclaimer
          </a>
          <a href="/#" className="link">
            Cookies
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
