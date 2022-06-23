import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Contact.css";

function Contact() {
  return (
    <div>
      <p>
        <FontAwesomeIcon icon="fa-solid fa-location-dot" /> Brooklyn, NY
      </p>
      <p>
        <FontAwesomeIcon icon="fa-brands fa-bandcamp" />{" "}
        <a href="https://taconogate.bandcamp.com/releases" className="link">
          https://taconogate.bandcamp.com/releases
        </a>
      </p>
      <p>
        <FontAwesomeIcon icon="fa-brands fa-instagram" />{" "}
        <a href="https://www.instagram.com/tacono.gate/" className="link">
          https://www.instagram.com/tacono.gate/
        </a>
      </p>
      <p>
        <FontAwesomeIcon icon="fa-brands fa-facebook-f" />{" "}
        <a href="https://www.facebook.com/taconogate/" className="link">
          https://www.facebook.com/taconogate/
        </a>
      </p>
      <p>
        <FontAwesomeIcon icon="fa-solid fa-envelope" /> taconogate@gmail.com
      </p>
    </div>
  );
}

export default Contact;
