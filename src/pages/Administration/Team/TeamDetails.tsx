import React from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Dropdown,
  Form,
  Row,
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

const TeamDetails = () => {
  document.title = "Team Details | Bouden Coach Travel";
  const LocationTeam = useLocation();

  console.log(LocationTeam.state);

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          <Row className="d-flex align-items-center">
            <Col lg={12}>
              <Card.Body style={{ width: "100%", height: "100%" }}>
                <Row>
                  <Col lg={3}>
                    <div className="profile-user-img position-relative">
                      <img
                        src={LocationTeam.state.avatar}
                        alt=""
                        className="rounded object-fit-cover"
                      />
                      {/* <span className="position-absolute top-0 start-100 translate-middle badge border border-3 border-white rounded-circle bg-success p-1 mt-1 me-1">
                        <span className="visually-hidden">unread messages</span>
                      </span>*/}
                    </div>
                  </Col>
                  <Col lg={9}>
                    <div className="d-flex border-bottom border-bottom-dashed pb-3 mb-3 mt-4 mt-lg-0">
                      <div className="flex-grow-1">
                        <h5>{LocationTeam.state.fullName}</h5>
                        {/* <p className="text-muted mb-0">Sales & Marketing Manager</p> */}
                      </div>
                      {/* <div className="flex-shrink-0">
                                            <Dropdown>
                                                <Dropdown.Toggle href="#" className="arrow-none btn btn-ghost-primary btn-sm btn-icon" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i className="ph-dots-three-outline"></i>
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <li><Dropdown.Item href="/#">Action</Dropdown.Item></li>
                                                    <li><Dropdown.Item href="/#">Another action</Dropdown.Item></li>
                                                    <li><Dropdown.Item href="/#">Something else here</Dropdown.Item></li>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div> */}
                    </div>

                    <Row>
                      <Col lg={6}>
                        <div className="table-responsive">
                          <Table className="table-borderless table-sm mb-0">
                            <tbody>
                              <tr>
                                <td>Address</td>
                                <td className="fw-medium">
                                  {LocationTeam.state.address}
                                </td>
                              </tr>
                              <tr>
                                <td>Email</td>
                                <td className="fw-medium">
                                  {LocationTeam.state.email}
                                </td>
                              </tr>
                              <tr>
                                <td>Date of Birth</td>
                                <td className="fw-medium">
                                  {LocationTeam.state.dateofbirth}
                                </td>
                              </tr>
                              <tr>
                                <td>Mobile / Phone No.</td>
                                <td className="fw-medium">
                                  {LocationTeam.state.phone}
                                </td>
                              </tr>
                              <tr>
                                <td>Gender</td>
                                <td className="fw-medium">
                                  {LocationTeam.state.gender}
                                </td>
                              </tr>
                              <tr>
                                <td>Civil Status</td>
                                <td className="fw-medium">
                                  {LocationTeam.state.civilStatus}
                                </td>
                              </tr>
                              <tr>
                                <td>Number of Child</td>
                                <td className="fw-medium">
                                  {LocationTeam.state.numberofchild}
                                </td>
                              </tr>
                            </tbody>
                          </Table>
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div className="table-responsive">
                          <Table className="table-borderless table-sm mb-0">
                            <tbody>
                              <tr>
                                <td>Nationality</td>
                                <td className="fw-medium">
                                  {LocationTeam.state.nationality}
                                </td>
                              </tr>
                              <tr>
                                <td>Original Nationality</td>
                                <td className="fw-medium">
                                  {LocationTeam.state.originalNationality}
                                </td>
                              </tr>
                              <tr>
                                <td>Status</td>
                                <td className="fw-medium">
                                  {LocationTeam.state.status === "Active" ? (
                                    <span className="badge badge-soft-success">Active</span>
                                  ) : (
                                    <span className="badge badge-soft-danger">Inactive</span>
                                  )}
                                </td>
                              </tr>
                              <tr>
                                <td>Joining Date</td>
                                <td className="fw-medium">
                                  {LocationTeam.state.serviceDate}
                                </td>
                              </tr>
                              <tr>
                                <td>Access Level</td>
                                <td className="fw-medium">
                                  {LocationTeam.state.accessLevel}
                                </td>
                              </tr>
                              <tr>
                                <td>Contract Type</td>
                                <td className="fw-medium">
                                  {LocationTeam.state.contractType}
                                </td>
                              </tr>
                              <tr>
                                <td>Salary</td>
                                <td className="fw-medium">
                                  {LocationTeam.state.salary}
                                </td>
                              </tr>
                            </tbody>
                          </Table>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Card.Body>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default TeamDetails;
