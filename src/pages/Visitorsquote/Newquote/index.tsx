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
              <Col lg={8}>
                <Card>
                  <div className="d-flex align-items-center p-2">
                    <div className="flex-shrink-0 me-3">
                      <div className="avatar-sm">
                        <div className="avatar-title rounded-circle bg-light text-dark fs-20">
                          <i className="ph ph-file-plus"></i>
                        </div>
                      </div>
                    </div>
                    <div className="flex-grow-1">
                      <h5 className="card-title mb-1">Create a new quote</h5>
                    </div>
                    <div className="hstack gap-2 justify-content-end">
                      <Button variant="success" id="add-btn" className="btn-sm">
                        Save & Send
                      </Button>
                      <Button variant="info" id="add-btn" className="btn-sm">
                        Quick Save
                      </Button>
                    </div>
                  </div>
                  <Card.Header>
                    <div className="d-flex align-items-center p-1">
                      <div className="flex-shrink-0 me-3">
                        <div className="avatar-sm">
                          <div className="avatar-title rounded-circle bg-light text-primary fs-20">
                            <i className="ph ph-user"></i>
                          </div>
                        </div>
                      </div>
                      <div className="flex-grow-1">
                        <h5 className="card-title mb-1">Customer</h5>
                      </div>
                    </div>
                    <Row>
                      {/* Email == Done */}
                      <Col lg={4}>
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
                      <Col lg={4}>
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
                      {/* Name  == Done */}
                      <Col lg={4}>
                        <div className="mb-3">
                          <Form.Label htmlFor="customerName-field">
                            Name
                          </Form.Label>
                          <Form.Control
                            type="text"
                            id="customerName-field"
                            placeholder="Enter full name"
                            required
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      {/* Mobile  == Done */}
                      <Col lg={4}>
                        <div className="mb-3">
                          <Form.Label htmlFor="supplierName-field">
                            Mobile
                          </Form.Label>
                          <Form.Control
                            type="text"
                            id="supplierName-field"
                            placeholder="Enter mobile number"
                            required
                          />
                        </div>
                      </Col>
                      {/*  Company == Done */}
                      <Col lg={4}>
                        <div className="mb-3">
                          <Form.Label htmlFor="supplierName-field">
                            Company
                            <span
                              title="If a company trip enter the name of the company"
                              className="mdi mdi-help-circle text-info"
                            ></span>
                          </Form.Label>
                          <Form.Control
                            type="text"
                            id="supplierName-field"
                            placeholder="Enter company"
                            required
                          />
                        </div>
                      </Col>
                      {/* External Reference  == Done*/}
                      <Col lg={4}>
                        <div className="mb-3">
                          <Form.Label htmlFor="supplierName-field">
                            External Reference
                            <span
                              title="If a customer has a reference number enter here otherwise leave blank"
                              className="mdi mdi-help-circle text-info"
                            ></span>
                          </Form.Label>
                          <Form.Control
                            type="text"
                            id="supplierName-field"
                            placeholder="Enter external reference"
                            required
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      {/* Notes  == Done */}
                      <Row>
                        <h3>Passenger</h3>
                      </Row>
                      <Row>
                        <Col lg={4}>
                          <div className="mb-3">
                            <Form.Label htmlFor="supplierName-field">
                              Passenger Name
                            </Form.Label>
                            <Form.Control
                              type="text"
                              id="supplierName-field"
                              placeholder="Enter Passenger name"
                              required
                            />
                          </div>
                        </Col>
                        {/*  Type == Done */}
                        <Col lg={4}>
                          <div className="mb-3">
                            <Form.Label htmlFor="supplierName-field">
                              Passenger Email
                            </Form.Label>
                            <Form.Control
                              type="email"
                              id="supplierName-field"
                              placeholder="Enter Passenger email"
                              required
                            />
                          </div>
                        </Col>
                        {/* Pickup date & time  == Not Yet */}
                        <Col lg={4}>
                          <div className="mb-3">
                            <Form.Label htmlFor="supplierName-field">
                              Phone Number
                            </Form.Label>
                            <Form.Control
                              type="email"
                              id="supplierName-field"
                              placeholder="Enter Passenger phone number"
                              required
                            />
                          </div>
                        </Col>
                      </Row>
                    </Row>
                  </Card.Header>
                  <Card.Body>
                    <div className="mb-3">
                      <Form className="tablelist-form p-2">
                        <Row>
                          <Card.Header>
                            <div className="d-flex align-items-center p-1">
                              <div className="flex-shrink-0 me-3">
                                <div className="avatar-sm">
                                  <div className="avatar-title rounded-circle bg-light text-primary fs-20">
                                    <i className="ph ph-bus"></i>
                                  </div>
                                </div>
                              </div>
                              <div className="flex-grow-1">
                                <h5 className="card-title mb-1">Transport</h5>
                              </div>
                            </div>
                            <Row>
                              {/* Collection_address  == Done */}
                              <Col lg={3}>
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
                                    <option value="No Luggage">
                                      No Luggage
                                    </option>
                                    <option value="10Kg">
                                      Lap Luggage Only
                                    </option>
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
                              <Col lg={3}>
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
                                    <option value="Weeding">
                                      Charity Event
                                    </option>
                                    <option value="Weeding">
                                      Christmas Party
                                    </option>
                                    <option value="10Kg">
                                      Corporate Event
                                    </option>
                                    <option value="20Kg">Day Trip</option>
                                    <option value="20Kg">Emergency</option>
                                    <option value="20Kg">
                                      Football Away Game( fan trip)
                                    </option>
                                    <option value="10Kg">Funeral</option>
                                    <option value="10Kg">Golf Trip</option>
                                    <option value="10Kg">Night Out</option>
                                    <option value="20Kg">
                                      Rail Replacement
                                    </option>
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
                          </Card.Header>
                        </Row>
                      </Form>
                    </div>
                    <div className="mb-3">
                      <Form className="tablelist-form p-2">
                        <Row>
                          <Card.Header>
                            <div className="d-flex align-items-center p-1">
                              <div className="flex-shrink-0 me-3">
                                <div className="avatar-sm">
                                  <div className="avatar-title rounded-circle bg-light text-primary fs-20">
                                    <i className="ph ph-currency-gbp"></i>
                                  </div>
                                </div>
                              </div>
                              <div className="flex-grow-1">
                                <h5 className="card-title mb-1">Price</h5>
                              </div>
                            </div>
                            <Row>
                              {/* Collection_address  == Done */}
                              <Col lg={3}>
                                <div className="mb-3">
                                  <Form.Label htmlFor="supplierName-field">
                                    Vehicle Price
                                  </Form.Label>
                                  <Form.Control
                                    type="email"
                                    id="supplierName-field"
                                    placeholder="Enter Vehicle Price"
                                    required
                                  />
                                </div>
                              </Col>
                              {/* Vehicle Type  == Done */}
                              <Col lg={3}>
                                <div className="mb-3">
                                  <label
                                    htmlFor="statusSelect"
                                    className="form-label"
                                  >
                                    Total Price
                                  </label>
                                  <Form.Control
                                    type="email"
                                    id="supplierName-field"
                                    placeholder="00.00"
                                    readOnly
                                    required
                                  />
                                </div>
                              </Col>
                              {/* Luggage Details  == Done */}
                              <Col lg={3}>
                                <div className="mb-3">
                                  <Form.Label htmlFor="supplierName-field">
                                    Deposit %
                                  </Form.Label>
                                  <Form.Control
                                    type="email"
                                    id="supplierName-field"
                                    placeholder="Enter Vehicle Price"
                                    defaultValue={30}
                                    required
                                  />
                                </div>
                              </Col>
                              {/* Luggage Details  == Done */}
                              <Col lg={3}>
                                <div className="mb-3">
                                  <Form.Label htmlFor="supplierName-field">
                                    Deposit Amount
                                  </Form.Label>
                                  <Form.Control
                                    type="email"
                                    id="supplierName-field"
                                    placeholder="00.00"
                                    readOnly
                                    required
                                  />
                                </div>
                              </Col>
                            </Row>
                            <Row>
                              <Col lg={3}>
                                <div className="mb-3">
                                  <Form.Label htmlFor="supplierName-field">
                                    Balance Due Date
                                  </Form.Label>
                                  <Flatpickr
                                    className="form-control flatpickr-input"
                                    placeholder="Select Date-time"
                                    options={{
                                      dateFormat: "d M, Y",
                                    }}
                                  />
                                </div>
                              </Col>
                              <Col lg={5}>
                                <div className="mb-3">
                                  <Form.Label htmlFor="supplierName-field">
                                    Payment Message
                                  </Form.Label>
                                  <textarea
                                    className="form-control"
                                    id="exampleFormControlTextarea5"
                                    rows={3}
                                  ></textarea>
                                </div>
                              </Col>
                            </Row>
                          </Card.Header>
                          <Card.Header>
                            <div className="d-flex align-items-center p-1">
                              <div className="flex-shrink-0 me-3">
                                <div className="avatar-sm">
                                  <div className="avatar-title rounded-circle bg-light text-primary fs-20">
                                    <i className="ph ph-question"></i>
                                  </div>
                                </div>
                              </div>
                              <div className="flex-grow-1">
                                <h5 className="card-title mb-1">Misc</h5>
                              </div>
                            </div>
                            <Row>
                              {/* Collection_address  == Done */}
                              <Col lg={3}>
                                <div className="mb-3">
                                  <Form.Label htmlFor="supplierName-field">
                                    How did you hear of us ?
                                  </Form.Label>
                                  <select
                                    className="form-select text-muted"
                                    name="choices-single-default"
                                    id="statusSelect"
                                    required
                                  >
                                    <option value="">Select</option>
                                    <option value="1">Bing / MSN</option>
                                    <option value="2">
                                      Booked With us Before
                                    </option>
                                    <option value="3">Colleague</option>
                                    <option value="4">Google</option>
                                    <option value="5">Recommendation</option>
                                    <option value="3">Yahoo</option>
                                    <option value="4">Yell</option>
                                    <option value="5">Other</option>
                                  </select>
                                </div>
                              </Col>
                              {/* Vehicle Type  == Done */}
                              <Col lg={3}>
                                <div className="mb-3">
                                  <Form.Label htmlFor="supplierName-field">
                                    Salesperson
                                  </Form.Label>
                                  <select
                                    className="form-select text-muted"
                                    name="choices-single-default"
                                    id="statusSelect"
                                    required
                                  >
                                    <option value="">Select</option>
                                    <option value="1" selected>
                                      Abdelbari ben Yagouta
                                    </option>
                                    <option value="2">Adel</option>
                                    <option value="3">Anna</option>
                                    <option value="4">Amine</option>
                                  </select>
                                </div>
                              </Col>
                              {/* Luggage Details  == Done */}
                              <Col lg={3}>
                                <div className="mb-3">
                                  <Form.Label htmlFor="supplierName-field">
                                    Priority
                                  </Form.Label>
                                  <select
                                    className="form-select text-muted"
                                    name="choices-single-default"
                                    id="statusSelect"
                                    required
                                  >
                                    <option value="">Select</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="4">5</option>
                                  </select>
                                </div>
                              </Col>
                              {/* Luggage Details  == Done */}
                              <Col lg={3}>
                                <div className="mb-3">
                                  <Form.Label htmlFor="supplierName-field">
                                    Notes
                                  </Form.Label>
                                  <textarea
                                    className="form-control"
                                    id="exampleFormControlTextarea5"
                                    rows={3}
                                  ></textarea>
                                </div>
                              </Col>
                            </Row>
                          </Card.Header>
                          <Col lg={12} className="mt-2">
                            <div className="hstack gap-2 justify-content-end">
                              <Button
                                variant="success"
                                id="add-btn"
                                className="btn-sm"
                              >
                                Save & Send
                              </Button>
                              <Button
                                variant="info"
                                id="add-btn"
                                className="btn-sm"
                              >
                                Quick Save
                              </Button>
                            </div>
                          </Col>
                        </Row>
                      </Form>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={4}>
                <Card>
                  <Card.Header>
                    <div className="d-flex align-items-center p-1">
                      <div className="flex-shrink-0 me-3">
                        <div className="avatar-sm">
                          <div className="avatar-title rounded-circle bg-light text-primary fs-20">
                            <i className="ph ph-user"></i>
                          </div>
                        </div>
                      </div>
                      <div className="flex-grow-1">
                        <h5 className="card-title mb-1">Trip Details</h5>
                      </div>
                    </div>
                  </Card.Header>
                  <Card.Body>
                    <Row>
                      <Form>
                        <Col lg={12}>
                          <Form.Label>Pickup date</Form.Label>
                          <Flatpickr
                            className="form-control flatpickr-input"
                            placeholder="Select Date-time"
                            options={{
                              dateFormat: "d M, Y",
                            }}
                          />
                        </Col>
                        <Col lg={12}>
                          <Form.Label>Collection Address</Form.Label>
                          <Form.Control
                            type="email"
                            id="supplierName-field"
                            placeholder="Enter Collection address"
                            required
                          />
                        </Col>
                        <Col lg={12}>
                          <Form.Label>Destination Address</Form.Label>
                          <Form.Control
                            type="email"
                            id="supplierName-field"
                            placeholder="Enter Destination address"
                            required
                          />
                        </Col>
                        <Row className="mt-2">
                          <div className="d-flex justify-content-evenly mb-2">
                            <button
                              type="button"
                              className="btn btn-primary btn-sm fs-10"
                            >
                              <i className="ph ph-note-blank"></i> Blank Journey
                            </button>

                            <button
                              type="button"
                              className="btn btn-primary btn-sm fs-10"
                            >
                              <i className="ph ph-key-return"></i> Return
                            </button>

                            <button
                              type="button"
                              className="btn btn-primary btn-sm fs-10"
                            >
                              <i className="ph ph-copy"></i> Duplicate Mouvement
                            </button>
                          </div>
                          <div className="d-flex justify-content-sm-around">
                            <button
                              type="button"
                              className="btn btn-primary btn-sm fs-10"
                            >
                              <i className="ph ph-user-plus"></i> Assign Driver
                            </button>

                            <button
                              type="button"
                              className="btn btn-primary btn-sm fs-10"
                            >
                              <i className="ph ph-share"></i> Push Job
                            </button>

                            <button
                              type="button"
                              className="btn btn-primary btn-sm fs-10"
                            >
                              <i className="ph ph-trash-simple"></i> Remove
                              Driver
                            </button>
                          </div>
                        </Row>
                      </Form>
                    </Row>
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
