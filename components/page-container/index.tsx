import { Nav } from "react-bootstrap";
import TopBar from "../top-bar";
import FootBar from "../footer-bar";
import { ReactNode } from "react";

const PREFIX_CLASS = "page-container";

export default function PageContainer({ children }: { children: ReactNode }) {
  return (
    <div className={PREFIX_CLASS}>
      <TopBar />
      <Nav activeKey="/">
        <Nav.Item>
          <Nav.Link href="/about">About</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/services" eventKey="services">
            Services
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/news" eventKey="news">
            News
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/contact-us" eventKey="contact-us">
            Contact Us
          </Nav.Link>
        </Nav.Item>
      </Nav>
      {children}
      <FootBar />
    </div>
  );
}
