import React from "react";
import "./About.scss";
// import { BiChevronRight } from "react-icons/bi";

import { Link } from "react-router-dom";
import { AiFillCheckCircle, AiFillCheckSquare } from "react-icons/ai";
import Loading from "../../../Components/Loading/Loading";
import { useEffect, useState } from "react";
import { FaAngleRight } from "react-icons/fa";
import Carusel1 from "../../../Components/Carusel1/Carusel1";
import { motion } from "framer-motion"
import {
  BsCheckLg,
  BsFillCheckSquareFill,
  BsFillPatchCheckFill,
} from "react-icons/Bs";
import Team from "../../../Components/Team/Team";
import UseFetch from "../../../UseFetch";
import AboutSection1 from "../../../Components/AboutSection1/AboutSection1";
import Partners from "../../../Components/Partners/Partners";

export default function About() {
  const apiUrl = import.meta.env.VITE_API_URL;
  //*OUR TEAM SECTION-4
  // const { data: team, error } = UseFetch("http://localhost:8001/team");
  const { data: team, error } = UseFetch(`${apiUrl}core_api/our_team/`);

  //*ABOUTSECTION -1
  const { data: aboutSection1 } = UseFetch(
    "http://localhost:8001/aboutSection1"
  );

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    window.scrollTo({ top: 0 });
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <motion.section initial={{ opacity: 0 }}
        transition={{duration:0.5}}
        whileInView={{ opacity: 1 }}>
          {/* ABOUT HEADER START */}
          <div className="aboutHeader">
            <div className="container">
              <div className="aboutTitle">
                <h2>
                  Ab<span>o</span>ut
                </h2>
              </div>
            </div>
            <div className="aboutLinks">
              <Link to="/home" className="aboutLink">
                Home
              </Link>
              <FaAngleRight className="angleIcon" />
              <Link to="about">About Us</Link>
            </div>
          </div>
          {/* ABOUT HEADER END */}

          {/* SECTION-1 START */}
          <div className="container">
            {aboutSection1 && <AboutSection1 aboutSection1={aboutSection1} />}
          </div>
          {/* SECTION-1 END */}

          {/* SECTION-2 START  */}
          <div className="container">
            <section className="section-2">
              <div className="cardsContainer">
                <div className="card">
                  <h2>Our History</h2>
                  <div className="devider"></div>
                  <p className="description">
                    Real innovations and positive customer experience are the
                    heart of successful communication.
                  </p>
                  <div className="cardListsContainer">
                    <div className="cardList">
                      <div className="icon-container">
                        {" "}
                        <AiFillCheckCircle className="list-icon" />
                      </div>
                      <p>Activate listening</p>
                    </div>
                    <div className="cardList">
                      <AiFillCheckCircle className="list-icon" />
                      <p>Brilliant minds</p>
                    </div>
                    <div className="cardList">
                      <AiFillCheckCircle className="list-icon" />
                      <p>Better, best, wow!</p>
                    </div>
                    <div className="cardList">
                      <AiFillCheckCircle className="list-icon" />
                      <p>Branding it better!</p>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <h2>Our Mission</h2>
                  <div className="devider"></div>
                  <p className="description">
                    Real innovations and positive customer experience are the
                    heart of successful communication.
                  </p>
                  <div className="cardListsContainer">
                    <div className="cardList">
                      <AiFillCheckCircle className="list-icon" />
                      <p>Creating results</p>
                    </div>
                    <div className="cardList">
                      <AiFillCheckCircle className="list-icon" />
                      <p>Expect more</p>
                    </div>
                    <div className="cardList">
                      <AiFillCheckCircle className="list-icon" />
                      <p>Good thinking</p>
                    </div>
                    <div className="cardList">
                      <AiFillCheckCircle className="list-icon" />
                      <p>In real we trust</p>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <h2>Who we are</h2>
                  <div className="devider"></div>
                  <p className="description">
                    Real innovations and positive customer experience are the
                    heart of successful communication.
                  </p>
                  <div className="cardListsContainer">
                    <div className="cardList">
                      <AiFillCheckCircle className="list-icon" />
                      <p>Stay real always</p>
                    </div>
                    <div className="cardList">
                      <AiFillCheckCircle className="list-icon" />
                      <p>We have you covered</p>
                    </div>
                    <div className="cardList">
                      <AiFillCheckCircle className="list-icon" />
                      <p>We turn heads</p>
                    </div>
                    <div className="cardList">
                      <AiFillCheckCircle className="list-icon" />
                      <p>Your brand, promoted</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          {/* SECTION-2 END  */}

          {/* SECTION-3 START */}
          <div className="container">
            <section className="section-3">
              <div className="left">
                <p className="title">WHY CHOOSE US</p>
                <h2 className="header">
                  The key to your motivation and success
                </h2>
                <p className="description">
                  We believe brand interaction is key in communication. Real
                  innovations and a positive customer experience are the heart
                  of successful communication.
                </p>
                <div className="selected-title-container">
                  <BsCheckLg className="tick-icon" />
                  <h2 className="selected-title"> Core Development</h2>
                </div>
                <p className="selected-description">
                  No fake products and services. The customer is king, their
                  lives and needs are the inspiration.
                </p>
                <div className="selected-title-container">
                  <BsCheckLg className="tick-icon" />
                  <h2 className="selected-title"> Define Your Choices</h2>
                </div>
                <p className="selected-description">
                  No fake products and services. The customer is king, their
                  lives and needs are the inspiration.
                </p>
              </div>
              <div className="right">
                <img
                  src="https://themes.hibootstrap.com/varn/wp-content/uploads/2020/01/why-choose-img1-1-1.png"
                  alt=""
                />
              </div>
            </section>
            {/* SECTION-3 END */}
          </div>
          {/* SECTION-3 END */}
          {/* SECTION-4 START */}

          <div className="container">
            {error && <div>{error}</div>}
            {team && <Team team={team} />}
          </div>
          {/* SECTION-4 END */}

          <Partners />
        </motion.section>
      )}
    </>
  );
}
