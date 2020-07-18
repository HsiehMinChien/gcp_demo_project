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
        <title>ＯＯ資產管理有限公</title>
        <link
          rel="shortcut icon"
          href={convertedImgUrl("/images/favicon.ico")}
        />
      </Head>
      <Row className={PREFIX_CLASS}>
        <Col xs="4" sm="4" md="4"></Col>
        <Col className="logo" xs="12" sm="12" md="4">
          <a href="/">
            <img src={convertedImgUrl("/images/logo.jpg")} />
          </a>
        </Col>
        <Col xs="4" sm="4" md="4" className="contact-info">
          <div onClick={_handleClickContactInfo}>
            聯絡專線
            <br />
            02-34567890
          </div>
        </Col>
      </Row>
    </>
  );
}
