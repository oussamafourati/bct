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
import Flatpickr from "react-flatpickr";
import avatar1 from "../../../assets/images/users/avatar-1.jpg";
import SimpleBar from "simplebar-react";
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
import country from "Common/country";

const bookmarkProduct = (e: any) => {
  const ele = e.target.closest("button");
  if (ele.classList.contains("active")) {
    ele.classList.remove("active");
  } else {
    ele.classList.add("active");
  }
};

const TeamDetails = () => {
  document.title = "Team Details | Bouden Coach Travel";
  const LocationTeam = useLocation();

  const [activeVerticalTab, setactiveVerticalTab] = useState<number>(1);
  const [seletedCountry, setseletedCountry] = useState("");
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          <Col xl={12}>
            <Card>
              <div className="d-flex align-items-center p-2">
                <div className="flex-grow-1">
                  <h5 className="card-title mb-1">
                    {LocationTeam.state.brandName}
                  </h5>
                </div>
                <div className="hstack gap-2 justify-content-end">
                  <button
                    type="button"
                    className="btn btn-info btn-label btn-sm"
                  >
                    <i className="ri-check-fill label-icon align-middle fs-16 me-2"></i>{" "}
                    Apply
                  </button>
                </div>
              </div>
              <hr className="my-2 text-muted" />
              <Card.Body className="form-steps">
                <Form className="vertical-navs-step">
                  <Tab.Container activeKey={activeVerticalTab}>
                    <Row className="gy-5">
                      <Col lg={3}>
                        <Nav
                          as="div"
                          variant="pills"
                          className="nav flex-column custom-nav nav-pills"
                          role="tablist"
                          aria-orientation="vertical"
                        >
                          <Nav.Link
                            as="button"
                            className="nav-link done"
                            eventKey="1"
                            onClick={() => setactiveVerticalTab(1)}
                          >
                            <span className="step-title me-2">
                              <i className="ri-user-line step-icon me-2"></i>{" "}
                            </span>
                            Profile
                          </Nav.Link>
                          <Nav.Link
                            as="button"
                            className={
                              activeVerticalTab > 2
                                ? "nav-link done"
                                : "nav-link"
                            }
                            eventKey="2"
                            onClick={() => setactiveVerticalTab(2)}
                          >
                            <span className="step-title me-2">
                              <i className="ri-file-copy-2-line step-icon me-2"></i>{" "}
                            </span>
                            Document
                          </Nav.Link>
                          <Nav.Link
                            as="button"
                            className={
                              activeVerticalTab > 3
                                ? "nav-link done"
                                : "nav-link"
                            }
                            eventKey="3"
                            onClick={() => setactiveVerticalTab(3)}
                          >
                            <span className="step-title me-2">
                              <i className="ri-briefcase-fill step-icon me-2"></i>{" "}
                            </span>
                            Work
                          </Nav.Link>
                          <Nav.Link
                            as="button"
                            className={
                              activeVerticalTab > 4
                                ? "nav-link done"
                                : "nav-link"
                            }
                            eventKey="4"
                            onClick={() => setactiveVerticalTab(4)}
                          >
                            <span className="step-title me-2">
                              <i className="ri-close-circle-fill step-icon me-2"></i>{" "}
                            </span>
                            Bank Details
                          </Nav.Link>
                        </Nav>
                      </Col>
                      <Col lg={6}>
                        <div className="px-lg-4">
                          <Tab.Content>
                            <Tab.Pane eventKey="1">
                              <div>
                                <h5>Profile</h5>
                              </div>
                              <div>
                                <Row className="g-3">
                                  <Col sm={6}>
                                    <label
                                      htmlFor="firstName"
                                      className="form-label"
                                    >
                                      First name
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="firstName"
                                      placeholder="Enter First Name"
                                      defaultValue=""
                                    />
                                  </Col>

                                  <Col sm={6}>
                                    <label
                                      htmlFor="lastName"
                                      className="form-label"
                                    >
                                      Last name
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="lastName"
                                      placeholder="Enter Last Name"
                                      defaultValue=""
                                    />
                                  </Col>

                                  <div className="col-12">
                                    <label
                                      htmlFor="username"
                                      className="form-label"
                                    >
                                      Address
                                    </label>
                                    <div className="input-group">
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="username"
                                        placeholder="Enter Address"
                                      />
                                    </div>
                                  </div>

                                  <div className="col-12">
                                    <label
                                      htmlFor="email"
                                      className="form-label"
                                    >
                                      Email{" "}
                                    </label>
                                    <input
                                      type="email"
                                      className="form-control"
                                      id="email"
                                      placeholder="Enter Email"
                                    />
                                  </div>
                                  <div className="col-12">
                                    <label
                                      htmlFor="email"
                                      className="form-label"
                                    >
                                      Date of Birth
                                    </label>
                                    <Flatpickr
                                      className="form-control flatpickr-input"
                                      placeholder="Select Date"
                                      options={{
                                        dateFormat: "d M, Y",
                                      }}
                                    />
                                  </div>
                                  <div className="col-12">
                                    <label
                                      htmlFor="email"
                                      className="form-label"
                                    >
                                      Mobile / Phone No.{" "}
                                    </label>
                                    <input
                                      type="email"
                                      className="form-control"
                                      id="email"
                                      placeholder="Enter phone number"
                                    />
                                  </div>
                                  <div className="col-12">
                                    <label
                                      htmlFor="email"
                                      className="form-label"
                                    >
                                      Gender
                                    </label>
                                    <select
                                      className="form-select text-muted"
                                      name="choices-single-default"
                                      id="statusSelect"
                                      required
                                    >
                                      <option value="">Gender</option>
                                      <option value="Male">Male</option>
                                      <option value="Female">Female</option>
                                      <option value="Other">Other</option>
                                    </select>
                                  </div>
                                  <div className="col-12">
                                    <label
                                      htmlFor="email"
                                      className="form-label"
                                    >
                                      Civil Status
                                    </label>
                                    <select
                                      className="form-select text-muted"
                                      name="choices-single-default"
                                      id="statusSelect"
                                      required
                                    >
                                      <option value="">Status</option>
                                      <option value="Married">Married</option>
                                      <option value="Single">Single</option>
                                      <option value="Divorced">Divorced</option>
                                      <option value="Widowed">Widowed</option>
                                    </select>
                                  </div>
                                  <div className="col-12">
                                    <label
                                      htmlFor="email"
                                      className="form-label"
                                    >
                                      Number of Child
                                    </label>
                                    <Form.Control
                                      type="text"
                                      id="supplierName-field"
                                      placeholder="Enter number of childs"
                                      required
                                    />
                                  </div>
                                  <div className="col-12">
                                    <label
                                      htmlFor="email"
                                      className="form-label"
                                    >
                                      Nationality
                                    </label>
                                    <Dropdown>
                                      <Dropdown.Toggle
                                        as="input"
                                        className="form-control rounded-end flag-input form-select"
                                        placeholder="Select country"
                                        readOnly
                                        defaultValue={seletedCountry}
                                      ></Dropdown.Toggle>
                                      <Dropdown.Menu
                                        as="ul"
                                        className="list-unstyled w-100 dropdown-menu-list mb-0"
                                      >
                                        <SimpleBar
                                          style={{ maxHeight: "220px" }}
                                          className="px-3"
                                        >
                                          {(country || []).map(
                                            (item: any, key: number) => (
                                              <Dropdown.Item
                                                as="li"
                                                onClick={() =>
                                                  setseletedCountry(
                                                    item.countryName
                                                  )
                                                }
                                                key={key}
                                                className="dropdown-item d-flex"
                                              >
                                                <div className="flex-shrink-0 me-2">
                                                  <Image
                                                    src={item.flagImg}
                                                    alt="country flag"
                                                    className="options-flagimg"
                                                    height="20"
                                                  />
                                                </div>
                                                <div className="flex-grow-1">
                                                  <div className="d-flex">
                                                    <div className="country-name me-1">
                                                      {item.countryName}
                                                    </div>
                                                    <span className="countrylist-codeno text-muted">
                                                      {item.countryCode}
                                                    </span>
                                                  </div>
                                                </div>
                                              </Dropdown.Item>
                                            )
                                          )}
                                        </SimpleBar>
                                      </Dropdown.Menu>
                                    </Dropdown>
                                  </div>
                                </Row>
                              </div>
                            </Tab.Pane>

                            <Tab.Pane eventKey="2">
                              <div>
                                <h5>Document</h5>
                              </div>

                              <div>
                                <Row className="g-3">
                                  <div>
                                    <label
                                      className="form-label"
                                      htmlFor="des-info-description-input"
                                    >
                                      DQC
                                    </label>
                                    <Form.Control
                                      type="file"
                                      id="supplierName-field"
                                      placeholder="Enter number"
                                      className="text-muted"
                                      required
                                    />
                                  </div>
                                  <div>
                                    <label
                                      className="form-label"
                                      htmlFor="des-info-description-input"
                                    >
                                      DQC Expiry
                                    </label>
                                    <Flatpickr
                                      className="form-control flatpickr-input"
                                      placeholder="Select Date"
                                      options={{
                                        dateFormat: "d M, Y",
                                      }}
                                    />
                                  </div>
                                  <div>
                                    <label
                                      className="form-label"
                                      htmlFor="des-info-description-input"
                                    >
                                      DBS Check
                                    </label>
                                    <Form.Control
                                      type="file"
                                      id="supplierName-field"
                                      placeholder="Enter number"
                                      className="text-muted"
                                      required
                                    />
                                  </div>
                                  <div>
                                    <label
                                      className="form-label"
                                      htmlFor="des-info-description-input"
                                    >
                                      DBS Issue Date
                                    </label>
                                    <Flatpickr
                                      className="form-control flatpickr-input"
                                      placeholder="Select Date"
                                      options={{
                                        dateFormat: "d M, Y",
                                      }}
                                    />
                                  </div>
                                  <div>
                                    <label
                                      className="form-label"
                                      htmlFor="des-info-description-input"
                                    >
                                      DBS badge Date
                                    </label>
                                    <Flatpickr
                                      className="form-control flatpickr-input"
                                      placeholder="Select Date"
                                      options={{
                                        dateFormat: "d M, Y",
                                      }}
                                    />
                                  </div>
                                  <div>
                                    <label
                                      className="form-label"
                                      htmlFor="des-info-description-input"
                                    >
                                      PCV Expiry
                                    </label>
                                    <Flatpickr
                                      className="form-control flatpickr-input"
                                      placeholder="Select Date"
                                      options={{
                                        dateFormat: "d M, Y",
                                      }}
                                    />
                                  </div>
                                  <div>
                                    <label
                                      className="form-label"
                                      htmlFor="des-info-description-input"
                                    >
                                      Contract
                                    </label>
                                    <Form.Control
                                      type="file"
                                      id="supplierName-field"
                                      placeholder="Enter number"
                                      className="text-muted"
                                      required
                                    />
                                  </div>
                                  <div>
                                    <label
                                      className="form-label"
                                      htmlFor="des-info-description-input"
                                    >
                                      Deposit Held
                                    </label>
                                    <Form.Control
                                      type="text"
                                      id="supplierName-field"
                                      placeholder="0.00"
                                      className="text-muted"
                                      required
                                    />
                                  </div>
                                  <div>
                                    <label
                                      className="form-label"
                                      htmlFor="des-info-description-input"
                                    >
                                      Notes
                                    </label>
                                    <textarea
                                      className="form-control"
                                      placeholder="Enter notes"
                                      id="des-info-description-input"
                                      rows={3}
                                    ></textarea>
                                  </div>
                                </Row>
                              </div>
                              <div className="d-flex align-items-start gap-3 mt-4">
                                <Button
                                  type="button"
                                  className="btn btn-light btn-label previestab"
                                  onClick={() => setactiveVerticalTab(1)}
                                >
                                  <i className="ri-arrow-left-line label-icon align-middle fs-16 me-2"></i>{" "}
                                  Back to Profile
                                </Button>
                              </div>
                            </Tab.Pane>

                            <Tab.Pane eventKey="3">
                              <div>
                                <h5>Work</h5>
                              </div>
                              <div>
                                <Row className="gy-3">
                                  <Col md={12}>
                                    <label
                                      htmlFor="cc-name"
                                      className="form-label"
                                    >
                                      Name on card
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="cc-name"
                                      placeholder=""
                                      required
                                    />
                                  </Col>

                                  <Col md={6}>
                                    <label
                                      htmlFor="cc-number"
                                      className="form-label"
                                    >
                                      Joining Date
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="cc-number"
                                      placeholder=""
                                      required
                                    />
                                    <div className="invalid-feedback">
                                      Credit card number is required
                                    </div>
                                  </Col>

                                  <Col md={3}>
                                    <label
                                      htmlFor="cc-expiration"
                                      className="form-label"
                                    >
                                      Access Level
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="cc-expiration"
                                      placeholder=""
                                      required
                                    />
                                  </Col>

                                  <Col md={3}>
                                    <label
                                      htmlFor="cc-cvv"
                                      className="form-label"
                                    >
                                      Contract Type
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="cc-cvv"
                                      placeholder=""
                                      required
                                    />
                                  </Col>
                                </Row>
                                <Row className="gy-3">
                                  <Col md={12}>
                                    <label
                                      htmlFor="cc-name"
                                      className="form-label"
                                    >
                                      Salary
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="cc-name"
                                      placeholder=""
                                      required
                                    />
                                  </Col>

                                  <Col md={6}>
                                    <label
                                      htmlFor="cc-number"
                                      className="form-label"
                                    >
                                      Day Shift
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="cc-number"
                                      placeholder=""
                                      required
                                    />
                                  </Col>

                                  <Col md={3}>
                                    <label
                                      htmlFor="cc-expiration"
                                      className="form-label"
                                    >
                                      Weekend Shift
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="cc-expiration"
                                      placeholder=""
                                      required
                                    />
                                  </Col>

                                  <Col md={3}>
                                    <label
                                      htmlFor="cc-cvv"
                                      className="form-label"
                                    >
                                      Holiday Shift
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="cc-cvv"
                                      placeholder=""
                                      required
                                    />
                                  </Col>
                                </Row>
                              </div>

                              <div className="d-flex align-items-start gap-3 mt-4">
                                <Button
                                  type="button"
                                  className="btn btn-light btn-label previestab"
                                  onClick={() => setactiveVerticalTab(2)}
                                >
                                  <i className="ri-arrow-left-line label-icon align-middle fs-16 me-2"></i>{" "}
                                  Back to Document
                                </Button>
                              </div>
                            </Tab.Pane>

                            <Tab.Pane eventKey="4">
                              <div>
                                <h5>Bank Details</h5>
                              </div>
                              <div>
                                <Row className="gy-3">
                                  <div className="mt-2">
                                    <label
                                      className="form-label"
                                      htmlFor="des-info-description-input"
                                    >
                                      Bank Name
                                    </label>
                                    <Form.Control
                                      type="text"
                                      id="supplierName-field"
                                      placeholder="Enter bank name"
                                      required
                                    />
                                  </div>
                                  <div className="mt-2">
                                    <label
                                      className="form-label"
                                      htmlFor="des-info-description-input"
                                    >
                                      Account Name
                                    </label>
                                    <Form.Control
                                      type="text"
                                      id="supplierName-field"
                                      placeholder="Enter account name"
                                      required
                                    />
                                  </div>
                                  <div className="mt-2">
                                    <label
                                      className="form-label"
                                      htmlFor="des-info-description-input"
                                    >
                                      Account Number
                                    </label>
                                    <Form.Control
                                      type="text"
                                      id="supplierName-field"
                                      placeholder="Enter account number"
                                      required
                                    />
                                  </div>
                                  <div className="mt-2">
                                    <label
                                      className="form-label"
                                      htmlFor="des-info-description-input"
                                    >
                                      Sort Code
                                    </label>
                                    <Form.Control
                                      type="text"
                                      id="supplierName-field"
                                      placeholder="Enter sort code"
                                      required
                                    />
                                  </div>
                                </Row>
                              </div>
                            </Tab.Pane>
                          </Tab.Content>
                        </div>
                      </Col>
                    </Row>
                  </Tab.Container>
                </Form>
              </Card.Body>
              <Card.Footer className="d-flex justify-content-center">
                <button
                  type="button"
                  className="d-flex justify-content-center btn btn-info btn-label"
                >
                  <i className="ri-check-fill label-icon align-middle fs-16 me-2"></i>{" "}
                  Apply
                </button>
              </Card.Footer>
            </Card>
          </Col>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default TeamDetails;
