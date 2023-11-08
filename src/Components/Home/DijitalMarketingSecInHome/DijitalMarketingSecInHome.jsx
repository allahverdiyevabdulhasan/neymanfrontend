import { BsFillPatchCheckFill } from "react-icons/Bs";
import { Link } from "react-router-dom";

const DijitalMarketingSecInHome = ({ digitalMarketingSecInHome }) => {
  return (
    <div className="digital-marketing-container">
      {digitalMarketingSecInHome &&
        digitalMarketingSecInHome.map((services,index) => (
          <div className={`left_right-container ${index % 2 === 0 ? 'alternate-layout' : ''}`} key={services.id}>
            {index % 2 !== 0 ? (
              <div className="right">
                <img src={services.photo} />
              </div>
            ) : null}
            <div className="left">
              <div className="top-container">
                <h2>{services.title}</h2>
                <p>{services.content}</p>
              </div>
              <div className="marketing-cards-container">
                <div className="left-cards-container">
                  {services.service_details.map((detail) => (
                    <div className="card" key={detail.id}>
                      <BsFillPatchCheckFill className="card-icon" />
                      <p>{detail.title}</p>
                    </div>
                  ))}
                </div>
              </div>
              {/* <Link className="readMore-btn">
     <span>READ MORE</span>
   </Link> */}
            </div>
            {index % 2 === 0 ? (
              <div className="right">
                <img src={services.photo} />
              </div>
            ) : null}
          </div>
        ))}
    </div>
  );
};

export default DijitalMarketingSecInHome;
