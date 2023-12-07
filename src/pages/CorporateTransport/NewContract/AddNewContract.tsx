import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import Breadcrumb from "Common/BreadCrumb";
import { Link } from "react-router-dom";
import Flatpickr from "react-flatpickr";
import Dropzone from "react-dropzone";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const AddNewContract = () => {
  document.title = "Create Contract | Bouden Coach Travel";

  const [selectedFiles, setselectedFiles] = useState([]);

  // The selected Type
  const [selectedType, setSelectedType] = useState<String>();

  // This function will be triggered when a radio button is selected
  const radioHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedType(event.target.value);
  };

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
          <Row>
            <Col lg={8}>
              <Card>
                <Card.Header>
                  <div className="d-flex align-items-center">
                    <div className="flex-shrink-0 me-3">
                      <div className="avatar-sm">
                        <div className="avatar-title rounded-circle bg-light text-primary fs-20">
                          <i className="mdi mdi-school"></i>
                        </div>
                      </div>
                    </div>
                    <div className="flex-grow-1">
                      <h5 className="card-title mb-1">School Information</h5>
                    </div>
                  </div>
                </Card.Header>
                <Card.Body>
                  <Form className="tablelist-form">
                    <Row>
                      {/* Name  == Done */}
                      <Col lg={4}>
                        <div className="mb-3">
                          <Form.Label htmlFor="customerName-field">
                            Contract
                          </Form.Label>
                          <Form.Control
                            type="text"
                            id="customerName-field"
                            placeholder="Enter contract"
                            required
                          />
                        </div>
                      </Col>
                      {/* Address == Done */}
                      <Col lg={4}>
                        <div className="mb-3">
                          <Form.Label htmlFor="supplierName-field">
                            Account
                          </Form.Label>
                          <Form.Control
                            type="text"
                            id="supplierName-field"
                            placeholder="Enter account name"
                            required
                          />
                        </div>
                      </Col>
                      <Col lg={4}>
                        <div className="mb-3">
                          <Form.Label htmlFor="supplierName-field">
                            Find Account
                          </Form.Label>
                          <Form.Control
                            type="text"
                            id="supplierName-field"
                            placeholder="search account name"
                            required
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      {/* Email  == Done */}
                      <Col lg={4}>
                        <div className="mb-3">
                          <Form.Label htmlFor="supplierName-field">
                            Name
                          </Form.Label>
                          <Form.Control
                            type="text"
                            id="supplierName-field"
                            placeholder="Enter name"
                            required
                          />
                        </div>
                      </Col>
                      {/* Phone  == Done */}
                      <Col lg={4}>
                        <div className="mb-3">
                          <Form.Label htmlFor="supplierName-field">
                            Email
                          </Form.Label>
                          <Form.Control
                            type="terxt"
                            id="supplierName-field"
                            placeholder="Enter email"
                            required
                          />
                        </div>
                      </Col>
                      <Col lg={4}>
                        <div className="mb-3">
                          <Form.Label htmlFor="supplierName-field">
                            Phone
                          </Form.Label>
                          <Form.Control
                            type="terxt"
                            id="supplierName-field"
                            placeholder="Enter phone"
                            required
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={4}>
                        <div className="mb-3">
                          <Form.Label htmlFor="supplierName-field">
                            Invoice Frequency
                          </Form.Label>
                          <select
                            className="form-select text-muted"
                            name="choices-single-default"
                            id="statusSelect"
                            required
                          >
                            <option value="">Not Select</option>
                            <option value="Entreprise">Daily</option>
                            <option value="Schools">Weekly</option>
                            <option value="Entreprise">Bi Weekly</option>
                            <option value="Schools">Third Weekly</option>
                            <option value="Schools">Monthly</option>
                          </select>
                        </div>
                      </Col>
                      <Col lg={4}>
                        <div className="mb-3">
                          <Form.Label htmlFor="supplierName-field">
                            Notes
                          </Form.Label>
                          <div>
                            <textarea
                              className="form-control"
                              id="exampleFormControlTextarea5"
                              placeholder="for everyone : customer can see it"
                              rows={3}
                            ></textarea>
                          </div>
                        </div>
                      </Col>
                      <Col lg={4}>
                        <div className="mb-3">
                          <Form.Label htmlFor="supplierName-field">
                            Note for Staff
                          </Form.Label>
                          <div>
                            <textarea
                              className="form-control"
                              placeholder="only for staff member"
                              id="exampleFormControlTextarea5"
                              rows={3}
                            ></textarea>
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={4}>
                        <div className="mb-3">
                          <Form.Label htmlFor="supplierName-field">
                            Price
                          </Form.Label>
                          <Form.Control
                            type="terxt"
                            id="supplierName-field"
                            placeholder="00.00"
                            required
                          />
                        </div>
                      </Col>
                      <Col lg={4}>
                        <div className="mb-3">
                          <Form.Label htmlFor="supplierName-field">
                            Salesperson
                          </Form.Label>
                          <Form.Control
                            type="terxt"
                            id="supplierName-field"
                            placeholder="Enter sales person name"
                            required
                          />
                        </div>
                      </Col>
                    </Row>
                  </Form>
                </Card.Body>
              </Card>
              <Card>
                <Card.Header>
                  <div className="d-flex align-items-center">
                    <div className="flex-shrink-0 me-3">
                      <div className="avatar-sm">
                        <div className="avatar-title rounded-circle bg-light text-primary fs-20">
                          <i className="mdi mdi-school"></i>
                        </div>
                      </div>
                    </div>
                    <div className="flex-grow-1">
                      <h5 className="card-title mb-1">Repeat job option</h5>
                    </div>
                  </div>
                </Card.Header>
                <Card.Body>
                  <Card>
                    <Card.Header>
                      <div className="d-flex align-items-center">
                        <div className="flex-shrink-0 me-3">
                          <div className="avatar-sm">
                            <div className="avatar-title rounded-circle bg-light text-primary fs-20">
                              <i className="mdi mdi-school"></i>
                            </div>
                          </div>
                        </div>
                        <div className="flex-grow-1">
                          <h5 className="card-title mb-1">
                            Contract Run Dates
                          </h5>
                        </div>
                      </div>
                    </Card.Header>
                    <Card.Body>
                      <Form className="tablelist-form">
                        <Row>
                          {/* Name  == Done */}
                          <Col lg={12}>
                            <div className="d-flex justify-content-center">
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="flexRadioDefault"
                                  id="flexRadioDefault1"
                                  onChange={radioHandler}
                                  value="By Range"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="flexRadioDefault1"
                                >
                                  By Range
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="flexRadioDefault"
                                  id="flexRadioDefault1"
                                  value="Multiples Day"
                                  onChange={radioHandler}
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="flexRadioDefault1"
                                >
                                  Multiples Day
                                </label>
                              </div>
                            </div>
                          </Col>
                          {selectedType === "By Range" ? (
                            <Row className="mt-2">
                              {/* Email  == Done */}
                              <Col lg={5}>
                                <div className="mb-3">
                                  <Form.Control
                                    type="text"
                                    id="supplierName-field"
                                    placeholder="Enter name"
                                    required
                                  />
                                </div>
                              </Col>
                              <Col className="d-flex justify-content-center align-items-center">
                                <h5>to</h5>
                              </Col>
                              {/* Phone  == Done */}
                              <Col lg={5}>
                                <div className="mb-3">
                                  <Form.Control
                                    type="text"
                                    id="supplierName-field"
                                    placeholder="Enter email"
                                    required
                                  />
                                </div>
                              </Col>
                            </Row>
                          ) : selectedType === "Multiples Day" ? (
                            <Row className="mt-2">
                              {/* Email  == Done */}
                              <Col
                                lg={12}
                                className="d-flex justify-content-center"
                              >
                                <div className="mb-3">
                                  <Form.Control
                                    type="text"
                                    id="supplierName-field"
                                    placeholder="Enter name"
                                    required
                                  />
                                </div>
                              </Col>
                            </Row>
                          ) : (
                            ""
                          )}
                        </Row>
                        <Row>
                          {/* Email  == Done */}
                          <Col lg={12}>
                            <div className="mb-3">
                              <Form.Label htmlFor="supplierName-field">
                                Days of week not running
                              </Form.Label>
                              <select
                                className="form-select"
                                multiple
                                aria-label="multiple select example"
                              >
                                <option selected>No Except</option>
                                <option value="1">Monday</option>
                                <option value="2">Tuesday</option>
                                <option value="3">Wednesday</option>
                                <option value="4">Thursday</option>
                                <option value="5">Friday</option>
                                <option value="6">Saturday</option>
                                <option value="7">Sunday</option>
                              </select>
                            </div>
                          </Col>
                          {/* Phone  == Done */}
                        </Row>
                      </Form>
                    </Card.Body>
                  </Card>
                  <Card>
                    <Card.Header>
                      <div className="d-flex align-items-center">
                        <div className="flex-shrink-0 me-3">
                          <div className="avatar-sm">
                            <div className="avatar-title rounded-circle bg-light text-primary fs-20">
                              <i className="mdi mdi-school"></i>
                            </div>
                          </div>
                        </div>
                        <div className="flex-grow-1">
                          <h5 className="card-title mb-1">Add Exception</h5>
                        </div>
                      </div>
                    </Card.Header>
                    <Card.Body>
                      <Form className="tablelist-form">
                        <Row>
                          {/* Name  == Done */}
                          <Col lg={12}>
                            <div className="d-flex justify-content-center">
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="flexRadioDefault"
                                  id="flexRadioDefault1"
                                  onChange={radioHandler}
                                  value="By Range"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="flexRadioDefault1"
                                >
                                  By Range
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="flexRadioDefault"
                                  id="flexRadioDefault1"
                                  value="Multiples Day"
                                  onChange={radioHandler}
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="flexRadioDefault1"
                                >
                                  Multiples Day
                                </label>
                              </div>
                            </div>
                          </Col>
                          {selectedType === "By Range" ? (
                            <Row className="mt-2">
                              {/* Email  == Done */}
                              <Col lg={5}>
                                <div className="mb-3">
                                  <Form.Control
                                    type="text"
                                    id="supplierName-field"
                                    placeholder="Enter name"
                                    required
                                  />
                                </div>
                              </Col>
                              <Col className="d-flex justify-content-center align-items-center">
                                <h5>to</h5>
                              </Col>
                              {/* Phone  == Done */}
                              <Col lg={5}>
                                <div className="mb-3">
                                  <Form.Control
                                    type="text"
                                    id="supplierName-field"
                                    placeholder="Enter email"
                                    required
                                  />
                                </div>
                              </Col>
                            </Row>
                          ) : selectedType === "Multiples Day" ? (
                            <Row className="mt-2">
                              {/* Email  == Done */}
                              <Col
                                lg={12}
                                className="d-flex justify-content-center"
                              >
                                <div className="mb-3">
                                  <Form.Control
                                    type="text"
                                    id="supplierName-field"
                                    placeholder="Enter name"
                                    required
                                  />
                                </div>
                              </Col>
                            </Row>
                          ) : (
                            ""
                          )}
                        </Row>
                        <Row className="d-flex justify-content-center">
                          {/* Email  == Done */}
                          <Col lg={4}>
                            <div className="mb-3">
                              <Form.Label htmlFor="supplierName-field">
                                Notes
                              </Form.Label>
                              <div>
                                <textarea
                                  className="form-control"
                                  id="exampleFormControlTextarea5"
                                  placeholder="for everyone : customer can see it"
                                  rows={3}
                                ></textarea>
                              </div>
                            </div>
                          </Col>
                        </Row>
                        <Row className="d-flex justify-content-center">
                          {/* Email  == Done */}
                          <Col lg={4}>
                            <button type="button" className="btn btn-success">
                              Success
                            </button>
                          </Col>
                        </Row>
                      </Form>
                    </Card.Body>
                  </Card>
                  <Card>
                    <Card.Header>
                      <div className="d-flex align-items-center">
                        <div className="flex-shrink-0 me-3">
                          <div className="avatar-sm">
                            <div className="avatar-title rounded-circle bg-light text-primary fs-20">
                              <i className="mdi mdi-school"></i>
                            </div>
                          </div>
                        </div>
                        <div className="flex-grow-1">
                          <h5 className="card-title mb-1">Spawn Pattern</h5>
                        </div>
                      </div>
                    </Card.Header>
                    <Card.Body>
                      <Form className="tablelist-form">
                        <Row>
                          {/* Name  == Done */}
                          <Col lg={12}>
                            <div>
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
                                    value="By Range"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="flexRadioDefault1"
                                  >
                                    By Range
                                  </label>
                                </div>
                                <div className="form-check form-check-inline">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault"
                                    id="flexRadioDefault1"
                                    value="Multiples Day"
                                    onChange={radioHandler}
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="flexRadioDefault1"
                                  >
                                    Multiples Day
                                  </label>
                                </div>
                              </div>
                            </div>
                          </Col>
                          {selectedType === "By Range" ? (
                            <Row className="mt-2">
                              {/* Email  == Done */}
                              <Col lg={5}>
                                <div className="mb-3">
                                  <Form.Control
                                    type="text"
                                    id="supplierName-field"
                                    placeholder="Enter name"
                                    required
                                  />
                                </div>
                              </Col>
                              <Col className="d-flex justify-content-center align-items-center">
                                <h5>to</h5>
                              </Col>
                              {/* Phone  == Done */}
                              <Col lg={5}>
                                <div className="mb-3">
                                  <Form.Control
                                    type="text"
                                    id="supplierName-field"
                                    placeholder="Enter email"
                                    required
                                  />
                                </div>
                              </Col>
                            </Row>
                          ) : selectedType === "Multiples Day" ? (
                            <Row className="mt-2">
                              {/* Email  == Done */}
                              <Col
                                lg={12}
                                className="d-flex justify-content-center"
                              >
                                <div className="mb-3">
                                  <Form.Control
                                    type="text"
                                    id="supplierName-field"
                                    placeholder="Enter name"
                                    required
                                  />
                                </div>
                              </Col>
                            </Row>
                          ) : (
                            ""
                          )}
                        </Row>
                        <Row className="d-flex justify-content-center">
                          {/* Email  == Done */}
                          <Col lg={4}>
                            <div className="mb-3">
                              <Form.Label htmlFor="supplierName-field">
                                Notes
                              </Form.Label>
                              <div>
                                <textarea
                                  className="form-control"
                                  id="exampleFormControlTextarea5"
                                  placeholder="for everyone : customer can see it"
                                  rows={3}
                                ></textarea>
                              </div>
                            </div>
                          </Col>
                        </Row>
                      </Form>
                    </Card.Body>
                  </Card>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4}>
              <Card>
                <Card.Header>
                  <div className="d-flex align-items-center">
                    <div className="flex-shrink-0 me-3">
                      <div className="avatar-sm">
                        <div className="avatar-title rounded-circle bg-light text-primary fs-20">
                          <i className="mdi mdi-school"></i>
                        </div>
                      </div>
                    </div>
                    <div className="flex-grow-1">
                      <h5 className="card-title mb-1">School Information</h5>
                    </div>
                  </div>
                </Card.Header>
                <Card.Body>
                  <Form className="tablelist-form">
                    <Row>
                      {/* Name  == Done */}
                      <Col lg={6}>
                        <div className="mb-3">
                          <Form.Label htmlFor="customerName-field">
                            Job Pattern Name
                          </Form.Label>
                          <Form.Control
                            type="text"
                            id="customerName-field"
                            placeholder="Enter job pattern name"
                            required
                          />
                        </div>
                      </Col>
                      {/* Address == Done */}
                      <Col lg={6}>
                        <div className="mb-3">
                          <Form.Label htmlFor="supplierName-field">
                            From already quote
                          </Form.Label>
                          <Form.Control
                            type="text"
                            id="supplierName-field"
                            placeholder="search pattern name"
                            required
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={6}>
                        <div className="mb-3">
                          <Form.Label htmlFor="supplierName-field">
                            Company name
                          </Form.Label>
                          <Form.Control
                            type="text"
                            id="supplierName-field"
                            placeholder="Enter Company name"
                            required
                          />
                        </div>
                      </Col>
                      {/* Email  == Done */}
                      <Col lg={6}>
                        <div className="mb-3">
                          <Form.Label htmlFor="supplierName-field">
                            External Reference
                          </Form.Label>
                          <Form.Control
                            type="text"
                            id="supplierName-field"
                            placeholder="Enter name"
                            required
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      {/* Phone  == Done */}
                      <Col lg={6}>
                        <div className="mb-3">
                          <Form.Label htmlFor="supplierName-field">
                            Contact Name
                          </Form.Label>
                          <Form.Control
                            type="text"
                            id="supplierName-field"
                            placeholder="Enter contact name"
                            required
                          />
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div className="mb-3">
                          <Form.Label htmlFor="supplierName-field">
                            Contact Number
                          </Form.Label>
                          <Form.Control
                            type="email"
                            id="supplierName-field"
                            placeholder="Enter contact phone number"
                            required
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={6}>
                        <div className="mb-3">
                          <Form.Label htmlFor="supplierName-field">
                            Mobile Number
                          </Form.Label>
                          <Form.Control
                            type="email"
                            id="supplierName-field"
                            placeholder="Enter Mobile number"
                            required
                          />
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div className="mb-3">
                          <Form.Label htmlFor="supplierName-field">
                            Number of passengers
                          </Form.Label>
                          <div>
                            <select
                              className="form-select text-muted"
                              name="choices-single-default"
                              id="statusSelect"
                              required
                            >
                              <option value="">Select Passengers Number</option>
                              <option value="Entreprise">1</option>
                              <option value="Schools">2</option>
                              <option value="Entreprise">3</option>
                              <option value="Schools">4</option>
                              <option value="Schools">5</option>
                              <option value="Entreprise">6</option>
                              <option value="Schools">7</option>
                              <option value="Entreprise">8</option>
                              <option value="Schools">9</option>
                              <option value="Schools">10</option>
                              <option value="Entreprise">11</option>
                              <option value="Schools">12</option>
                              <option value="Entreprise">13</option>
                              <option value="Schools">14</option>
                              <option value="Schools">15</option>
                            </select>
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={6}>
                        <div className="mb-3">
                          <Form.Label htmlFor="supplierName-field">
                            Vehicle Type
                          </Form.Label>
                          <div>
                            <select
                              className="form-select text-muted"
                              name="choices-single-default"
                              id="statusSelect"
                              required
                            >
                              <option value="">Select Vehicle</option>
                              <option value="Entreprise">
                                Standard Sallon Car
                              </option>
                              <option value="Schools">
                                Standard Sallon Car
                              </option>
                              <option value="Entreprise">VIP Sallon Car</option>
                              <option value="Schools">
                                Standard 6 Seat MPV
                              </option>
                              <option value="Schools">
                                Standard 6 Seat MPV
                              </option>
                            </select>
                          </div>
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div className="mb-3">
                          <Form.Label htmlFor="supplierName-field">
                            Luggage Details
                          </Form.Label>
                          <select
                            className="form-select text-muted"
                            name="choices-single-default"
                            id="statusSelect"
                            required
                          >
                            <option value="">Select Luggage</option>
                            <option value="Entreprise">No Luggage</option>
                            <option value="Schools">Lap Luggage Only</option>
                            <option value="Entreprise">
                              1 x 10kg Check in Luggage person only
                            </option>
                            <option value="Schools">
                              1 x 20kg Check in Luggage person only
                            </option>
                            <option value="Schools">
                              1 x 22kg Check in Luggage person only
                            </option>
                          </select>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={6}>
                        <div className="mb-3">
                          <Form.Label htmlFor="supplierName-field">
                            Journey Type
                          </Form.Label>
                          <select
                            className="form-select text-muted"
                            name="choices-single-default"
                            id="statusSelect"
                            required
                          >
                            <option value="">Select Journey Type</option>
                            <option value="Weeding">Airport Transfer</option>
                            <option value="Weeding">Charity Event</option>
                            <option value="Weeding">Christmas Party</option>
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
                      <Col lg={6}>
                        <div className="mb-3">
                          <Form.Label htmlFor="supplierName-field">
                            Notes
                          </Form.Label>
                          <div>
                            <textarea
                              className="form-control"
                              id="exampleFormControlTextarea5"
                              placeholder="for everyone : customer can see it"
                              rows={3}
                            ></textarea>
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={6}>
                        <div className="mb-3">
                          <Form.Label htmlFor="supplierName-field">
                            Price
                          </Form.Label>
                          <Form.Control
                            type="terxt"
                            id="supplierName-field"
                            placeholder="00.00"
                            required
                          />
                        </div>
                      </Col>
                    </Row>
                  </Form>
                </Card.Body>
              </Card>
              <Card>
                <Card.Header>
                  <div className="d-flex align-items-center">
                    <div className="flex-shrink-0 me-3">
                      <div className="avatar-sm">
                        <div className="avatar-title rounded-circle bg-light text-primary fs-20">
                          <i className="mdi mdi-school"></i>
                        </div>
                      </div>
                    </div>
                    <div className="flex-grow-1">
                      <h5 className="card-title mb-1">School Information</h5>
                    </div>
                  </div>
                </Card.Header>
                <Card.Body>
                  <Form className="tablelist-form">
                    <Row>
                      {/* Name  == Done */}
                      <Col lg={6}>
                        <div className="mb-3">
                          <Form.Label htmlFor="customerName-field">
                            Job Pattern Name
                          </Form.Label>
                          <Form.Control
                            type="text"
                            id="customerName-field"
                            placeholder="Enter job pattern name"
                            required
                          />
                        </div>
                      </Col>
                      {/* Address == Done */}
                      <Col lg={6}>
                        <div className="mb-3">
                          <Form.Label htmlFor="supplierName-field">
                            From already quote
                          </Form.Label>
                          <Form.Control
                            type="text"
                            id="supplierName-field"
                            placeholder="search pattern name"
                            required
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={6}>
                        <div className="mb-3">
                          <Form.Label htmlFor="supplierName-field">
                            Company name
                          </Form.Label>
                          <Form.Control
                            type="text"
                            id="supplierName-field"
                            placeholder="Enter Company name"
                            required
                          />
                        </div>
                      </Col>
                      {/* Email  == Done */}
                      <Col lg={6}>
                        <div className="mb-3">
                          <Form.Label htmlFor="supplierName-field">
                            External Reference
                          </Form.Label>
                          <Form.Control
                            type="text"
                            id="supplierName-field"
                            placeholder="Enter name"
                            required
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      {/* Phone  == Done */}
                      <Col lg={6}>
                        <div className="mb-3">
                          <Form.Label htmlFor="supplierName-field">
                            Contact Name
                          </Form.Label>
                          <Form.Control
                            type="text"
                            id="supplierName-field"
                            placeholder="Enter contact name"
                            required
                          />
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div className="mb-3">
                          <Form.Label htmlFor="supplierName-field">
                            Contact Number
                          </Form.Label>
                          <Form.Control
                            type="email"
                            id="supplierName-field"
                            placeholder="Enter contact phone number"
                            required
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={6}>
                        <div className="mb-3">
                          <Form.Label htmlFor="supplierName-field">
                            Mobile Number
                          </Form.Label>
                          <Form.Control
                            type="email"
                            id="supplierName-field"
                            placeholder="Enter Mobile number"
                            required
                          />
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div className="mb-3">
                          <Form.Label htmlFor="supplierName-field">
                            Number of passengers
                          </Form.Label>
                          <div>
                            <select
                              className="form-select text-muted"
                              name="choices-single-default"
                              id="statusSelect"
                              required
                            >
                              <option value="">Select Passengers Number</option>
                              <option value="Entreprise">1</option>
                              <option value="Schools">2</option>
                              <option value="Entreprise">3</option>
                              <option value="Schools">4</option>
                              <option value="Schools">5</option>
                              <option value="Entreprise">6</option>
                              <option value="Schools">7</option>
                              <option value="Entreprise">8</option>
                              <option value="Schools">9</option>
                              <option value="Schools">10</option>
                              <option value="Entreprise">11</option>
                              <option value="Schools">12</option>
                              <option value="Entreprise">13</option>
                              <option value="Schools">14</option>
                              <option value="Schools">15</option>
                            </select>
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={6}>
                        <div className="mb-3">
                          <Form.Label htmlFor="supplierName-field">
                            Vehicle Type
                          </Form.Label>
                          <div>
                            <select
                              className="form-select text-muted"
                              name="choices-single-default"
                              id="statusSelect"
                              required
                            >
                              <option value="">Select Vehicle</option>
                              <option value="Entreprise">
                                Standard Sallon Car
                              </option>
                              <option value="Schools">
                                Standard Sallon Car
                              </option>
                              <option value="Entreprise">VIP Sallon Car</option>
                              <option value="Schools">
                                Standard 6 Seat MPV
                              </option>
                              <option value="Schools">
                                Standard 6 Seat MPV
                              </option>
                            </select>
                          </div>
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div className="mb-3">
                          <Form.Label htmlFor="supplierName-field">
                            Luggage Details
                          </Form.Label>
                          <select
                            className="form-select text-muted"
                            name="choices-single-default"
                            id="statusSelect"
                            required
                          >
                            <option value="">Select Luggage</option>
                            <option value="Entreprise">No Luggage</option>
                            <option value="Schools">Lap Luggage Only</option>
                            <option value="Entreprise">
                              1 x 10kg Check in Luggage person only
                            </option>
                            <option value="Schools">
                              1 x 20kg Check in Luggage person only
                            </option>
                            <option value="Schools">
                              1 x 22kg Check in Luggage person only
                            </option>
                          </select>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={6}>
                        <div className="mb-3">
                          <Form.Label htmlFor="supplierName-field">
                            Journey Type
                          </Form.Label>
                          <select
                            className="form-select text-muted"
                            name="choices-single-default"
                            id="statusSelect"
                            required
                          >
                            <option value="">Select Journey Type</option>
                            <option value="Weeding">Airport Transfer</option>
                            <option value="Weeding">Charity Event</option>
                            <option value="Weeding">Christmas Party</option>
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
                      <Col lg={6}>
                        <div className="mb-3">
                          <Form.Label htmlFor="supplierName-field">
                            Notes
                          </Form.Label>
                          <div>
                            <textarea
                              className="form-control"
                              id="exampleFormControlTextarea5"
                              placeholder="for everyone : customer can see it"
                              rows={3}
                            ></textarea>
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={6}>
                        <div className="mb-3">
                          <Form.Label htmlFor="supplierName-field">
                            Price
                          </Form.Label>
                          <Form.Control
                            type="terxt"
                            id="supplierName-field"
                            placeholder="00.00"
                            required
                          />
                        </div>
                      </Col>
                    </Row>
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

export default AddNewContract;
