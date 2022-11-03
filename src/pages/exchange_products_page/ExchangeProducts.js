import React, { useEffect } from "react";
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
  const offers = ["6362899d3dcf675a3e09b2f4", "636289ee3dcf675a3e09b2f9"];
  const productId = "6362894c3dcf675a3e09b2f0";

  useEffect(() => {}, []);
  return (
    <Container fluid>
      <Row className="container-fluid px-0 px-0 py-3 d-flex my-4">
        <Col>
          <Tab.Container id="list-group-tabs-example" defaultActiveKey={"#"+offers[0]}>
            <Row>
              <Container style={{ margin: 0, width: "18vw" }}>
                <h3 className="fs-5 text-center py-4 mb-3 border border-primary text-primary rounded-2 border-2">
                  Exchanging Offers
                </h3>
                <Container
                  className="overflow-auto w-100 px-0 rounded"
                  style={{ maxHeight: "55vh" }}
                >
                  <ListGroup
                    className="list-group w-100 m-0 p-0"
                    as="ol"
                    numbered
                  >
                    {offers.map((offer, index) => (
                      <ListGroup.Item
                        className="px-2"
                        style={{ cursor: "pointer" }}
                        as="li"
                        action
                        
                        href={"#" + offer}
                      >
                        {offer}
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                </Container>
                <button
                  type="button"
                  className="btn w-100 my-3 rounded-2 text-white btn-dark"
                >
                  Accept this offer
                </button>
              </Container>
              <Container style={{ width: "39.588vw" }}>
                <Tab.Content>
                  {offers.map((offer) => (
                    <Tab.Pane eventKey={"#" + offer}>
                      <ProductCard productId={offer} />
                    </Tab.Pane>
                  ))}
                </Tab.Content>
              </Container>
            </Row>
          </Tab.Container>
        </Col>
        <Container style={{ width: "39.588vw" }}>
          <ProductCard productId={productId} />
        </Container>
      </Row>
    </Container>
  );
}

export default ExchangeProducts;
