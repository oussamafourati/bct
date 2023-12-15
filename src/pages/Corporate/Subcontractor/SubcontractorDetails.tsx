import React from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Dropdown,
  Form,
  Image,
  Row,
  Table,
} from "react-bootstrap";
import { useLocation, Link } from "react-router-dom";
import avatar1 from "assets/images/users/avatar-1.jpg";
import img4 from "assets/images/small/img-4.jpg";

const bookmarkProduct = (e: any) => {
  const ele = e.target.closest("button");
  if (ele.classList.contains("active")) {
    ele.classList.remove("active");
  } else {
    ele.classList.add("active");
  }
};

const SubcontractorDetails = () => {
  document.title = "Affiliate Details | Bouden Coach Travel";
  const LocationSubContractor = useLocation();

  return (
    // Company Address Email Phone Region Status
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          <Row>
            <Col lg={12}>
              <Card>
                <Card.Header>
                  <h5 className="card-title mb-0">
                    Grange Travel Coach Hire Ltd
                  </h5>
                </Card.Header>
                <Card.Body>
                  <Card className="border-0 shadow-none mb-0">
                    <Card.Body
                      className="rounded profile-basic"
                      style={{
                        backgroundImage: `url(${img4})`,
                        backgroundSize: "cover",
                      }}
                    ></Card.Body>
                    <Card.Body>
                      <div className="mt-n5 text-end">
                        <Image
                          src={avatar1}
                          alt=""
                          className="avatar-lg img-thumbnail rounded-circle p-1 bg-card-custom mt-n3"
                        />
                      </div>
                    </Card.Body>
                    <Card.Body className="pt-0">
                      <Row className="justify-content-between gy-4">
                        <Col
                          xl={3}
                          md={5}
                          className="order-last order-lg-first"
                        >
                          <div className="text-end text-lg-start">
                            <p className="text-muted fw-medium mb-2">
                              Language Knows
                            </p>
                            <ul className="list-inline mb-4">
                              <li className="list-inline-item">
                                <span className="badge badge-soft-info">
                                  English
                                </span>
                              </li>
                              <li className="list-inline-item">
                                <span className="badge badge-soft-info">
                                  Russian
                                </span>
                              </li>
                              <li className="list-inline-item">
                                <span className="badge badge-soft-info">
                                  Chinese
                                </span>
                              </li>
                            </ul>
                          </div>

                          <div className="text-end text-lg-start">
                            <p className="text-muted fw-medium mb-2">
                              Featured Skills
                            </p>
                            <ul className="d-flex gap-2 flex-wrap list-unstyled mb-0 justify-content-end justify-content-lg-start">
                              <li>
                                <span className="badge badge-soft-dark">
                                  Business Marketing
                                </span>
                              </li>
                              <li>
                                <span className="badge badge-soft-dark">
                                  Google Ads Management
                                </span>
                              </li>
                              <li>
                                <span className="badge badge-soft-dark">
                                  Social Ads Management
                                </span>
                              </li>
                              <li>
                                <span className="badge badge-soft-dark">
                                  Content SEO
                                </span>
                              </li>
                            </ul>
                          </div>
                        </Col>
                        <Col xl={5} md={7} className="text-end">
                          <h5 className="fs-17">Company Name</h5>
                          <div className="mb-3 text-muted">
                            <i className="bi bi-geo-alt"></i> Address
                          </div>
                          <p>Phone</p>
                          <p>Email</p>

                          <div className="hstack gap-2 justify-content-end">
                            <Button variant="primary">Invite to Project</Button>
                            <Button variant="soft-info" className="btn-icon">
                              <i className="bi bi-chat-left-text"></i>
                            </Button>
                            <Dropdown role="button">
                              <Dropdown.Toggle
                                as="a"
                                className="btn btn-soft-danger btn-icon arrow-none"
                              >
                                <i className="bi bi-three-dots-vertical"></i>
                              </Dropdown.Toggle>
                              <Dropdown.Menu as="ul" className="dropdown-menu">
                                <li>
                                  <Link className="dropdown-item" to="#">
                                    Action
                                  </Link>
                                </li>
                                <li>
                                  <Link className="dropdown-item" to="#">
                                    Another action
                                  </Link>
                                </li>
                                <li>
                                  <Link className="dropdown-item" to="#">
                                    Something else here
                                  </Link>
                                </li>
                              </Dropdown.Menu>
                            </Dropdown>
                          </div>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default SubcontractorDetails;
