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

const MileageBands = () => {
  const [modal_QuoteInfo, setmodal_QuoteInfo] = useState<boolean>(false);
  function tog_QuoteInfo() {
    setmodal_QuoteInfo(!modal_QuoteInfo);
  }

  const columns = [
    {
      name: <span className="font-weight-bold fs-13">Car Type</span>,
      selector: (row: any) => row.carType,
      sortable: true,
    },
    {
      name: <span className="font-weight-bold fs-13">Limit</span>,
      selector: (row: any) => row.Limit,
      sortable: true,
    },
    {
      name: <span className="font-weight-bold fs-13">Price</span>,
      selector: (row: any) => row.Price,
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
      carType: "10-16 Seat Standard Minibus",
      Limit: "50 miles",
      Price: "£ 1.95",
    },
    {
      carType: "10-16 Seat Standard Minibus",
      Limit: "200 miles",
      Price: "£ 1.60",
    },
    {
      carType: "10-16 Seat Standard Minibus",
      Limit: "1000 miles",
      Price: "£ 1.45",
    },
    {
      carType: "Executive Saloon Car",
      Limit: "50 miles",
      Price: "£ 2.20",
    },
    {
      carType: "Executive Saloon Car",
      Limit: "200 miles",
      Price: "£ 1.80",
    },
    {
      carType: "Executive Saloon Car",
      Limit: "1000 miles",
      Price: "£ 1.60",
    },

    {
      carType: "Standard Saloon Car",
      Limit: "50 miles",
      Price: "£ 1.60",
    },
    {
      carType: "Standard Saloon Car",
      Limit: "200 miles",
      Price: "£ 1.60",
    },
    {
      carType: "Standard Saloon Car",
      Limit: "1000 miles",
      Price: "£ 1.60",
    },

    {
      carType: "Standard 6 Seat MPV",
      Limit: "50 miles",
      Price: "£ 2.25",
    },
    {
      carType: "Standard 6 Seat MPV",
      Limit: "200 miles",
      Price: "£ 1.90",
    },
    {
      carType: "Standard 6 Seat MPV",
      Limit: "1000 miles",
      Price: "£ 1.70",
    },
    {
      carType: "Executive 6 Seat MPV",
      Limit: "50 miles",
      Price: "£ 2.40",
    },
    {
      carType: "Executive 6 Seat MPV",
      Limit: "200 miles",
      Price: "£ 2.10",
    },
    {
      carType: "Executive 6 Seat MPV",
      Limit: "1000 miles",
      Price: "£ 1.90",
    },
    {
      carType: "17-24 Seat Standard Midi Coach",
      Limit: "50 miles",
      Price: "£ 2.20",
    },
    {
      carType: "17-24 Seat Standard Midi Coach",
      Limit: "200 miles",
      Price: "£ 1.95",
    },
    {
      carType: "17-24 Seat Standard Midi Coach",
      Limit: "1000 miles",
      Price: "£ 1.80",
    },
  ];

  const [modal_AddMileage, setmodal_AddMileage] = useState<boolean>(false);
  function tog_AddMileage() {
    setmodal_AddMileage(!modal_AddMileage);
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
                    onClick={() => tog_AddMileage()}
                  >
                    <i className="ri-pin-distance-line align-middle"></i>{" "}
                    <span>Add New Mileage Bands</span>
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
        size="sm"
        show={modal_AddMileage}
        onHide={() => {
          tog_AddMileage();
        }}
        centered
      >
        <Modal.Header className="px-4 pt-4" closeButton>
          <h5 className="modal-title fs-18" id="exampleModalLabel">
            Add New Mileage Bands
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
                  <Form.Label htmlFor="customerName-field">Limit</Form.Label>
                  <Form.Control
                    type="text"
                    id="customerName-field"
                    placeholder="Enter Limit"
                    required
                  />
                </div>
              </Col>
              <Col lg={12}>
                <div className="mb-3">
                  <Form.Label htmlFor="customerName-field">Price</Form.Label>
                  <Form.Control
                    type="text"
                    id="customerName-field"
                    placeholder="£ 0.00"
                    required
                  />
                </div>
              </Col>
              <Col lg={12}>
                <div className="hstack gap-2 justify-content-end">
                  <Button
                    className="btn-ghost-danger"
                    onClick={() => {
                      tog_AddMileage();
                    }}
                    data-bs-dismiss="modal"
                  >
                    <i className="ri-close-line align-bottom me-1"></i> Close
                  </Button>
                  <Button variant="primary" id="add-btn">
                    Add New Mileage Band
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
export default MileageBands;
