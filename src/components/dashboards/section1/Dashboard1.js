import React, { useState, useRef } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Overlay from "react-bootstrap/Overlay";
import Table from "react-bootstrap/Table";
import CircularProgressBar from '../../circularprogressbar/CircularProgressBar';
import Plot from '../../plot/Plot';
import Drift from '../../drift/Drift.js';

function Dashboard1() {
  const [show, setShow] = useState(false);
  const target = useRef(null);
  
  return (
    <>
      <Row>
        <Col>
          <Row>
           
            <Col xs={12} sm={12} md={12}>
              <Row>
              <Col xs={12} sm={12} md={1}></Col>
                <Col xs={12} sm={12} md={2}>
                  <Form.Select aria-label="Default select example">
                    <option>View</option>
                    <option value="1">New</option>
                    <option value="2">View1</option>
                    <option value="3">View2</option>
                    <option value="4">View3</option>
                  </Form.Select>
                </Col>
                <Col xs={12} sm={12} md={2}>
                  <Button variant="secondary">Save My View</Button>
                </Col>
                <Col xs={12} sm={12} md={4}>
                  <Form.Select aria-label="Default select example">
                    <option>Quick Select</option>
                    <option value="1">Last 1 Hr</option>
                    <option value="2">Today</option>
                    <option value="3">Last 7 days</option>
                    <option value="4">Last 30 days</option>
                  </Form.Select>
                </Col>
                <Col xs={12} sm={12} md={1}></Col>
                <Col xs={12} sm={12} md={2}>
                  <Button
                    variant="secondary"
                    className="justify-content-center"
                    style={{
                      width: "80px",
                    }}
                    ref={target}
                    onClick={() => setShow(!show)}
                  >
                    search
                  </Button>
                  <Overlay
                    target={target.current}
                    show={show}
                    placement="right"
                  >
                    {({
                      placement,
                      arrowProps,
                      show: _show,
                      popper,
                      ...props
                    }) => (
                      <Form.Control
                        id="inputPassword5"
                        {...props}
                        style={{
                          width: "200px",
                          padding: "2px 10px",
                          borderRadius: 3,
                          ...props.style,
                        }}
                      />
                    )}
                  </Overlay>
                  <i class="bi bi-funnel-fill"></i>
                </Col>
              </Row>
              <Row>
              <Col xs={12} sm={12} md={1}></Col>
                <Col xs={12} sm={12} md={2}></Col>
                <Col xs={12} sm={12} md={2}></Col>
                <Col xs={12} sm={12} md={2}>
                  <Form.Label className="mt-2">Start Time Frame</Form.Label>
                  <Form.Control type="date" placeholder="Enter email" />
                </Col>
                <Col xs={12} sm={12} md={2}>
                  <Form.Label className="mt-2">End Time Frame</Form.Label>
                  <Form.Control type="date" placeholder="Enter email" />
                </Col>
                <Col xs={12} sm={12} md={1}></Col>
                <Col xs={12} sm={12} md={2}>
                  <Form.Check
                    className="mt-2"
                    type="checkbox"
                    id="disable"
                    label="Disable Auto Refresh"
                  />
                </Col>
              </Row>
              <Row style={{marginTop:'60px'}}>
              <Col xs={12} sm={12} md={1}></Col>
                <Col xs={12} sm={12} md={7}>
                  <Table responsive style={{textAlign:'center'}}>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Number of Instances</th>
                        <th>Overall Health</th>
                        <th>Drift</th>
                        <th>Need Retraining</th>
                        <th>Confidence Score</th>
                        <th>Inference Time</th>
                        <th>Up Time/Day</th>
                        <th>Date Drift</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr >
                        <td style={{height:'80px'}}>Model-1</td>
                        <td style={{height:'80px'}}>99.86</td>
                        <td></td>
                        <td style={{height:'80px',width:'80px'}}><Drift/></td>
                        <td></td>
                        <td style={{height:'80px'}}><Plot /></td>
                        <td style={{height:'80px'}}><Plot /></td>
                        <td style={{height:'80px'}}><Plot /></td>
                        <td style={{height:'80px'}}><Plot /></td>
                      </tr>
                      <tr >
                        <td style={{height:'80px'}}>Model-2</td>
                        <td style={{height:'80px'}}>99.86</td>
                        <td></td>
                        <td style={{height:'80px',width:'80px'}}><Drift/></td>
                        <td></td>
                        <td style={{height:'80px'}}><Plot /></td>
                        <td style={{height:'80px'}}><Plot /></td>
                        <td style={{height:'80px'}}><Plot /></td>
                        <td style={{height:'80px'}}><Plot /></td>
                      </tr>
                      <tr >
                        <td style={{height:'80px'}}>Model-3</td>
                        <td style={{height:'80px'}}>99.86</td>
                        <td></td>
                        <td style={{height:'80px',width:'80px'}}><Drift/></td>
                        <td></td>
                        <td style={{height:'80px'}}><Plot /></td>
                        <td style={{height:'80px'}}><Plot /></td>
                        <td style={{height:'80px'}}><Plot /></td>
                        <td style={{height:'80px'}}><Plot /></td>
                      </tr>
                      <tr >
                        <td style={{height:'80px'}}>Model-4</td>
                        <td style={{height:'80px'}}>99.86</td>
                        <td></td>
                        <td style={{height:'80px',width:'80px'}}><Drift/></td>
                        <td></td>
                        <td style={{height:'80px'}}><Plot /></td>
                        <td style={{height:'80px'}}><Plot /></td>
                        <td style={{height:'80px'}}><Plot /></td>
                        <td style={{height:'80px'}}><Plot /></td>
                      </tr>
                      <tr >
                        <td style={{height:'80px'}}>Model-5</td>
                        <td style={{height:'80px'}}>99.86</td>
                        <td></td>
                        <td style={{height:'80px',width:'80px'}}><Drift/></td>
                        <td></td>
                        <td style={{height:'80px'}}><Plot /></td>
                        <td style={{height:'80px'}}><Plot /></td>
                        <td style={{height:'80px'}}><Plot /></td>
                        <td style={{height:'80px'}}><Plot /></td>
                      </tr>
                      <tr >
                        <td style={{height:'80px'}}>Model-6</td>
                        <td style={{height:'80px'}}>99.86</td>
                        <td></td>
                        <td style={{height:'80px',width:'80px'}}><Drift/></td>
                        <td></td>
                        <td style={{height:'80px'}}><Plot /></td>
                        <td style={{height:'80px'}}><Plot /></td>
                        <td style={{height:'80px'}}><Plot /></td>
                        <td style={{height:'80px'}}><Plot /></td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
                <Col className="p-5" xs={12} sm={12} md={3}>
                        <CircularProgressBar />
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}

export default Dashboard1;
