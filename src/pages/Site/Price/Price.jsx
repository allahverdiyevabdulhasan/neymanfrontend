import React, { useEffect, useState } from "react";
import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Loading from "../../../Components/Loading/Loading";
import PriceCard from "../../../Components/PriceCard/PriceCard";
import UseFetch from "../../../UseFetch";
import { BiCategory } from "react-icons/Bi";
import { CiSearch } from "react-icons/ci";
import { motion } from "framer-motion";
import "./Price.scss";
import { useRef } from "react";


export default function Price() {
  const apiUrl = import.meta.env.VITE_API_URL;


  const inputRef = useRef(null); // Add a reference to the search input element

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus(); // Set focus on the input element when the page is refreshed
    }
  }, []);




  const { data: priceCards } = UseFetch(`${apiUrl}service_api/package/`);
  const { data: price } = UseFetch(`${apiUrl}service_api/services_property/`);

  const [isModalOpen, setIsModalOpen] = useState(false);

   const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const openModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleClick = (id) => {
    setSearch(id);
    setIsModalOpen(false);
  };

  
 

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
        <motion.div
          initial={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          whileInView={{ opacity: 1 }}
        >
          {/*       headerLink start */}
          <div className="priceHeader">
            <div className="container">
              <div className="priceTitle">
                <h2>
                  Pri<span>c</span>ing
                </h2>
              </div>
            </div>
            <div className="priceLinks">
              <Link to="/home" className="priceLink">
                Home
              </Link>
              <FaAngleRight className="angleIcon" />
              <Link to="about">Pricing</Link>
            </div>
          </div>
          {/*      headerLink end */}

          {/*    header start */}
          <div className="header">
            <h2>Choose your best plan</h2>
            <p>
              Real innovations and a positive customer experience are the heart
              of successful communication. No fake products and services.
            </p>
          </div>
          {/*    header end*/}

          {isModalOpen && <div className="overlay" onClick={openModal} />}
          <div className="modal-section">
            <div className="kateqoriya-sec">
              <div className="kateqoriya">
                <div>
                  <BiCategory className="category-icon" onClick={openModal} />
                </div>
                <p>Kateqoriya seçin</p>
              </div>
              <div className="input-search">
                <input
                  type="text"
                  placeholder="search"
                  onChange={handleSearch}
                  ref={inputRef}
                />
                <div>
                  <CiSearch
                    className="category-search-icon"
                    onClick={() => handleClick(card.services_property.title)}
                  />
                </div>
              </div>
            </div>

            {isModalOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                whileInView={{ opacity: 1 }}
                className="modal-wrapper"
              >
                <div className="modal">
                  <ul>
                    <li
                      onMouseLeave={handleMouseLeave}
                      onClick={() => handleClick('')}
                    >
                      All
                      <FaAngleRight className="modal-angle-icon" />
                    </li>
                    {price &&
                      price.map((card) => (
                        <li
                          key={card.id}
                          onMouseEnter={() => handleMouseEnter(card.title)}
                          onMouseLeave={handleMouseLeave}
                          onClick={() => handleClick(card.id)}
                        >
                          {card.title}
                          <FaAngleRight className="modal-angle-icon" />
                        </li>
                      ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </div>

          <div className="cardsContainer">
            {priceCards &&
              priceCards
                .filter((priceCard) => {
                  if (search) {
                    return priceCard?.services_property == search;
                  }
                  return true;
                })
                .map((card) => (
                  <PriceCard
                    title={card.package_name}
                    price={card.price}
                    period={card.price_period}
                    serviceItems={card.property_name}
                    color={card.color}
                    property={card.package_properties}
                    symbol={card.symbol}
                    key={card.id}
                  />
                ))}
          </div>
        </motion.div>
      )}
    </>
  );
}
