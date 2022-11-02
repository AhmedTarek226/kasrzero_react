import React from "react";
import './Sidebar.css';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';


function Sidebar(props) {
  return (
    <aside>
      <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
      <Row>
        <Col sm={6}>
          <ListGroup>
            <ListGroup.Item action href="#link1">
              Link 1
            </ListGroup.Item>
            <ListGroup.Item action href="#link2">
              Link 2
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col sm={4}>
          <Tab.Content>
            <Tab.Pane eventKey="#link1">
              <p>link1</p>
            </Tab.Pane>
            <Tab.Pane eventKey="#link2">
            <p>link2</p>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
      {/* <h3 className="border border-primary text-primary rounded-2 border-3">
        Exchanging Offers
      </h3>
      <div 
      className="list-group overflow-auto my-3 border border-start"
      id="offers"
      role={"tablist"}
      >
        <a className="list-group-item list-group-item-action" data-toggle="list" href="#first" role="tab">
          Deal with iphone 13 pro
        </a>
        <a className="list-group-item list-group-item-action" data-toggle="list" href="#second" role="tab">
          Deal with iphone 13 pro 2
        </a><a className="list-group-item list-group-item-action" data-toggle="list" href="#third" role="tab">
          Deal with iphone 13 pro 3
        </a>
      </div>
      <button type="button" className="btn w-100 mb-2 text-white btn-dark">
        Accept this offer
      </button> */}
    </aside>
  );
}

export default Sidebar;
