import styles from "./Links.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faSpotify,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Links = (props) => {
  const socialLinkCode = props.links.map((link) => {
    let icon;
    switch (link.type) {
      case "fb":
        icon = <FontAwesomeIcon icon={faFacebook} />;
        break;
      case "ig":
        icon = <FontAwesomeIcon icon={faInstagram} />;
        break;
      case "sp":
        icon = <FontAwesomeIcon icon={faSpotify} />;
        break;
      case "yt":
        icon = <FontAwesomeIcon icon={faYoutube} />;
        break;
      default:
        icon = <FontAwesomeIcon icon={faEnvelope} />;
    }
    return (
      <div className={styles["links-icon"]}  key={link.id}>
        <a href={link.link} target="_blank" rel="noreferrer">
          {icon}
        </a>
      </div>
    );
  });

  return <div className={styles.links}>{socialLinkCode}</div>;
};

export default Links;
