import { Row, Col } from "react-bootstrap";
import Head from "next/head";
import { convertedImgUrl } from "../utils";
import constant from "../constant";
import "./style.styl";

const PREFIX_CLASS = "top-bar";

export default function TopBar() {
  function _handleClickContactInfo() {
    let a = document.createElement("a");
    a.href = `Tel:${constant.tel}`;
    a.click();
  }
  return (
    <>
      <Head>
        <title>{constant.corpName}資產管理有限公司</title>
        <link
          rel="shortcut icon"
          href={convertedImgUrl("/images/favicon_1.ico")}
        />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.14.0/css/all.css"
          integrity="sha384-HzLeBuhoNPvSl5KYnjx0BT+WB0QEEqLprO+NBkkk5gbc67FTaL7XIGa2w1L0Xbgc"
          crossOrigin="anonymous"
        />
      </Head>
      <Row className={PREFIX_CLASS}>
        <Col xs="4" sm="4" md="4"></Col>
        <Col className="logo" xs="12" sm="12" md="12" lg="4">
          <div>
            <img src={convertedImgUrl("/images/logo.png")} />
            <p>{constant.corpName}資產公司</p>
          </div>
        </Col>
        <Col xs="4" sm="4" md="4" className="contact-info">
          <div onClick={_handleClickContactInfo}>
            聯絡專線
            <br />
            {constant.tel}
          </div>
        </Col>
      </Row>
    </>
  );
}
