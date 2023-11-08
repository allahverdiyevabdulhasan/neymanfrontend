import { AiOutlineClose } from "react-icons/ai";
import { TiTick } from "react-icons/ti";
import { motion } from "framer-motion";

const PriceCard = ({ title, price, color, period, property, symbol }) => {
  const apiUrl = import.meta.env.VITE_API_URL;

 const sorted = [...property].sort((a,c)=> c.is_active - a.is_active )

  return (
    <motion.div className="cardsContainer__card"  initial={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
    whileInView={{ opacity: 1 }}>
      <h2
        style={{ backgroundColor: color }}
        className="cardsContainer__cardHeader"
      >
        {title}
      </h2>

      <div className="cardsContainer__pricePeriodContainer">
        <p className="cardsContainer__exchangeRate">{symbol}</p>
        <span className="cardsContainer__price">{price}</span>
        <p className="cardsContainer__period">/ {period}</p>
      </div>

      <div className="cardsContainer__devider"></div>
      <div className="cardsContainer__cardContentContainer">
        {sorted.map((item, index) => (
          <div className="cardsContainer__itemsContainer" key={index}>
            <p className="cardsContainer__items">{item.property_name}</p>
            {item.is_active ? (
              <TiTick className="cardsContainer__tick-icon" />
            ) : (
              <AiOutlineClose className="cardsContainer__notAveilble-icon" />
            )}
          </div>
        ))}
      </div>
    
    </motion.div>
  );
};

export default PriceCard;
