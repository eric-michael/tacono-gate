import "./Main.css";
import image from "../images/image0.jpg";

function Main() {
  return (
    <div className="main">
      <div className="main-image-container">
        <img src={image} alt="Tacono Gate" className="main-image" />
      </div>

      <div className="main-playlist">
        <iframe
          title="playlist"
          src="https://open.spotify.com/embed/artist/2R72laeotc3lBpfYh4sLAz?utm_source=generator"
          width="100%"
          height="380"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        ></iframe>
      </div>
    </div>
  );
}

export default Main;
