import { Nav, Navbar } from "react-bootstrap";
import TopBar from "../top-bar";
import FootBar from "../footer-bar";
import { ReactNode } from "react";
import "./style.styl";

const PREFIX_CLASS = "page-container";

export default function PageContainer({ children }: { children: ReactNode }) {
  return (
    <div className={PREFIX_CLASS}>
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
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {children}
      <FootBar />
    </div>
  );
}
