import {
  BsCheckLg,
  BsFillCheckSquareFill,
  BsFillPatchCheckFill,
} from "react-icons/Bs";

const AboutSection1 = ({ aboutSection1 }) => {
  return (
    <div className="section-1">
      <div className="left">
        <img src={aboutSection1.img} alt="" />
      </div>
      <div className="right">
        <p className="title">{aboutSection1.title}</p>
        <h2 className="header">{aboutSection1.header}</h2>
        <p className="description">{aboutSection1.description}</p>
        <div className="cards-container">
          <div className="left-cards-container">
            <div className="card">
              <BsFillCheckSquareFill className="icon-about" />
              <p>{aboutSection1.cards.card1}</p>
            </div>
            <div className="card">
              <BsFillCheckSquareFill className="icon-about" />
              <p>{aboutSection1.cards.card2}</p>
            </div>
            <div className="card">
              <BsFillCheckSquareFill className="icon-about" />
              <p>{aboutSection1.cards.card3}</p>
            </div>
          </div>
          <div className="right-cards-container">
            <div className="card">
              <BsFillCheckSquareFill className="icon-about" />
              <p>{aboutSection1.cards.card4}</p>
            </div>
            <div className="card">
              <BsFillCheckSquareFill className="icon-about" />
              <p>{aboutSection1.cards.card5}</p>
            </div>
            <div className="card">
              <BsFillCheckSquareFill className="icon-about" />
              <p>{aboutSection1.cards.card6}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection1;
