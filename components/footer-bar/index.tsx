import { convertedImgUrl } from "../utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import "./style.styl";

const PREFIX_CLASS = "footer-bar";

export default function FooterBar() {
  return (
    <div className={PREFIX_CLASS}>
      <div className="up-bar" />
      <div className="img">
        <img src={convertedImgUrl("/images/_footer_img.jpg")} />
      </div>
      <div className="copy-right">© All rights reserved.</div>
      <div className="tel">02-34567890</div>
      <div className="location">
        <a href="/">新北市板橋區雙十路二段 209 號 21 樓</a>
        <div className="icon">
          <FontAwesomeIcon icon={faMapMarkerAlt} />
        </div>
      </div>
    </div>
  );
}
