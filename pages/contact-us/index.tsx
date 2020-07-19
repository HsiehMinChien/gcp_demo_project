import { Row, Col } from "react-bootstrap";
import PageContainer from "../../components/page-container";
import ContactUsAndAboutMeCommonContent from "../../components/contact-us-and-about-me-common-content";
import Icon from "../../components/icon";
import constant from "../../components/constant";
import { convertedImgUrl } from "../../components/utils";
import "./style.styl";

const PREFIX_CLASS = "contact-us-page";
const { fb, line, lineId, instgrame, tel, corpName } = constant;

export default function ContactUs() {
  function _handleClickContactUs(href: string) {
    let a = document.createElement("a");
    a.target = "_blank";
    a.href = href;
    a.click();
  }
  return (
    <PageContainer className={PREFIX_CLASS}>
      <ContactUsAndAboutMeCommonContent type="contact">
        <div className="content">
          <h1>Contact us</h1>
          <div
            className="sub-title"
            onClick={() => _handleClickContactUs(`Tel:${tel}`)}
          >
            服務熱線 {tel}
          </div>
          <Row>
            <Col xs="12" lg="9" className="links">
              <Row>
                <Col xs="12" lg="4">
                  <div
                    className="link ig"
                    onClick={() => _handleClickContactUs(instgrame)}
                  >
                    <Icon icon={Icon.IconMap.instagram} />
                    <div className="link-description">追蹤{corpName} IG</div>
                  </div>
                </Col>
                <Col xs="12" lg="4">
                  <div
                    className="link line"
                    onClick={() => _handleClickContactUs(line)}
                  >
                    <Icon icon={Icon.IconMap.line} />
                    <div className="link-description">Line 線上諮詢</div>
                  </div>
                </Col>
                <Col xs="12" lg="4">
                  <div
                    className="link fb"
                    onClick={() => _handleClickContactUs(fb)}
                  >
                    <Icon icon={Icon.IconMap.facebook} />
                    <div className="link-description">{corpName}粉絲團</div>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col xs="12" lg="3" className="qr-code-and-id">
              <img src={convertedImgUrl("/images/qr.jpg")} />
              <div className="line-id">ID / {lineId}</div>
            </Col>
          </Row>
        </div>
      </ContactUsAndAboutMeCommonContent>
    </PageContainer>
  );
}
