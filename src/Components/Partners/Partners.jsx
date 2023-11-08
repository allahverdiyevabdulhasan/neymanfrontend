import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import UseFetch from "../../UseFetch";
import "./Partners.scss";

const Partners = () => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const { data: partners } = UseFetch(`${apiUrl}core_api/collaborator/`);

  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    // console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <>
    <h2 className="partners-header">Our Loving Clients</h2>
    <div className="partners">
      <motion.div
        ref={carousel}
        className="carousel"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="inner-carousel"
        >
          {partners &&
            partners.map(({ name, logo }) => (
              <motion.div className="itemmm" key={name}>
                <img src={logo} alt="" />
              
              </motion.div>
            ))}

          
        </motion.div>
      </motion.div>
    </div>
    </>
  );
};

export default Partners;
