import { BsFillPatchCheckFill } from "react-icons/Bs";
import { Link } from "react-router-dom";
const WebDesignSecHome = ({ webDesignSecHome }) => {
  return (
    <div className="web-design-section">
      <div className="left">
        <img src={webDesignSecHome[1].photo} />
      </div>
      <div className="right">
        <h2>{webDesignSecHome[1].title}</h2>
        <p>{webDesignSecHome[1].description}</p>
        <div className="cards-container">
          <div className="left-cards-container">
            {webDesignSecHome.map((card) => (
              <div className="card" key={card.id}>
                <BsFillPatchCheckFill className="card-icon" />
                {""}
                <p>{card.title}</p>
              </div>
            ))}
          </div>
        
        </div>
        {/* <Link className="readMore-btn">
          <span>READ MORE</span>
        </Link> */}
      </div>
    </div>
  );
};

export default WebDesignSecHome;
