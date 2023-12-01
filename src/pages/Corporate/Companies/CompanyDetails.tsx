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

const bookmarkProduct = (e: any) => {
  const ele = e.target.closest("button");
  if (ele.classList.contains("active")) {
    ele.classList.remove("active");
  } else {
    ele.classList.add("active");
  }
};

const CompanyDetails = () => {
  document.title = "Company Details | Bouden Coach Travel";
  const LocationCompany = useLocation();

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          <Row className="d-flex align-items-center">
            <Col lg={12}>
              <Card.Body style={{ width: "100%" }}>
                <Row>
                  <Col lg={3}>
                    <div className="profile-user-img position-relative">
                      <img
                        src={LocationCompany.state.logo}
                        alt=""
                        className="rounded"
                      />
                      {/* <span className="position-absolute top-0 start-100 translate-middle badge border border-3 border-white rounded-circle bg-success p-1 mt-1 me-1">
                        <span className="visually-hidden">unread messages</span>
                      </span>*/}
                    </div>
                  </Col>
                  <Col lg={9}>
                    <div className="d-flex border-bottom border-bottom-dashed pb-3 mb-3 mt-4 mt-lg-0">
                      <div className="flex-grow-1">
                        <h5>{LocationCompany.state.name}</h5>
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
                                  {LocationCompany.state.address}
                                </td>
                              </tr>
                              <tr>
                                <td>Email</td>
                                <td className="fw-medium">
                                  {LocationCompany.state.email}
                                </td>
                              </tr>
                              <tr>
                                <td>Mobile / Phone No.</td>
                                <td className="fw-medium">
                                  {LocationCompany.state.phone}
                                </td>
                              </tr>
                              <tr>
                                <td>Category</td>
                                <td className="fw-medium">
                                  {LocationCompany.state.corporateCategory}
                                </td>
                              </tr>
                              <tr>
                                <td>Activity</td>
                                <td className="fw-medium">
                                  {LocationCompany.state.activity}
                                </td>
                              </tr>
                              <tr>
                                <td>Bank Name</td>
                                <td className="fw-medium">
                                  {LocationCompany.state.bankName}
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
                                <td>Bank Account Swift</td>
                                <td className="fw-medium">
                                  {LocationCompany.state.bankAccountSwift}
                                </td>
                              </tr>
                              <tr>
                                <td>Bank Account Number</td>
                                <td className="fw-medium">
                                  {LocationCompany.state.bankAccountNumber}
                                </td>
                              </tr>
                              <tr>
                                <td>Status</td>
                                <td className="fw-medium">
                                  {LocationCompany.state.status === "Active" ? (
                                    <span className="badge badge-soft-success">Active</span>
                                  ) : (
                                    <span className="badge badge-soft-danger">Inactive</span>
                                  )}
                                </td>
                              </tr>
                              <tr>
                                <td>Joining Date</td>
                                <td className="fw-medium">
                                  {LocationCompany.state.serviceDate}
                                </td>
                              </tr>
                              <tr>
                                <td>Login</td>
                                <td className="fw-medium">
                                  {LocationCompany.state.login}
                                </td>
                              </tr>
                              <tr>
                                <td>Sub-Domaine</td>
                                <td className="fw-medium">
                                  {LocationCompany.state.subDomaine}
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

export default CompanyDetails;
