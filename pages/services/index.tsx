import PageContainer from "../../components/page-container";
import { Tab, Row, Col, Nav } from "react-bootstrap";

export default function Services() {
  return (
    <PageContainer>
      <div>Services</div>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="first">Tab 1</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Tab 2</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="first">123</Tab.Pane>
              <Tab.Pane eventKey="second">456</Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </PageContainer>
  );
}
