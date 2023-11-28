import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import Breadcrumb from "Common/BreadCrumb";
import { Link } from "react-router-dom";
import Flatpickr from "react-flatpickr";
import Dropzone from "react-dropzone";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { VectorMap } from "@south-paw/react-vector-maps";
import world from "./world.svg.json";

const Newquote = () => {
  document.title = "Create New Quote | Bouden Coach Travel";

  // The selected Type
  const [selectedType, setSelectedType] = useState<String>();

  // This function will be triggered when a radio button is selected
  const radioHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedType(event.target.value);
  };
  console.log(selectedType);
  const [selectedFiles, setselectedFiles] = useState([]);

  function handleAcceptedFiles(files: any) {
    files.map((file: any) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
        formattedSize: formatBytes(file.size),
      })
    );
    setselectedFiles(files);
  }

  /* Formats the size */
  function formatBytes(bytes: any, decimals = 2) {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          {/* <Breadcrumb title="Create Vehicle" pageTitle="Vehicles" /> */}
          <form
            id="createproduct-form"
            autoComplete="off"
            className="needs-validation"
            noValidate
          >
            <Row>
              <Col lg={12}>
                <Card>
                  <Card.Header>
                    <div className="d-flex align-items-center">
                      <div className="flex-shrink-0 me-3">
                        <div className="avatar-sm">
                          <div className="avatar-title rounded-circle bg-light text-primary fs-20">
                            <i className="ph ph-user"></i>
                          </div>
                        </div>
                      </div>
                      <div className="flex-grow-1">
                        <h5 className="card-title mb-1">Visitor Information</h5>
                      </div>
                    </div>
                  </Card.Header>
                  <Card.Body>
                    <div className="mb-3">
                      <Form className="tablelist-form">
                        <input type="hidden" id="id-field" />
                        <Row>
                          <Row>
                            {/* First Name  == Done */}
                            <Col lg={4}>
                              <div className="mb-3">
                                <Form.Label htmlFor="customerName-field">
                                  Contact name
                                </Form.Label>
                                <Form.Control
                                  type="text"
                                  id="customerName-field"
                                  placeholder="Enter full name"
                                  required
                                />
                              </div>
                            </Col>
                            {/* Email == Done */}
                            <Col lg={3}>
                              <div className="mb-3">
                                <Form.Label htmlFor="supplierName-field">
                                  Email
                                </Form.Label>
                                <Form.Control
                                  type="email"
                                  id="supplierName-field"
                                  placeholder="Enter email"
                                  required
                                />
                              </div>
                            </Col>
                            {/* Phone  == Done */}
                            <Col lg={3}>
                              <div className="mb-3">
                                <Form.Label htmlFor="supplierName-field">
                                  Phone
                                </Form.Label>
                                <Form.Control
                                  type="text"
                                  id="supplierName-field"
                                  placeholder="Enter phone number"
                                  required
                                />
                              </div>
                            </Col>
                            {/* Notes  == Done */}
                            <Col lg={2}>
                              <div className="mb-3">
                                <Form.Label htmlFor="supplierName-field">
                                  Notes
                                </Form.Label>
                                <Form.Control
                                  type="text"
                                  id="supplierName-field"
                                  placeholder="Enter notes"
                                  required
                                />
                              </div>
                            </Col>
                          </Row>
                          <Row>
                            {/*  Type == Done */}
                            <Col lg={4}>
                              <div className="mb-3">
                                <Form.Label htmlFor="supplierName-field">
                                  Type
                                </Form.Label>
                                <div className="d-flex">
                                  <div className="form-check form-check-inline">
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      name="flexRadioDefault"
                                      id="flexRadioDefault1"
                                      onChange={radioHandler}
                                      value="One Way"
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="flexRadioDefault1"
                                    >
                                      One Way
                                    </label>
                                  </div>
                                  <div className="form-check form-check-inline">
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      name="flexRadioDefault"
                                      id="flexRadioDefault1"
                                      value="Return"
                                      onChange={radioHandler}
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="flexRadioDefault1"
                                    >
                                      Return
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </Col>
                            {/* Pickup date & time  == Not Yet */}
                            <Col lg={3}>
                              <div className="mb-3">
                                <Form.Label htmlFor="supplierName-field">
                                  Pickup date & time
                                </Form.Label>
                                <Flatpickr
                                  className="form-control"
                                  options={{
                                    enableTime: true,
                                    dateFormat: "Y-m-d H:i",
                                  }}
                                />
                              </div>
                            </Col>
                            {/* Return date & time  == Done */}
                            {selectedType === "Return" ? (
                              <Col lg={3}>
                                <div className="mb-3">
                                  <Form.Label htmlFor="supplierName-field">
                                    Return date & time
                                  </Form.Label>
                                  <Flatpickr
                                    className="form-control"
                                    options={{
                                      enableTime: true,
                                      dateFormat: "Y-m-d H:i",
                                    }}
                                  />
                                </div>
                              </Col>
                            ) : (
                              ""
                            )}
                          </Row>
                          <Row>
                            {/* Collection_address  == Done */}
                            <Col lg={4}>
                              <div className="mb-3">
                                <label
                                  htmlFor="statusSelect"
                                  className="form-label"
                                >
                                  Collection address
                                </label>
                                <VectorMap
                                  {...world}
                                  style={{ height: "120px" }}
                                />
                                <div
                                  id="world-map-line-markers"
                                  data-colors='["--tb-light"]'
                                ></div>
                              </div>
                            </Col>
                            {/* Extra Drop  == Done */}
                            <Col lg={4}>
                              <div className="mb-3">
                                <label
                                  htmlFor="statusSelect"
                                  className="form-label"
                                >
                                  Extra Drop
                                </label>
                                <VectorMap
                                  {...world}
                                  style={{ height: "120px" }}
                                />
                                <div
                                  id="world-map-line-markers"
                                  data-colors='["--tb-light"]'
                                ></div>
                              </div>
                            </Col>
                            {/* Destination Address  == Done */}
                            <Col lg={4}>
                              <div className="mb-3">
                                <label
                                  htmlFor="statusSelect"
                                  className="form-label"
                                >
                                  Destination Address
                                </label>
                                <VectorMap
                                  {...world}
                                  style={{ height: "120px" }}
                                />
                                <div
                                  id="world-map-line-markers"
                                  data-colors='["--tb-light"]'
                                ></div>
                              </div>
                            </Col>
                          </Row>
                          <Row>
                            {/* Collection_address  == Done */}
                            <Col lg={4}>
                              <div className="mb-3">
                                <label
                                  htmlFor="statusSelect"
                                  className="form-label"
                                >
                                  Passengers number
                                </label>
                                <select
                                  className="form-select text-muted"
                                  name="choices-single-default"
                                  id="statusSelect"
                                  required
                                >
                                  <option value="">Number</option>
                                  <option value="1">1</option>
                                  <option value="2">2</option>
                                  <option value="3">3</option>
                                  <option value="4">4</option>
                                  <option value="5">5</option>
                                </select>
                              </div>
                            </Col>
                            {/* Vehicle Type  == Done */}
                            <Col lg={3}>
                              <div className="mb-3">
                                <label
                                  htmlFor="statusSelect"
                                  className="form-label"
                                >
                                  Vehicle Type
                                </label>
                                <select
                                  className="form-select text-muted"
                                  name="choices-single-default"
                                  id="statusSelect"
                                  required
                                >
                                  <option value="">Type</option>
                                  <option value="Standard">Standard</option>
                                  <option value="Executive">Executive</option>
                                  <option value="Luxury">Luxury</option>
                                </select>
                              </div>
                            </Col>
                            {/* Luggage Details  == Done */}
                            <Col lg={3}>
                              <div className="mb-3">
                                <label
                                  htmlFor="statusSelect"
                                  className="form-label"
                                >
                                  Luggage Details
                                </label>
                                <select
                                  className="form-select text-muted"
                                  name="choices-single-default"
                                  id="statusSelect"
                                  required
                                >
                                  <option value="">Details</option>
                                  <option value="No Luggage">No Luggage</option>
                                  <option value="10Kg">Lap Luggage Only</option>
                                  <option value="20Kg">
                                    1 x 10kg Hang luggage per person only
                                  </option>
                                  <option value="20Kg">
                                    1 x 20kg Check in luggage per person only
                                  </option>
                                </select>
                              </div>
                            </Col>
                            {/* Luggage Details  == Done */}
                            <Col lg={2}>
                              <div className="mb-3">
                                <label
                                  htmlFor="statusSelect"
                                  className="form-label"
                                >
                                  Journey Type
                                </label>
                                <select
                                  className="form-select text-muted"
                                  name="choices-single-default"
                                  id="statusSelect"
                                  required
                                >
                                  <option value="">Journey</option>
                                  <option value="Weeding">
                                    Airport Transfer
                                  </option>
                                  <option value="Weeding">Charity Event</option>
                                  <option value="Weeding">
                                    Christmas Party
                                  </option>
                                  <option value="10Kg">Corporate Event</option>
                                  <option value="20Kg">Day Trip</option>
                                  <option value="20Kg">Emergency</option>
                                  <option value="20Kg">
                                    Football Away Game( fan trip)
                                  </option>
                                  <option value="10Kg">Funeral</option>
                                  <option value="10Kg">Golf Trip</option>
                                  <option value="10Kg">Night Out</option>
                                  <option value="20Kg">Rail Replacement</option>
                                  <option value="10Kg">
                                    School or University Educational Trip
                                  </option>
                                  <option value="Weeding">Site Tour</option>
                                  <option value="10Kg">Sporting Event</option>
                                  <option value="20Kg">
                                    Sports Team (players transport)
                                  </option>
                                  <option value="10Kg">
                                    Staff Shuttles or Transport
                                  </option>
                                  <option value="Weeding">Stag/Hen Do</option>
                                  <option value="20Kg">
                                    UK Tour or International Tour
                                  </option>
                                  <option value="Weeding">
                                    Vehicle Maintenance(internal book out)
                                  </option>
                                  <option value="20Kg">Wedding</option>
                                  <option value="20Kg">Weekend Away</option>
                                  <option value="10Kg">Other</option>
                                </select>
                              </div>
                            </Col>
                          </Row>
                          <Col lg={12}>
                            <div className="hstack gap-2 justify-content-end">
                              <Button variant="primary" id="add-btn">
                                Add Quote
                              </Button>
                            </div>
                          </Col>
                        </Row>
                      </Form>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </form>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Newquote;
