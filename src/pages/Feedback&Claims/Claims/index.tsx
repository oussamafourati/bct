import React, { useMemo, useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Modal,
  Row,
} from "react-bootstrap";
import Breadcrumb from "Common/BreadCrumb";
import { Link, useNavigate } from "react-router-dom";
import Flatpickr from "react-flatpickr";
import TableContainer from "Common/TableContainer";
import { shipments } from "Common/data";

const Claims = () => {
  document.title = "Claims | Bouden Coach Travel";

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumb title="Claims" pageTitle="Feedback&Claims" />
          <Row>
            <div className="col-12">
              <Row>
                <Col xxl={4}>
                  <Card>
                    <Card.Header>
                      <Link to="#" className="link-danger fw-medium float-end">
                        Delete
                      </Link>
                      <h6 className="card-title mb-0">
                        Quality Forcast{" "}
                        <span className="badge bg-success align-middle fs-10">
                          Answered
                        </span>
                      </h6>
                    </Card.Header>
                    <Card.Body>
                      <p className="card-text">
                        They all have something to say beyond the words on the
                        page. They can come across as casual or neutral, exotic
                        or graphic. Cosby sweater eu banh mi, qui irure terry
                        richardson ex squid.
                      </p>
                      <div className="text-end">
                        <Link to="#" className="link-dark fw-medium">
                          <i className="ri-arrow-down-s-line align-middle"></i>
                        </Link>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xxl={4}>
                  <Card>
                    <Card.Header>
                      <Link to="#" className="link-danger fw-medium float-end">
                        Delete
                      </Link>
                      <h6 className="card-title mb-0">
                        Quality Forcast
                        <span className="badge bg-success align-middle fs-10">
                          Answered
                        </span>
                      </h6>
                    </Card.Header>
                    <Card.Body>
                      <p className="card-text">
                        They all have something to say beyond the words on the
                        page. They can come across as casual or neutral, exotic
                        or graphic. Cosby sweater eu banh mi, qui irure terry
                        richardson ex squid.
                      </p>
                      <div className="text-end">
                        <Link to="#" className="link-dark fw-medium">
                          <i className="ri-arrow-down-s-line align-middle"></i>
                        </Link>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xxl={4}>
                  <Card>
                    <Card.Header>
                      <Link to="#" className="link-danger fw-medium float-end">
                        Delete
                      </Link>
                      <h6 className="card-title mb-0">
                        Quality Forcast{" "}
                        <span className="badge bg-success align-middle fs-10">
                          Answered
                        </span>
                      </h6>
                    </Card.Header>
                    <Card.Body>
                      <p className="card-text">
                        They all have something to say beyond the words on the
                        page. They can come across as casual or neutral, exotic
                        or graphic. Cosby sweater eu banh mi, qui irure terry
                        richardson ex squid.
                      </p>
                      <div className="text-end">
                        <Link to="#" className="link-dark fw-medium">
                          <i className="ri-arrow-down-s-line align-middle"></i>
                        </Link>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </div>
          </Row>

          <Row>
            <Col xxl={4}>
              <Card>
                <Card.Header>
                  <Link to="#" className="link-secondary fw-medium float-end">
                    Answer
                  </Link>
                  <h6 className="card-title mb-0">
                    Check your Payment{" "}
                    <span className="badge bg-warning align-middle fs-10">
                      Pending
                    </span>
                  </h6>
                </Card.Header>
                <Card.Body>
                  <p className="card-text">
                    They all have something to say beyond the words on the page.
                    They can come across as casual or neutral, exotic or
                    graphic. Cosby sweater eu banh mi, qui irure terry
                    richardson ex squid.
                  </p>
                  <div className="text-end">
                    <Link to="#" className="link-dark fw-medium">
                      <i className="ri-arrow-down-s-line align-middle"></i>
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col xxl={4}>
              <Card>
                <Card.Header>
                  <Link to="#" className="link-secondary fw-medium float-end">
                    Answer
                  </Link>
                  <h6 className="card-title mb-0">
                    Check your Payment{" "}
                    <span className="badge bg-warning align-middle fs-10">
                      Pending
                    </span>
                  </h6>
                </Card.Header>
                <Card.Body>
                  <p className="card-text">
                    They all have something to say beyond the words on the page.
                    They can come across as casual or neutral, exotic or
                    graphic. Cosby sweater eu banh mi, qui irure terry
                    richardson ex squid.
                  </p>
                  <div className="text-end">
                    <Link to="#" className="link-dark fw-medium">
                      <i className="ri-arrow-down-s-line align-middle"></i>
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col xxl={4}>
              <Card>
                <Card.Header>
                  <Link to="#" className="link-secondary fw-medium float-end">
                    Answer
                  </Link>
                  <h6 className="card-title mb-0">
                    Check your Payment{" "}
                    <span className="badge bg-warning align-middle fs-10">
                      Pending
                    </span>
                  </h6>
                </Card.Header>
                <Card.Body>
                  <p className="card-text">
                    They all have something to say beyond the words on the page.
                    They can come across as casual or neutral, exotic or
                    graphic. Cosby sweater eu banh mi, qui irure terry
                    richardson ex squid.
                  </p>
                  <div className="text-end">
                    <Link to="#" className="link-dark fw-medium">
                      <i className="ri-arrow-down-s-line align-middle"></i>
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Claims;
