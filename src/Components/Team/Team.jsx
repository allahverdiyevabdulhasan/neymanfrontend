import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Team.scss";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { useState } from "react";
// const [loading, setLoading] = useState(false);

const Team = ({ team }) => {
  // useEffect(() => {
  //   setLoading(true);
  //   window.scrollTo({ top: 0 });
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 1000);
  // }, []);

  return (
    <section className="teamSection">
      <div className="teamHeaderContainer">
        <p>OUR TEAM</p>
        <h2>Meet our awesome team member</h2>
      </div>
      <div className="team-container">
        {team.map((member) => (
          <div className="team-container__cardContainer" key={member.id}>
            <div className="team-container__profile-container">
              {member.github || member.facebook || member.instagram || member.linkedln || member.tweeter ? (
                <div className="team-container__socialContainer">
                  {member.github && (
                    <Link to={member.github}>
                      <FontAwesomeIcon
                        icon={faGithub}
                        className="team-container__teamSocialIcon"
                      />
                    </Link>
                  )}
                  {member.facebook && (
                    <Link to={member.facebook}>
                      <FontAwesomeIcon
                        className="team-container__teamSocialIcon"
                        icon={faFacebook}
                      />
                    </Link>
                  )}
                  {member.instagram && (
                    <Link to={member.instagram}>
                      <FontAwesomeIcon
                        className="team-container__teamSocialIcon"
                        icon={faInstagram}
                      />
                    </Link>
                  )}
                  {member.linkedln && (
                    <Link to={member.linkedln}>
                      <FontAwesomeIcon
                        className="team-container__teamSocialIcon"
                        icon={faLinkedin}
                      />
                    </Link>
                  )}
                  {member.tweeter && (
                    <Link to={member.tweeter}>
                      <FontAwesomeIcon
                        className="team-container__teamSocialIcon"
                        icon={faTwitter}
                      />
                    </Link>
                  )}
                </div>
              ) : null}
              <img src={member.image} alt="" />
            </div>

            <div className="team-container__profile-details">
              <p className="team-container__name">{member.fullname}</p>
              <p className="team-container__job">{member.position}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
