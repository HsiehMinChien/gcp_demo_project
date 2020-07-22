import { Nav, Navbar } from "react-bootstrap";
import { ReactNode } from "react";
import cx from "classnames";
import TopBar from "../top-bar";
import FootBar from "../footer-bar";
import { convertedImgUrl } from "../utils";
import constant from "../constant";
import "./style.styl";

const PREFIX_CLASS = "page-container";

export default function PageContainer({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cx(PREFIX_CLASS, className)}>
      <TopBar />
      <Navbar expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-center">
            <Nav.Link href="/about">關於我們</Nav.Link>
            <Nav.Link href="/services" eventKey="services">
              服務項目
            </Nav.Link>
            <Nav.Link href="/news" eventKey="news">
              最新消息
            </Nav.Link>
            <Nav.Link href="/contact-us" eventKey="contact-us">
              聯絡我們
            </Nav.Link>
            <Nav className="img-link">
              <Nav.Link href={constant.line} target="_blank">
                <img src={convertedImgUrl("/images/social-line-s.png")} />
              </Nav.Link>
              <Nav.Link href={constant.fb} target="_blank">
                <img src={convertedImgUrl("/images/social-fb-s.png")} />
              </Nav.Link>
              <Nav.Link href={constant.instgrame} target="_blank">
                <img src={convertedImgUrl("/images/social-ig-s.png")} />
              </Nav.Link>
            </Nav>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {children}
      <FootBar />
    </div>
  );
}
