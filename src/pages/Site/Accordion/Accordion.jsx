import { useEffect, useState } from "react";
import "./Accordion.scss";
import AccordionItem from "../../../Components/AccordionItem/AccordionItem";
import UseFetch from "../../../UseFetch";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import Loading from "../../../Components/Loading/Loading";
import { motion } from "framer-motion";
const Accordion = () => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const { data: faq } = UseFetch(`${apiUrl}core_api/faq`);

  const [curOpen, setCurOpen] = useState(null);
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
          <div className="accordionHeader">
            <div className="container">
              <div className="accordionTitle">
                <h2>
                  F<span>A</span>Q
                </h2>
              </div>
            </div>
            <div className="accordionLinks">
              <Link to="/home" className="homeLink">
                Home
              </Link>
              <FaAngleRight className="angelIcon" />
              <Link className="faqLink" to="faq">
                FAQ
              </Link>
            </div>
          </div>
          <div className="accordion">
            {faq &&
              faq.map((item, i) => (
                <AccordionItem
                  key={item.question}
                  num={i}
                  title={item.question}
                  text={item.answer}
                  curOpen={curOpen}
                  onOpen={setCurOpen}
                >
                  {item.answer}
                </AccordionItem>
              ))}
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Accordion;
