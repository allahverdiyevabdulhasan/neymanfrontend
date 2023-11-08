import React from "react";
import toast , {Toaster} from "react-hot-toast";
import { Link } from "react-router-dom";
import "./Footer.scss";

// import { BiLogoGmail } from "react-icons/bi";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelopeOpen,
  faHandshakeSlash,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import UseFetch from "../../../UseFetch";
// import { FaTwitter } from 'react-icons/fa'

export default function Footer() {
  const apiUrl = import.meta.env.VITE_API_URL;

  const { data: contact } = UseFetch(`${apiUrl}core_api/contact_card`);

  const [email, setEmail] = useState("");

  const handleClick = () => {
    if (email) {
      fetch(`${apiUrl}core_api/subscribe/`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ email }),
      });
      setEmail("");
      toast.success("You have successfully subscribed");
    
    }else{
      toast.error("Did not work. Please type your email")
    }
  };

  return (
    <div className="footer">
      <div className="container">
        <div className="footer__subscribers">
          <div className="footer__subscribe-content">
            <h2>KNOW IT ALL FIRST !</h2>
            <p>
              Never Miss Anything From Multikard By Signing Up To Our Newsletter
            </p>
          </div>

          <div className="footer__input-button-container">
          <Toaster position="top-center"  />
            <input
              type="text"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="footer__subscribe-input"
            />
            <button onClick={handleClick} className="footer__subscribe-button">
              SUBSCRIBE
            </button>
          </div>
        </div>

        <div className="footer__top">
          <div className="footer__contactInfoCol">
            <div className="footer__headerandBorderBottom">
              <h2>Contact info</h2>
              <div className="footer__devider"></div>
            </div>
            <div className="footer__contactContainer">
              <div className="footer__iconContainer">
                <FontAwesomeIcon
                  icon={faPhoneVolume}
                  className="footer__phoneIcon"
                />
              </div>
              <div className="footer__phoneInfo">
                <p>MON TO FRI : 10:00AM – 06:00PM</p>
                <Link to="tel:+994 0000000">+994 00000000</Link>
              </div>
            </div>
            <div className="footer__contactContainer">
              <div className="footer__iconContainer">
                <FontAwesomeIcon
                  icon={faEnvelopeOpen}
                  className="footer__phoneIcon"
                />
              </div>
              <div className="footer__phoneInfo">
                <p>DO YOU HAVE A QUESTION?</p>
                <Link to="#">hello@varn.com</Link>
              </div>
            </div>
            <div className="footer__contactContainer">
              <div className="footer__iconContainer">
                <FontAwesomeIcon
                  icon={faHandshakeSlash}
                  className="footer__phoneIcon"
                />
              </div>

              {/*    FOOTER SOCIAL MEDIA ICONS */}

              <div className="footer__phoneInfo">
                <p>SOCIAL NETWORK</p>
                <div className="footer__socialMediaContainer">
                  <Link
                    className="footer__socialMediaLinks"
                    to={"https://twitter.com/"}
                  >
                    <FontAwesomeIcon
                      icon={faFacebook}
                      className="footer__socialIcon"
                    />
                  </Link>

                  <Link
                    className="footer__socialMediaLinks"
                    to={"https://www.facebook.com//"}
                  >
                    <FontAwesomeIcon
                      icon={faInstagram}
                      className="footer__socialIcon"
                    />
                  </Link>

                  <Link
                    className="footer__socialMediaLinks"
                    to={"https://www.instagram.com//"}
                  >
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      className="footer__socialIcon"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="footer__quickLinksContainer">
            <div className="footer__bottomUnderscore">
              <h2>Quick Links</h2>
              <div className="footer__devider"></div>
            </div>
            <div className="footer__quickLinks">
              <div className="footer__left">
                <Link className="footer__footerLinks" to={"/"}>
                  Home
                </Link>
                <Link className="footer__footerLinks" to={"/blogs"}>
                  Blogs
                </Link>
                <Link className="footer__footerLinks" to={"/faq"}>
                  FAQ
                </Link>
                <Link className="footer__footerLinks" to={"/project"}>
                  Projects
                </Link>
           
              </div>
              <div className="footer__right">
                <Link className="footer__footerLinks" to={"/about"}>
                  About
                </Link>
                <Link className="footer__footerLinks" to={"/contact"}>
                  Contact
                </Link>

                <Link className="footer__footerLinks" to={"/price"}>
                  Pricing
                </Link>
             
                {/* <Link className='footer__footerLinks' to={'/blogs'}>
                Services
              </Link> */}
              </div>
            </div>
          </div>
          <div className="footer__galleryContainer">
            <div className="footer__bottomUnderscore">
              <h2>Gallery</h2>
              <div className="footer__devider"></div>
            </div>
            <div className="footer__galleries">
              <div className="footer__firstLine">
                <div className="footer__galleriesImagesCont">
                  <img
                    src="https://themes.hibootstrap.com/varn/wp-content/uploads/2020/01/blog-image-2-1-1-300x300.jpg"
                    alt=""
                  />
                </div>
                <div className="footer__galleriesImagesCont">
                  <img
                    src="https://themes.hibootstrap.com/varn/wp-content/uploads/2020/01/blog-image-10-1-1-300x300.jpg"
                    alt=""
                  />
                </div>
                <div className="footer__galleriesImagesCont">
                  <img
                    src="https://themes.hibootstrap.com/varn/wp-content/uploads/2020/01/blog-image-9-1-1-300x300.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="footer__secondLine">
                <div className="footer__galleriesImagesCont">
                  <img
                    src="https://themes.hibootstrap.com/varn/wp-content/uploads/2020/01/blog-image-8-1-1-300x300.jpg"
                    alt=""
                  />
                </div>
                <div className="footer__galleriesImagesCont">
                  <img
                    src="https://themes.hibootstrap.com/varn/wp-content/uploads/2020/01/blog-image-7-1-1-300x300.jpg"
                    alt=""
                  />
                </div>
                <div className="footer__galleriesImagesCont">
                  <img
                    src="https://themes.hibootstrap.com/varn/wp-content/uploads/2020/01/blog-image-6-1-1-300x300.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="footer__bottom">
          <div className="footer__bottomDevider"></div>
          <div className="footer__copyright">
            <p className="footer__copyrightLeft">
              Copyright 2022 . All rights reserved
            </p>
            <p className="footer__copyrightRight">
              Terms & Conditions | Privacy Policy
            </p>
          </div>
        </div>
      </div>
    </div>

  ) 
}
