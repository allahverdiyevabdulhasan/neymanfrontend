import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./LatestWorkCardInHome.scss";
import { BiCategory } from "react-icons/Bi";
import { CiSearch } from "react-icons/ci";
import { FaAngleRight } from "react-icons/fa";
import { motion } from "framer-motion";

const LatestWorkCardInHome = ({ latestWorkCardInHome, isProjectPage }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [hoveredItem, setHoveredItem] = useState(null);
  const handleMouseEnter = (title) => {
    setHoveredItem(title);
  };
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
  const filteredWorks = latestWorkCardInHome
    ? latestWorkCardInHome.filter(
        (work) =>
          work.services_property.title
            .toLowerCase()
            .includes(search.toLowerCase()) ||
          work.services_property.services.title
            .toLowerCase()
            .includes(search.toLowerCase())
      )
    : [];

  const handleClick = (title) => {
    setSearch(title);
    setIsModalOpen(false);
  };

  const inputRef = useRef(null)

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);
  

  return (
    <>
 
      {isProjectPage && isModalOpen && <div className="overlay" onClick={openModal} />}
      {isProjectPage && (



<div className="modal-section">
        <div className="kateqoriya-sec">
          <div className="kateqoriya">
            <div>
              <BiCategory className="category-icon" onClick={openModal} />
            </div>
            <p>Kateqoriya seçin</p>
          </div>
          <div className="input-search">
            <input type="text" placeholder="search" onChange={handleSearch} ref={inputRef} />
            <div>
              <CiSearch
                className="category-search-icon"
                // onClick={() => handleClick(card.services_property.services.title)}
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
                  onMouseEnter={() =>
                    handleMouseEnter('')
                  }
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleClick("")}
                >
                  All
                  <FaAngleRight className="modal-angle-icon" />
                </li>
                {latestWorkCardInHome.map((card) => (
                  <li
                    key={card.id}
                    onMouseEnter={() =>
                      handleMouseEnter(card.services_property.title)
                    }
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleClick(card.services_property.title)}
                  >
                    {card.services_property.title}
                    <FaAngleRight className="modal-angle-icon" />
                    {hoveredItem === card.services_property.title && (
                      <ul className="modal-2">
                        <li
                          className="modal-2-li"
                          onClick={() =>
                            handleClick(card.services_property.services.title)
                          }
                        >
                          {card.services_property.services.title}
                        </li>
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </div>


      )}
      
      <motion.div
        initial={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        whileInView={{ opacity: 1 }}
        className="home__works__cards"
      >
        {filteredWorks &&
          filteredWorks.map((card) => (
            <Link to={card.link_url} key={card.id}>
              <div className="home__works__cards__card" key={card.id}>
                <img src={card.photo} alt={card.company_name} />
                <div className="info">
                  <p className="heading">{card.company_name}</p>
                  <p className="description">{card.services_category}</p>
                </div>
              </div>
            </Link>
          ))}
      </motion.div>
    </>
  );
};

export default LatestWorkCardInHome;
