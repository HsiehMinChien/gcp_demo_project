import { convertedImgUrl } from "../utils";
import Icon from "../../components/icon";
import constant from "../../components/constant";
import "./style.styl";

const PREFIX_CLASS = "footer-bar";

export default function FooterBar() {
  return (
    <div className={PREFIX_CLASS}>
      <div className="up-bar" />
      <div className="img">
        <img src={convertedImgUrl("/images/logo.png")} />
        <div>{constant.corpName}資產管理有限公司</div>
      </div>
      <div className="copy-right">© All rights reserved.</div>
      <div className="tel">{constant.tel}</div>
      <div className="location">
        <a href="/">新北市ＯＯ區ＯＯ路Ｏ段 XXX 號 XX 樓</a>
        <div className="icon">
          <Icon icon={Icon.IconMap.map} />
        </div>
      </div>
    </div>
  );
}
