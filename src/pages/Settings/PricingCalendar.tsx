import React, { useState } from "react";
import {
  Container,
  Dropdown,
  Form,
  Row,
  Card,
  Col,
  Button,
  Image,
  ListGroup,
  Modal,
} from "react-bootstrap";
import DataTable from "react-data-table-component";
import Breadcrumb from "Common/BreadCrumb";
import Flatpickr from "react-flatpickr";
import img1 from "assets/images/brands/img-1.png";
import img2 from "assets/images/brands/img-2.png";
import img3 from "assets/images/brands/img-3.png";
import img4 from "assets/images/brands/img-4.png";
import img5 from "assets/images/brands/img-5.png";
import img6 from "assets/images/brands/img-6.png";
import img7 from "assets/images/brands/img-7.png";
import img8 from "assets/images/brands/img-8.png";
import img9 from "assets/images/brands/img-9.png";
import img10 from "assets/images/brands/img-10.png";
import img11 from "assets/images/brands/img-11.png";
import img12 from "assets/images/brands/img-12.png";
import img13 from "assets/images/brands/img-13.png";
import img14 from "assets/images/brands/img-14.png";
import { Link } from "react-router-dom";

const PricingCalendar = () => {
  const [modal_QuoteInfo, setmodal_QuoteInfo] = useState<boolean>(false);
  function tog_QuoteInfo() {
    setmodal_QuoteInfo(!modal_QuoteInfo);
  }

  const columns = [
    {
      name: <span className="font-weight-bold fs-13">Priority</span>,
      selector: (row: any) => row.Priority,
      sortable: true,
    },
    {
      name: <span className="font-weight-bold fs-13">Name</span>,
      selector: (row: any) => row.Name,
      sortable: true,
    },
    {
      name: <span className="font-weight-bold fs-13">Date</span>,
      selector: (row: any) => row.Date,
      sortable: true,
    },
    {
      name: <span className="font-weight-bold fs-13">Time</span>,
      selector: (row: any) => row.Time,
      sortable: true,
    },
    {
      name: <span className="font-weight-bold fs-13">Days</span>,
      selector: (row: any) => row.Days,
      sortable: true,
    },
    {
      name: <span className="font-weight-bold fs-13">Vehicles</span>,
      selector: (row: any) => row.Vehicles,
      sortable: true,
    },
    {
      name: <span className="font-weight-bold fs-13">Location</span>,
      selector: (row: any) => row.Location,
      sortable: true,
    },
    {
      name: <span className="font-weight-bold fs-13">Uplift</span>,
      selector: (row: any) => row.Uplift,
      sortable: true,
    },
    {
      name: <span className="font-weight-bold fs-13">Exclusive</span>,
      selector: (row: any) => row.Exclusive,
      sortable: true,
    },
    {
      name: <span className="font-weight-bold fs-13">Action</span>,
      sortable: true,

      cell: () => {
        return (
          <ul className="hstack gap-2 list-unstyled mb-0">
            <li>
              <Link to="#" className="badge badge-soft-primary edit-item-btn">
                <i className="ri-eye-line"></i>
              </Link>
            </li>
            <li>
              <Link to="#" className="badge badge-soft-success edit-item-btn">
                <i className="ri-edit-2-line"></i>
              </Link>
            </li>
            <li>
              <Link to="#" className="badge badge-soft-danger remove-item-btn">
                <i className="ri-delete-bin-2-line"></i>
              </Link>
            </li>
          </ul>
        );
      },
    },
  ];
  const data = [
    {
      Priority: "1",
      Name: "Cheltenham races",
      Date: "10th Mar - 14th Mar",
      Time: "07:00 - 20:00",
      Days: "All",
      Vehicles: "Standard Saloon Car",
      Location: "N/A",
      Uplift: "25%",
      Exclusive: "Yes",
    },
    {
      Priority: "1",
      Name: "Christmas",
      Date: "24th Dec - 26th Dec",
      Time: "14:00 - 23:59",
      Days: "All",
      Vehicles: "Standard Saloon Car",
      Location: "BIRMINGHAM NEW STREET STATION",
      Uplift: "50%",
      Exclusive: "No",
    },
  ];

  const [modal_AddCalendar, setmodal_AddCalendar] = useState<boolean>(false);
  function tog_AddCalendar() {
    setmodal_AddCalendar(!modal_AddCalendar);
  }

  return (
    <React.Fragment>
      <Col lg={12}>
        <Card id="shipmentsList">
          <Card.Header className="border-bottom-dashed">
            <Row className="g-3">
              <Col xxl={3} lg={6}>
                <div className="search-box">
                  <input
                    type="text"
                    className="form-control search"
                    placeholder="Search for something..."
                  />
                  <i className="ri-search-line search-icon"></i>
                </div>
              </Col>
              <Col lg={7}></Col>
              <Col>
                <div
                  className="btn-group btn-group-sm mt-2"
                  role="group"
                  aria-label="Basic example"
                >
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => tog_AddCalendar()}
                  >
                    <i className="ri-pin-distance-line align-middle"></i>{" "}
                    <span>Add New Pricing Calendar</span>
                  </button>
                </div>
              </Col>
            </Row>
          </Card.Header>
          <Card.Body>
            <DataTable columns={columns} data={data} pagination />
          </Card.Body>
        </Card>
      </Col>
      <Modal
        className="fade zoomIn"
        size="lg"
        show={modal_AddCalendar}
        onHide={() => {
          tog_AddCalendar();
        }}
        centered
      >
        <Modal.Header className="px-4 pt-4" closeButton>
          <h5 className="modal-title fs-18" id="exampleModalLabel">
            Add New Pricing Calendar
          </h5>
        </Modal.Header>
        <Modal.Body className="p-4">
          <div
            id="alert-error-msg"
            className="d-none alert alert-danger py-2"
          ></div>
          <Form className="tablelist-form">
            <input type="hidden" id="id-field" />
            <Row>
              <Col lg={4}>
                <div className="mb-3">
                  <Form.Label htmlFor="customerName-field">Name</Form.Label>
                  <Form.Control
                    type="text"
                    id="customerName-field"
                    // placeholder="Enter Limit"
                    required
                  />
                </div>
              </Col>
              <Col lg={4}>
                <div className="mb-3">
                  <Form.Label htmlFor="customerName-field">Priority</Form.Label>
                  <select
                    className="form-select text-muted"
                    name="choices-single-default"
                    id="statusSelect"
                    required
                  >
                    <option value="Brit Coaches Ltd" selected>
                      1
                    </option>
                    <option value="Dorset Mini Coach">2</option>
                    <option value="Brit Coaches Ltd">3</option>
                    <option value="Dorset Mini Coach">4</option>
                    <option value="Dorset Mini Coach">5</option>
                    <option value="Dorset Mini Coach">6</option>
                    <option value="Brit Coaches Ltd">7</option>
                    <option value="Dorset Mini Coach">8</option>
                    <option value="Brit Coaches Ltd">9</option>
                    <option value="Dorset Mini Coach">10</option>
                    <option value="Dorset Mini Coach">11</option>
                    <option value="Dorset Mini Coach">12</option>
                  </select>
                </div>
              </Col>
              <Col lg={4}>
                <div className="d-flex align-items-center mb-3">
                  <Form.Label htmlFor="customerName-field">
                    Exclusive
                  </Form.Label>
                  <div className="form-check m-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="formCheck1"
                      checked
                    />
                  </div>
                </div>
              </Col>
              <Col lg={12}>
                <div className="mb-3">
                  <Form.Label htmlFor="customerName-field">Account</Form.Label>
                  <select
                    className="form-select text-muted"
                    name="choices-single-default"
                    id="statusSelect"
                    required
                  >
                    <option value="Brit Coaches Ltd">Select</option>
                    <option value="Dorset Mini Coach">
                      The Best Connection
                    </option>
                    <option value="Brit Coaches Ltd">Zeelo</option>
                    <option value="Dorset Mini Coach">Access Bookings</option>
                  </select>
                </div>
              </Col>
              <Col lg={6}>
                <div className="mb-3">
                  <Form.Label htmlFor="customerName-field"></Form.Label>
                  <Flatpickr
                    className="form-control flatpickr-input"
                    placeholder="Start Date"
                    options={{
                      dateFormat: "d M, Y",
                    }}
                  />
                </div>
              </Col>
              <Col lg={6}>
                <div className="mb-3">
                  <Form.Label htmlFor="customerName-field"></Form.Label>
                  <Flatpickr
                    className="form-control flatpickr-input"
                    placeholder="End Date"
                    options={{
                      dateFormat: "d M, Y",
                    }}
                  />
                </div>
              </Col>
              <Col lg={6}>
                <div className="mb-3">
                  <Form.Label htmlFor="customerName-field"></Form.Label>
                  <Flatpickr
                    className="form-control flatpickr-input"
                    placeholder="Start Time"
                    options={{
                      dateFormat: "d M, Y",
                    }}
                  />
                </div>
              </Col>
              <Col lg={6}>
                <div className="mb-3">
                  <Form.Label htmlFor="customerName-field"></Form.Label>
                  <Flatpickr
                    className="form-control flatpickr-input"
                    placeholder="End Time"
                    options={{
                      dateFormat: "d M, Y",
                    }}
                  />
                </div>
              </Col>
              <Col lg={12}>
                <div className="mb-3">
                  <Form.Label htmlFor="customerName-field">Days</Form.Label>
                  <Col lg={6}>
                    <Row>
                      <Col lg={3}>
                        <div className="form-check mb-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="formCheck1"
                            checked
                          />
                          <label
                            className="form-check-label"
                            htmlFor="formCheck1"
                          >
                            Monday
                          </label>
                        </div>
                      </Col>
                      <Col lg={3}>
                        <div className="form-check mb-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="formCheck1"
                            checked
                          />
                          <label
                            className="form-check-label"
                            htmlFor="formCheck1"
                          >
                            Tuesday
                          </label>
                        </div>
                      </Col>
                      <Col lg={3}>
                        <div className="form-check mb-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="formCheck1"
                            checked
                          />
                          <label
                            className="form-check-label"
                            htmlFor="formCheck1"
                          >
                            Wednesday
                          </label>
                        </div>
                      </Col>
                      <Col lg={3}>
                        <div className="form-check mb-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="formCheck1"
                            checked
                          />
                          <label
                            className="form-check-label"
                            htmlFor="formCheck1"
                          >
                            Thursday
                          </label>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                  <Col lg={6}>
                    <Row>
                      <Col lg={3}>
                        {" "}
                        <div className="form-check mb-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="formCheck1"
                            checked
                          />
                          <label
                            className="form-check-label"
                            htmlFor="formCheck1"
                          >
                            Friday
                          </label>
                        </div>
                      </Col>
                      <Col lg={3}>
                        <div className="form-check mb-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="formCheck1"
                            checked
                          />
                          <label
                            className="form-check-label"
                            htmlFor="formCheck1"
                          >
                            Saturday
                          </label>
                        </div>
                      </Col>
                      <Col lg={3}>
                        <div className="form-check mb-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="formCheck1"
                            checked
                          />
                          <label
                            className="form-check-label"
                            htmlFor="formCheck1"
                          >
                            Sunday
                          </label>
                        </div>
                      </Col>
                      <Col lg={3}>
                        <div className="form-check mb-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="formCheck1"
                            checked
                          />
                          <label
                            className="form-check-label"
                            htmlFor="formCheck1"
                          >
                            All
                          </label>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </div>
              </Col>
              <Col lg={12}>
                <div className="mb-3">
                  <Form.Label htmlFor="supplierName-field">Vehicle</Form.Label>
                  <select
                    className="form-select text-muted"
                    name="choices-single-default"
                    id="statusSelect"
                    required
                  >
                    <option value="">Type</option>
                    <option value="Brit Coaches Ltd">
                      Standard Saloon Car
                    </option>
                    <option value="Dorset Mini Coach">
                      Executive Saloon Car
                    </option>
                    <option value="Brit Coaches Ltd">VIP Saloon Car</option>
                    <option value="Dorset Mini Coach">
                      Standard 6 Seat MPV
                    </option>
                    <option value="Dorset Mini Coach">
                      Executive 6 Seat MPV
                    </option>
                    <option value="Dorset Mini Coach">
                      10-16 Seat Standard Minibus
                    </option>
                  </select>
                </div>
              </Col>
              <Col lg={12}>
                <div className="mb-3">
                  <Form.Label htmlFor="supplierName-field">Location</Form.Label>
                  <select
                    className="form-select text-muted"
                    name="choices-single-default"
                    id="statusSelect"
                    required
                  >
                    <option value="">Select</option>
                    <option value="Brit Coaches Ltd">Aberdeen Airport</option>
                    <option value="Dorset Mini Coach">
                      Birmingham Airport
                    </option>
                    <option value="Brit Coaches Ltd">Doncaster Airport</option>
                    <option value="Dorset Mini Coach">Eurostar Station</option>
                    <option value="Dorset Mini Coach">
                      Gatwick North Terminal
                    </option>
                    <option value="Dorset Mini Coach">
                      Gatwick South Terminal
                    </option>
                  </select>
                </div>
              </Col>
              <Col lg={12}>
                <div className="mb-3">
                  <Form.Label htmlFor="supplierName-field">Uplift</Form.Label>
                  <Form.Control
                    type="text"
                    id="customerName-field"
                    // placeholder="Enter Limit"
                    required
                  />
                </div>
              </Col>
              <Col lg={12}>
                <div className="hstack gap-2 justify-content-end">
                  <Button
                    className="btn-ghost-danger"
                    onClick={() => {
                      tog_AddCalendar();
                    }}
                    data-bs-dismiss="modal"
                  >
                    <i className="ri-close-line align-bottom me-1"></i> Close
                  </Button>
                  <Button variant="primary" id="add-btn">
                    Add
                  </Button>
                </div>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
};
export default PricingCalendar;
