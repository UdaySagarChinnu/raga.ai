import React, { useState, useRef } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Overlay from "react-bootstrap/Overlay";
import Table from "react-bootstrap/Table";
import { WarningFilled, PlusCircleOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import CircularProgressBar from "../../../circularprogressbar/CircularProgressBar";
import PerformanceChart from '../../../performancechart/PerformanceChart';

function IssueMessage() {
  return (
    <>
      <Row>
        <Col>
          <Row>
            <Col
              xs={12}
              sm={12}
              md={6}
              style={{ height: "200px", overflow: "auto", paddingTop: "20px" }}
            >
              <Row>
                <Col xs={12} sm={12} md={3} style={{ textAlign: "center" }}>
                  <div className="danImg"
                    style={{
                      
                      paddingLeft: "100px",
                      marginTop: "30px",
                    }}
                  >
                    <WarningFilled
                      style={{
                        fontSize: "48px",
                        color: "#BF1F09",
                        textAlign: "center",
                      }}
                    />
                    <h6>
                      <a href="#">Rules</a>
                    </h6>
                  </div>
                </Col>
                <Col xs={12} sm={12} md={8}>
                  <h6>
                    1) The False Positive is higher than 40% in the following
                    usecases
                  </h6>
                  <Row>
                    <Col md={6}>
                      <p>Configuration 1</p>
                      <p>Configuration 2</p>
                    </Col>
                    <Col md={6} style={{ textAlign: "right" }}>
                      <PlusCircleOutlined style={{ fontSize: "20px" }} />
                    </Col>
                  </Row>
                  <h6>
                    2) The False Negative is higher than 40% in the following
                    usecases
                  </h6>
                  <Row>
                    <Col md={6}>
                      <p>Configuration 1</p>
                      <p>Configuration 2</p>
                    </Col>
                    <Col md={6} style={{ textAlign: "right" }}>
                      <PlusCircleOutlined style={{ fontSize: "20px" }} />
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col
              xs={12}
              sm={12}
              md={5}
              style={{ height: "200px", overflow: "auto", paddingTop: "20px" }}
            >
              <Row>
                <Col xs={12} sm={12} md={2}>
                  <div className="danImg"
                    style={{
                      
                      paddingLeft: "30px",
                      marginTop: "30px",
                    }}
                  >
                    <WarningFilled
                      style={{ fontSize: "48px", color: "#D09905" }}
                    />
                    <h6>
                      <a href="#">Rules</a>
                    </h6>
                  </div>
                </Col>
                <Col xs={12} sm={12} md={10}>
                  <h6>
                    1) The False Positive is higher than 40% in the following
                    usecases
                  </h6>
                  <Row>
                    <Col md={6}>
                      <p>Configuration 1</p>
                      <p>Configuration 2</p>
                    </Col>
                    <Col md={4} style={{ textAlign: "right" }}>
                      <PlusCircleOutlined style={{ fontSize: "20px" }} />
                    </Col>
                  </Row>
                  <h6>
                    2) The False Negative is higher than 40% in the following
                    usecases
                  </h6>
                  <Row>
                    <Col md={6}>
                      <p>Configuration 1</p>
                      <p>Configuration 2</p>
                    </Col>
                    <Col md={4} style={{ textAlign: "right" }}>
                      <PlusCircleOutlined style={{ fontSize: "20px" }} />
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col>
              <Row className="mt-5">
                <Col xs={12} sm={12} md={1}></Col>
                <Col xs={12} sm={12} md={3}>
                  <Form.Select aria-label="Default select example">
                    <option>Issue Configuration</option>
                    <option value="1">New</option>
                    <option value="2">View1</option>
                    <option value="3">View2</option>
                    <option value="4">View3</option>
                  </Form.Select>
                </Col>
                <Col xs={12} sm={12} md={3}>
                  <Form.Select aria-label="Default select example">
                    <option>Tag/MetaData for Time of the Day</option>
                    <option value="1">New</option>
                    <option value="2">View1</option>
                    <option value="3">View2</option>
                    <option value="4">View3</option>
                  </Form.Select>
                </Col>
                <Col xs={12} sm={12} md={3}>
                  <Form.Select aria-label="Default select example">
                    <option>Tag/MetaData: Weather</option>
                    <option value="1">New</option>
                    <option value="2">View1</option>
                    <option value="3">View2</option>
                    <option value="4">View3</option>
                  </Form.Select>
                </Col>
              </Row>

              <Row className="mt-5">
                <Col xs={12} sm={12} md={1}></Col>
                <Col xs={12} sm={12} md={2}>
                  <Card style={{ width: "85%" }}>
                    <Card.Body>
                      <Card.Text>
                      <div  style={{height:'120px'}}>
                        <h2>9</h2>
                        <p>Number of classes</p>
                        </div>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={12} sm={12} md={2}>
                  <Card style={{ width: "85%" }}>
                    <Card.Body>
                      <Card.Text>
                      <div style={{height:'120px'}}>
                      <h2>1</h2>
                        <p>Number of frames</p>
                        </div>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={12} sm={12} md={2}>
                  <Card style={{ width: "85%"}}>
                    <Card.Body>
                      <Card.Text>
                      <div style={{height:'120px'}}>
                      <h2>64,714</h2>
                        <p>Number of dettections</p>
                        </div>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={12} sm={12} md={2}>
                  <Card style={{ width: "85%"}}>
                    <Card.Body>
                      <Card.Text>
                      <div style={{height:'120px'}}>
                      <h2>1</h2>
                        <p>Number of instance</p>
                        </div>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={12} sm={12} md={2}>
                  <Card >
                    <Card.Body>
                      <Card.Text>
                        <div style={{height:'120px'}}>
                        <CircularProgressBar/>
                        </div>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={12} sm={12} md={1}></Col>
              </Row>

              <Row className="mb-3 mt-3">
                  <Col md={6}></Col>
                  <Col md={5} style={{border:'1px solid lightgrey',borderRadius:'5px'}}>
                      <h5>Classifier Performance</h5>
                      <PerformanceChart/>
                  </Col>
              </Row>
              
              
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}

export default IssueMessage;
