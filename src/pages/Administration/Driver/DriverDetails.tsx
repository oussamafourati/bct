import React, { useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Dropdown,
  Form,
  Image,
  Nav,
  Row,
  Tab,
  Table,
} from "react-bootstrap";
import { useLocation } from "react-router-dom";
import profilebgImg from "../../../assets/images/profile-bg.jpg";
import companyImg3 from "../../../assets/images/companies/img-3.png";

import avatar1 from "../../../assets/images/users/avatar-1.jpg";

import productsImg1 from "../../../assets/images/products/img-1.png";
import productsImg4 from "../../../assets/images/products/img-4.png";
import productsImg5 from "../../../assets/images/products/img-5.png";
import productsImg6 from "../../../assets/images/products/img-6.png";
import productsImg7 from "../../../assets/images/products/img-7.png";
import productsImg8 from "../../../assets/images/products/img-8.png";
import productsImg9 from "../../../assets/images/products/img-9.png";
import productsImg11 from "../../../assets/images/products/img-11.png";
import productsImg14 from "../../../assets/images/products/img-14.png";
import productsImg15 from "../../../assets/images/products/img-15.png";
import { Link } from "react-router-dom";

const bookmarkProduct = (e: any) => {
  const ele = e.target.closest("button");
  if (ele.classList.contains("active")) {
    ele.classList.remove("active");
  } else {
    ele.classList.add("active");
  }
};

const DriverDetails = () => {
  document.title = "Driver Details | Bouden Coach Travel";
  const LocationDriver = useLocation();

  const [activeTab, setactiveTab] = useState<number>(0);
  const [activeArrowTab, setactiveArrowTab] = useState(1);

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          <Row className="d-flex align-items-center">
            <Col xxl={12}>
              <Card>
                <Card.Header>
                  <h4 className="card-title mb-0">
                    {LocationDriver.state.brandName}
                  </h4>
                </Card.Header>
                <Card.Body className="form-steps">
                  <Form action="#">
                    <Tab.Container activeKey={activeArrowTab}>
                      <div className="text-center pt-3 pb-4 mb-1">
                        <Image src={avatar1} alt="" height="22" />
                      </div>
                      <div className="step-arrow-nav mb-4">
                        <Nav
                          as="ul"
                          variant="pills"
                          className="custom-nav nav-justified"
                        >
                          <Nav.Item as="li">
                            <Nav.Link
                              as="button"
                              eventKey="1"
                              onClick={() => setactiveArrowTab(1)}
                            >
                              Profile
                            </Nav.Link>
                          </Nav.Item>
                          <Nav.Item as="li">
                            <Nav.Link
                              as="button"
                              eventKey="2"
                              onClick={() => setactiveArrowTab(2)}
                            >
                              Document
                            </Nav.Link>
                          </Nav.Item>
                          <Nav.Item as="li">
                            <Nav.Link
                              as="button"
                              eventKey="3"
                              onClick={() => setactiveArrowTab(3)}
                            >
                              Payment
                            </Nav.Link>
                          </Nav.Item>
                          <Nav.Item as="li">
                            <Nav.Link
                              as="button"
                              eventKey="4"
                              onClick={() => setactiveArrowTab(4)}
                            >
                              Bank Details
                            </Nav.Link>
                          </Nav.Item>
                        </Nav>
                      </div>

                      <Tab.Content>
                        <Tab.Pane eventKey="1">
                          <Row>
                            <Col lg={4}>
                              <div>
                                <table>
                                  <tr>
                                    <td>Ref</td>
                                    <td>
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="steparrow-gen-info-email-input"
                                        placeholder="Enter Email"
                                      />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Username</td>
                                    <td>
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="steparrow-gen-info-email-input"
                                        placeholder="Enter Email"
                                      />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Password</td>
                                    <td>
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="steparrow-gen-info-email-input"
                                        placeholder="Enter Email"
                                      />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Email</td>
                                    <td>
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="steparrow-gen-info-email-input"
                                        placeholder="Enter Email"
                                      />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Driver Image</td>
                                    <td>
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="steparrow-gen-info-email-input"
                                        placeholder="Enter Email"
                                      />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Title</td>
                                    <td>
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="steparrow-gen-info-email-input"
                                        placeholder="Enter Email"
                                      />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>First Name</td>
                                    <td>
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="steparrow-gen-info-email-input"
                                        placeholder="Enter Email"
                                      />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Surname</td>
                                    <td>
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="steparrow-gen-info-email-input"
                                        placeholder="Enter Email"
                                      />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Date of birth</td>
                                    <td>
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="steparrow-gen-info-email-input"
                                        placeholder="Enter Email"
                                      />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Driver Type</td>
                                    <td>
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="steparrow-gen-info-email-input"
                                        placeholder="Enter Email"
                                      />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Days Available</td>
                                    <td>
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="steparrow-gen-info-email-input"
                                        placeholder="Enter Email"
                                      />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Time Available</td>
                                    <td>
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="steparrow-gen-info-email-input"
                                        placeholder="Enter Email"
                                      />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Date Joined</td>
                                    <td>
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="steparrow-gen-info-email-input"
                                        placeholder="Enter Email"
                                      />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Enabled</td>
                                    <td>
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="steparrow-gen-info-email-input"
                                        placeholder="Enter Email"
                                      />
                                    </td>
                                  </tr>
                                </table>
                              </div>
                            </Col>
                            <Col lg={6}>
                              <div>
                                <table>
                                  <tr>
                                    <td>Ref</td>
                                    <td>
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="steparrow-gen-info-email-input"
                                        placeholder="Enter Email"
                                      />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Username</td>
                                    <td>
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="steparrow-gen-info-email-input"
                                        placeholder="Enter Email"
                                      />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Password</td>
                                    <td>
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="steparrow-gen-info-email-input"
                                        placeholder="Enter Email"
                                      />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Email</td>
                                    <td>
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="steparrow-gen-info-email-input"
                                        placeholder="Enter Email"
                                      />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Driver Image</td>
                                    <td>
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="steparrow-gen-info-email-input"
                                        placeholder="Enter Email"
                                      />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Title</td>
                                    <td>
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="steparrow-gen-info-email-input"
                                        placeholder="Enter Email"
                                      />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>First Name</td>
                                    <td>
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="steparrow-gen-info-email-input"
                                        placeholder="Enter Email"
                                      />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Surname</td>
                                    <td>
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="steparrow-gen-info-email-input"
                                        placeholder="Enter Email"
                                      />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Date of birth</td>
                                    <td>
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="steparrow-gen-info-email-input"
                                        placeholder="Enter Email"
                                      />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Driver Type</td>
                                    <td>
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="steparrow-gen-info-email-input"
                                        placeholder="Enter Email"
                                      />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Days Available</td>
                                    <td>
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="steparrow-gen-info-email-input"
                                        placeholder="Enter Email"
                                      />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Time Available</td>
                                    <td>
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="steparrow-gen-info-email-input"
                                        placeholder="Enter Email"
                                      />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Date Joined</td>
                                    <td>
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="steparrow-gen-info-email-input"
                                        placeholder="Enter Email"
                                      />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Enabled</td>
                                    <td>
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="steparrow-gen-info-email-input"
                                        placeholder="Enter Email"
                                      />
                                    </td>
                                  </tr>
                                </table>
                              </div>
                            </Col>
                          </Row>
                        </Tab.Pane>

                        <Tab.Pane eventKey="2">
                          <div>
                            <div className="mb-3">
                              <label htmlFor="formFile" className="form-label">
                                Upload Image
                              </label>
                              <input
                                className="form-control"
                                type="file"
                                id="formFile"
                              />
                            </div>
                            <div>
                              <label
                                className="form-label"
                                htmlFor="des-info-description-input"
                              >
                                Description
                              </label>
                              <textarea
                                className="form-control"
                                placeholder="Enter Description"
                                id="des-info-description-input"
                                rows={3}
                              ></textarea>
                            </div>
                          </div>
                          <div className="d-flex align-items-start gap-3 mt-4">
                            <button
                              type="button"
                              className="btn btn-light btn-label previestab"
                              onClick={() => setactiveArrowTab(1)}
                            >
                              <i className="ri-arrow-left-line label-icon align-middle fs-16 me-2"></i>{" "}
                              Back to General
                            </button>
                            <button
                              type="button"
                              className="btn btn-success btn-label right ms-auto nexttab nexttab"
                              onClick={() => setactiveArrowTab(3)}
                            >
                              <i className="ri-arrow-right-line label-icon align-middle fs-16 ms-2"></i>
                              Submit
                            </button>
                          </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="3">
                          <div className="text-center">
                            <div className="avatar-md mt-5 mb-4 mx-auto">
                              <div className="avatar-title bg-light text-success display-4 rounded-circle">
                                <i className="ri-checkbox-circle-fill"></i>
                              </div>
                            </div>
                            <h5>Well Done !</h5>
                            <p className="text-muted">
                              You have Successfully Signed Up
                            </p>
                          </div>
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default DriverDetails;
