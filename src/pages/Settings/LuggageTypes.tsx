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

const LuggageTypes = () => {
  const [modal_QuoteInfo, setmodal_QuoteInfo] = useState<boolean>(false);
  function tog_QuoteInfo() {
    setmodal_QuoteInfo(!modal_QuoteInfo);
  }

  const columns = [
    {
      name: <span className="font-weight-bold fs-13">Size</span>,
      selector: (row: any) => row.size,
      sortable: true,
    },

    {
      name: <span className="font-weight-bold fs-13">Luggage</span>,
      selector: (row: any) => row.Luggage,
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
      size: "4.00",
      Luggage:
        "More than 2 x 22kg Check in Luggage each (must be discussed with a sales rep)",
    },
    {
      size: "3.00",
      Luggage: "1 x 22kg Check in luggage and 1 x 10kg Hand Luggage per person",
    },
    {
      size: "2.00",
      Luggage: "1 x 10kg Hand luggage per person only",
    },
    {
      size: "0.00",
      Luggage: "	No luggage",
    },
    {
      size: "3.60",
      Luggage: "1 x 10kg Hand Luggage and 1 set golf clubs each",
    },
    {
      size: "3.40",
      Luggage: "1 x 10kg Hand luggage and 1 x small sports kit bag each",
    },
    {
      size: "1.00",
      Luggage: "Lap Luggage Only",
    },
    {
      size: "3.50",
      Luggage: "1 Set of golf clubs each",
    },
    {
      size: "1.20",
      Luggage: "1 x 20kg Check in luggage per person only",
    },
  ];

  const [modal_AddLuggage, setmodal_AddLuggage] = useState<boolean>(false);
  function tog_AddLuggage() {
    setmodal_AddLuggage(!modal_AddLuggage);
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
                    onClick={() => tog_AddLuggage()}
                  >
                    <i className="ri-roadster-line align-middle"></i>{" "}
                    <span>Add New Luggage</span>
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
        show={modal_AddLuggage}
        onHide={() => {
          tog_AddLuggage();
        }}
        centered
      >
        <Modal.Header className="px-4 pt-4" closeButton>
          <h5 className="modal-title fs-18" id="exampleModalLabel">
            Add New Luggage Type
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
                  <Form.Label htmlFor="customerName-field">Size</Form.Label>
                  <Form.Control
                    type="text"
                    id="customerName-field"
                    placeholder="Enter size"
                    required
                  />
                </div>
              </Col>
              <Col lg={12}>
                <div className="mb-3">
                  <Form.Label htmlFor="supplierName-field">Luggage</Form.Label>
                  <Form.Control
                    type="text"
                    id="supplierName-field"
                    placeholder="Enter luggage"
                    required
                  />
                </div>
              </Col>

              <Col lg={12}>
                <div className="hstack gap-2 justify-content-end">
                  <Button
                    className="btn-ghost-danger"
                    onClick={() => {
                      tog_AddLuggage();
                    }}
                    data-bs-dismiss="modal"
                  >
                    <i className="ri-close-line align-bottom me-1"></i> Close
                  </Button>
                  <Button variant="primary" id="add-btn">
                    Add Luggage
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
export default LuggageTypes;
