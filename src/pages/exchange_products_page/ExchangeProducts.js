import React from "react";
import "./ExchangeProducts.css";
import Sidebar from "./components/Sidebar";
import ProductCard from "./components/ProductCard";
import "./components/Sidebar.css";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import { Container } from "react-bootstrap";

function ExchangeProducts(props) {
  return (
    <Container fluid>
      <Row className="container-fluid px-0 px-0 py-3 d-flex my-4">
        <Col>
          <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
            <Row>
              <Container style={{margin:0, width: "29%" }}>
                <h3 className="fs-5 text-center py-4 mb-3 border border-primary text-primary rounded-2 border-2">
                  Exchanging Offers
                </h3>
                <Container
                  className="overflow-auto w-100 px-0 rounded"
                  style={{ height: "55vh" }}
                >
                  <ListGroup
                    className="list-group w-100 m-0 p-0"
                    as="ol"
                    numbered
                  >
                    <ListGroup.Item className="px-2" as="li" action href="#link1">
                      Link 1
                    </ListGroup.Item>
                    <ListGroup.Item className="px-2" as="li" action href="#link2">
                      Link 2
                    </ListGroup.Item>
                    <ListGroup.Item className="px-2" as="li" action href="#link3">
                      Link 1
                    </ListGroup.Item>
                    <ListGroup.Item className="px-2" as="li" action href="#link2">
                      Link 2
                    </ListGroup.Item>
                    <ListGroup.Item className="px-2" as="li" action href="#link1">
                      Link 1
                    </ListGroup.Item>
                    <ListGroup.Item className="px-2" as="li" action href="#link2">
                      Link 2
                    </ListGroup.Item>
                    <ListGroup.Item className="px-2" as="li" action href="#link1">
                      Link 1
                    </ListGroup.Item>
                    <ListGroup.Item className="px-2" as="li" action href="#link2">
                      Link 2
                    </ListGroup.Item>
                    <ListGroup.Item className="px-2" as="li" action href="#link1">
                      Link 1
                    </ListGroup.Item>
                    <ListGroup.Item className="px-2" as="li" action href="#link2">
                      Link 2
                    </ListGroup.Item>
                    <ListGroup.Item className="px-2" as="li" action href="#link1">
                      Link 1
                    </ListGroup.Item>
                    <ListGroup.Item className="px-2" as="li" action href="#link2">
                      Link 2
                    </ListGroup.Item>
                    <ListGroup.Item className="px-2" as="li" action href="#link2">
                      Link 2
                    </ListGroup.Item>
                    <ListGroup.Item as="li" action href="#link2">
                      Link 2
                    </ListGroup.Item>
                    <ListGroup.Item as="li" action href="#link2">
                      Link 2
                    </ListGroup.Item>
                    <ListGroup.Item as="li" action href="#link2">
                      Link 2
                    </ListGroup.Item>
                    <ListGroup.Item as="li" action href="#link2">
                      Link 2
                    </ListGroup.Item>
                    <ListGroup.Item as="li" action href="#link2">
                      Link 2
                    </ListGroup.Item>
                  </ListGroup>
                </Container>
                <button
                  type="button"
                  className="btn w-100 my-3 rounded-2 text-white btn-dark"
                >
                  Accept this offer
                </button>
              </Container>
              <Col>
                <Tab.Content>
                  <Tab.Pane eventKey="#link1">
                    <ProductCard />
                  </Tab.Pane>
                  <Tab.Pane eventKey="#link2">
                    <p>link2</p>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Col>
        <Col sm={5}>
          <ProductCard />
        </Col>
      </Row>
    </Container>
  );
}

export default ExchangeProducts;
